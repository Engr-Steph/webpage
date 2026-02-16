# AI & CRM Automation Training Landing Page

A professional, responsive landing page for your AI and CRM automation training business.

## 📁 Files

- **index.html** - Main landing page structure
- **style.css** - Complete responsive styling
- **script.js** - Interactive features and form handling
- **README.md** - This file

## 🎯 Sections Included

1. **Navigation Bar** - Sticky header with mobile hamburger menu
2. **Hero Section** - Eye-catching headline with CTA button
3. **Courses Section** - 4 training programs with details
4. **About Section** - Why choose us with stats and benefits
5. **Contact Section** - Contact form and business information
6. **Footer** - Social links and copyright

## 🎨 Customization Guide

### Colors
Edit `:root` variables in `style.css` to change the color scheme:
```css
:root {
    --primary-color: #4F46E5;    /* Main brand color */
    --secondary-color: #06B6D4;  /* Accent color */
    --text-dark: #1F2937;        /* Text color */
}
```

### Content Changes

**Company Name & Branding:**
- Change "AutoLearn Pro" in the navbar
- Update email: hello@autolearn.pro
- Update phone number and location

**Course Cards:**
- Modify course names, descriptions, and features
- Change duration, level, and benefits

**About Section:**
- Update stats (5,000+ students, 95% success rate, etc.)
- Modify benefits list
- Change company description

### Adding Your Own Images
Replace the SVG placeholders with actual images:
- Hero image: Find `.hero-image` in HTML
- About image: Find `.about-image` in HTML

Example: `<img src="your-image.jpg" alt="Description">`

## 🚀 How to Use

1. **Open locally:** Double-click `index.html` or right-click → Open with Browser
2. **Edit content:** Update text in `index.html`
3. **Customize colors:** Modify CSS variables in `style.css`
4. **Deploy:** Upload all 3 files to your web hosting

## ✨ Features

- ✅ Fully responsive (desktop, tablet, mobile)
- ✅ Smooth scrolling navigation
- ✅ Mobile hamburger menu
- ✅ Interactive form with validation
- ✅ Animation on scroll for course cards
- ✅ Modern gradient design
- ✅ Professional layout
- ✅ Fast loading (no external dependencies)

## 📱 Mobile Responsive

The page works perfectly on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Form Handling

The contact form currently:
- Validates required fields (Name, Email, Course)
- Validates email format
- Displays success message
- Logs data to browser console

**To send emails:** Connect to a backend service (Formspree, EmailJS, or custom backend)

## 📝 Next Steps

1. Replace placeholder company info with your details
2. Add actual images/logos
3. Update course information with real curriculum
4. Set up form backend for email notifications
5. Add Google Analytics or other tracking
6. Deploy to hosting (Netlify, Vercel, GitHub Pages, etc.)

---

**Need help?** Edit the HTML to add your content, customize the CSS colors, and deploy!
