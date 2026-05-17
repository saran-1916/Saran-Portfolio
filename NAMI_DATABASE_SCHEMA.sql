-- ============================================================
-- DATABASE SCHEMA — Saran Portfolio
-- Designed by: NAMI
-- Date: 2026-05-12
-- ============================================================
-- This is a static portfolio site. The ONLY table required is
-- contact_messages. No auth, no user accounts, no dynamic data.
-- ============================================================

-- Auto-update trigger (reusable)
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================
-- TABLE: contact_messages
-- Purpose: Store messages submitted via the /contact form.
--          Read by site owner via Supabase dashboard or admin query.
-- ============================================================

CREATE TABLE IF NOT EXISTS contact_messages (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT        NOT NULL CHECK (char_length(name) >= 2 AND char_length(name) <= 100),
  email       TEXT        NOT NULL CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  subject     TEXT        CHECK (char_length(subject) <= 200),
  message     TEXT        NOT NULL CHECK (char_length(message) >= 10 AND char_length(message) <= 5000),
  read        BOOLEAN     NOT NULL DEFAULT FALSE,
  ip_address  INET,       -- store sender IP for spam review (optional)
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER contact_messages_updated_at
  BEFORE UPDATE ON contact_messages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Index: fast lookup of unread messages (owner dashboard)
CREATE INDEX IF NOT EXISTS idx_contact_messages_read
  ON contact_messages (read, created_at DESC);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Public INSERT: anyone can submit a contact message.
-- No SELECT/UPDATE/DELETE allowed from the public anon key.
-- Owner reads via service role key only (never exposed to browser).
CREATE POLICY "public_insert_contact"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Service role has unrestricted access (implicit in Supabase).
-- No additional policy needed for service_role.

-- ============================================================
-- NOTES FOR ITACHI (if building the API route)
-- ============================================================
-- 1. Use SUPABASE_SERVICE_ROLE_KEY (server-side only) for inserts
--    from the Next.js API route. Never use the anon key server-side
--    when writing to a table — use service role to bypass RLS safely
--    in a trusted server context.
-- 2. Rate-limit the /api/contact route: max 3 requests per IP per hour.
--    Implement via Vercel Edge middleware or an in-memory counter.
-- 3. Send a confirmation email via Resend after successful insert.
-- 4. Do NOT expose contact_messages data to the browser — no
--    NEXT_PUBLIC_ Supabase key should have SELECT on this table.
