# 🚀 Deployment Guide - Deploy to Vercel

Your portfolio website is complete and ready to deploy. Follow these steps to get it live.

## Option 1: Deploy to Your Existing saransp.vercel.app Domain

### Step 1: Initialize Git Repository
```bash
cd "C:\Apps\Saran Portfolio"
git init
git add .
git commit -m "Complete mechanical engineering portfolio with real content"
git branch -M main
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `saran-portfolio`
3. Description: "Professional portfolio - Mechanical CAD Engineer"
4. Make it Public (so recruiters can see the code)
5. Click "Create repository"

### Step 3: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/saran-portfolio.git
git push -u origin main
```
(Replace YOUR_USERNAME with your actual GitHub username)

### Step 4: Deploy via Vercel

**If you already have saransp.vercel.app:**
1. Go to https://vercel.com/dashboard
2. Click "Add New Project"
3. Select your GitHub repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"
6. Wait ~2-3 minutes for deployment
7. Your site is now live!

**If starting fresh:**
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

## Option 2: Update Existing Deployment

If you want to update your current saransp.vercel.app:

1. Your new code is already connected if you use the same GitHub repo
2. Every git push automatically redeploys
3. Changes go live within 1-2 minutes

```bash
# Make changes locally
# Test with: npm run dev
# Then commit and push
git add .
git commit -m "Update portfolio content"
git push origin main
```

## Configuration (Optional)

### Add Email Integration

Before deploying, set up email for contact form:

**Using Formspree:**
1. Edit `/app/contact/page.tsx`
2. Replace the form submission with:
```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: new FormData(e.currentTarget),
});
```

**Using Resend (Recommended):**
1. Install: `npm install resend`
2. Create `.env.local`:
```
RESEND_API_KEY=your_api_key_here
```
3. Create `/app/api/contact/route.ts`:
```tsx
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
// ... email sending logic
```

### Add Custom Domain

In Vercel Dashboard:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain (e.g., saransp.com)
4. Follow DNS setup instructions from your registrar

## Pre-Deployment Checklist

- [ ] Add resume PDF: `/public/documents/resume.pdf`
- [ ] Test locally: `npm run dev`
- [ ] All pages load correctly
- [ ] Links work on mobile (test hamburger menu)
- [ ] Contact form appears without errors
- [ ] No broken images
- [ ] GitHub repo created and pushed
- [ ] Vercel account created

## Deployment Steps (TL;DR)

```bash
# 1. Initialize git
git init
git add .
git commit -m "Portfolio complete"

# 2. Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/saran-portfolio.git
git push -u origin main

# 3. Deploy on Vercel
# Visit vercel.com → Add New Project → Select repo → Deploy

# Done! ✨
```

## Verify Deployment

After deployment:
1. Visit your Vercel URL (given during deployment)
2. Test all pages load correctly
3. Check mobile responsiveness
4. Verify social links work
5. Test contact form

## Post-Deployment Updates

Want to update content? Easy!

```bash
# 1. Make changes to /data/ files
# 2. Test locally: npm run dev
# 3. Commit and push
git add .
git commit -m "Update project description"
git push origin main

# 4. Vercel auto-deploys within 1-2 minutes
```

## Common Issues & Fixes

**"Module not found" errors?**
```bash
npm install
npm run build
```

**Images not showing?**
- Check image paths start with `/` (relative to `/public/`)
- Verify file names match exactly

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Want to see deployment logs?**
- Vercel Dashboard → Project → Deployments → Click build

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Troubleshooting**: https://vercel.com/support

## Going Live Timeline

- **Locally**: Ready now (http://localhost:3000)
- **GitHub**: 5 minutes to set up
- **Vercel**: 2-3 minutes to deploy
- **Total**: ~10 minutes from now to live website

## Success Indicators

✅ Your portfolio is live and public
✅ Recruiters can view all your work
✅ Contact form is functional
✅ All pages load in <1 second
✅ Mobile-friendly and professional
✅ Your GitHub shows engineering expertise
✅ Social links work
✅ Resume is downloadable

---

**Ready to deploy?** Start with the git commands above and follow the steps.

Questions? Each step includes links to official documentation.

You've got this! 🚀
