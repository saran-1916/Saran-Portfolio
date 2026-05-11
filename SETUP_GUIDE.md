# Portfolio Website - Setup & Customization Guide

## ✅ What's Been Built

Your modern portfolio website is complete with:
- **Homepage** with hero section and call-to-action
- **About Page** - Tell your story
- **Experience Timeline** - Career journey with achievements
- **Skills Dashboard** - Organized by category with proficiency levels
- **Projects Showcase** - Detailed case study format for mechanical design work
- **Apps & Websites** - Showcase hobby projects with tech stack
- **Tools & Products** - Certificates, templates, and AI prompts
- **Resume Page** - PDF viewer and download
- **Contact Form** - Ready for email integration
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Modern UI** - Industrial aesthetic with smooth animations

## 🚀 Getting Started

### View Your Website Locally

The dev server is already running on **http://localhost:3000**

```bash
# If the server stopped, restart it:
npm run dev
```

Then open your browser to: **http://localhost:3000**

## 📝 Step 1: Customize Your Content

All content is stored in `/data/` directory. Edit these files with your information:

### `/data/skills.ts`
- Update skill categories and names
- Set proficiency levels: Expert, Advanced, Intermediate, Beginner

### `/data/experience.ts`
- Add your work experience
- Companies, titles, dates, achievements, technologies

### `/data/projects.ts`
- Add 2-3 mechanical design projects
- Each project needs: title, overview, problem, solution, tools, outcomes
- Add project images to `/public/images/projects/`

### `/data/apps.ts`
- List your web apps and websites
- Include tech stack, features, links
- Add app screenshots to `/public/images/apps/`

### `/data/tools.ts`
- Add certificates, templates, prompts, resources
- Include descriptions and links

### Update Content in Pages

- `/app/about/page.tsx` - Edit the About section text
- `/lib/constants.ts` - Update email, social links, navigation

## 🎨 Customization Tips

### Change Colors
Edit `/tailwind.config.ts` to modify:
- Accent color (currently bright blue)
- Font families
- Spacing and shadows

### Add Your Logo/Images
1. Place images in `/public/images/`
2. Update the Header component logo (change the "S" in `/components/Header.tsx`)
3. Add project/app images with correct paths

### Update Hero Section
Edit `/components/HeroSection.tsx`:
- Change headline and subheading
- Adjust colors and animations
- Modify statistics (5+ years, 10+ projects, etc.)

## 📧 Step 2: Set Up Email Integration

Your contact form is ready, but needs an email service connected. Choose one:

### Option A: Formspree (Easiest)
1. Go to https://formspree.io
2. Create account and project
3. Get your form ID
4. Update `/app/contact/page.tsx`:
   ```tsx
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     body: new FormData(e.currentTarget),
   });
   ```

### Option B: Resend (Recommended)
1. Sign up at https://resend.com
2. Create API key
3. Install: `npm install resend`
4. Add to `/app/api/contact/route.ts`:
   ```tsx
   import { Resend } from 'resend';
   const resend = new Resend(process.env.RESEND_API_KEY);
   ```
5. Add `RESEND_API_KEY` to `.env.local`

### Option C: SendGrid
1. Create account at sendgrid.com
2. Generate API key
3. Use SendGrid SDK to send emails from your form

## 🚀 Step 3: Prepare for Deployment to Vercel

### Add Resume PDF
1. Convert your resume to PDF
2. Place in `/public/documents/resume.pdf`
3. Test via `/resume` page

### Create a GitHub Repository
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/saran-portfolio.git
git push -u origin main
```

### Deploy to Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Select your portfolio repository
5. Click "Deploy"
6. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL` (your domain)
   - `RESEND_API_KEY` (if using Resend)
   - Any other API keys needed

### Configure Custom Domain
In Vercel dashboard:
1. Go to project Settings → Domains
2. Add your custom domain
3. Configure DNS settings

## 🧪 Testing Checklist

Before deploying, test:
- [ ] All pages load correctly
- [ ] Navigation works on mobile (click hamburger menu)
- [ ] Hero section looks good on different screen sizes
- [ ] Project cards display properly
- [ ] Contact form can submit (check browser console)
- [ ] Resume PDF loads
- [ ] Social links work
- [ ] No broken images

## 📱 Responsive Testing

Test on different devices:
```bash
# Chrome DevTools
- iPhone 12 (390x844)
- iPad (768x1024)
- Desktop (1280x800)
```

## 🔧 Troubleshooting

### Images Not Loading
- Check image paths match exactly: `/public/images/projects/name.jpg`
- Use relative paths starting with `/`

### Styles Look Wrong
- Clear cache: `npm run build && npm run dev`
- Check Tailwind classes are spelled correctly

### Contact Form Not Working
- Check browser console for errors
- Verify email service is set up correctly
- Check `.env.local` has correct API keys

## 📚 Project Structure

```
saran-portfolio/
├── app/                    # Pages and API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home
│   ├── about/             # About page
│   ├── experience/        # Experience timeline
│   ├── skills/            # Skills page
│   ├── projects/          # Projects listing
│   ├── apps/              # Apps showcase
│   ├── tools/             # Tools & products
│   ├── resume/            # Resume page
│   ├── contact/           # Contact form
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer
│   ├── HeroSection.tsx    # Hero banner
│   ├── ProjectCard.tsx    # Project card
│   ├── AppCard.tsx        # App card
│   ├── SkillCard.tsx      # Skill badge
│   └── TimelineItem.tsx   # Timeline entry
├── data/                  # Content data
│   ├── skills.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── apps.ts
│   └── tools.ts
├── lib/                   # Utilities
│   └── constants.ts       # Site metadata
├── public/                # Static assets
│   ├── images/            # Project/app images
│   └── documents/         # Resume PDF
├── tailwind.config.ts     # Tailwind configuration
├── next.config.ts         # Next.js configuration
└── package.json           # Dependencies
```

## 🎯 Next Steps

1. **Fill in your content** - Update data files with your information
2. **Add your images** - Project screenshots, app demos, hero image
3. **Set up email** - Choose an email service and integrate
4. **Test locally** - Use `npm run dev` and test all pages
5. **Push to GitHub** - Create a repository and push code
6. **Deploy to Vercel** - Connect your GitHub repo to Vercel
7. **Add custom domain** - Configure your domain

## 📞 Support

For questions about:
- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Vercel Deployment**: https://vercel.com/docs

## 🎉 Congratulations!

Your modern portfolio website is ready! This is a professional, modern, and recruiter-friendly platform to showcase your engineering expertise and digital product skills.

Good luck with your portfolio! 🚀
