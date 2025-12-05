# 🚀 Quick Start: Deploy SE TECH to cPanel

## Option 1: Automated Deployment (Recommended)

### Single Command:
```bash
./deploy.sh
```

This script will:
- ✅ Clean old builds
- ✅ Build production bundle
- ✅ Add .htaccess file
- ✅ Create a deployment ZIP file
- ✅ Show deployment statistics

### Then Upload:
1. Download `setech-deployment.zip` to your computer
2. Login to cPanel
3. Go to File Manager → public_html
4. Upload and extract the ZIP file
5. Done! 🎉

---

## Option 2: Manual Deployment

### Step 1: Build
```bash
npm run build
```

### Step 2: Files to Upload
Upload **ONLY** these from the `dist/` folder:
```
dist/
├── index.html          ← Upload this
├── .htaccess          ← Upload this (copy from root)
├── assets/            ← Upload this folder
├── logo.png           ← Upload this
├── favicon.ico        ← Upload this
├── robots.txt         ← Upload this
└── sitemap.xml        ← Upload this
```

### Step 3: cPanel Upload
1. Login to cPanel
2. File Manager → public_html
3. Delete old files (if any)
4. Upload all files from `dist/`
5. Create `.htaccess` (copy content from root `.htaccess`)

---

## Quick Verification Checklist

After deployment, test:
- [ ] Homepage loads: `https://setech.pk`
- [ ] About page: `https://setech.pk/about`
- [ ] Services page: `https://setech.pk/services`
- [ ] Products page: `https://setech.pk/products`
- [ ] Contact page: `https://setech.pk/contact`
- [ ] Logo displays correctly
- [ ] No console errors (F12)
- [ ] Mobile responsive
- [ ] robots.txt: `https://setech.pk/robots.txt`
- [ ] sitemap.xml: `https://setech.pk/sitemap.xml`

---

## Common Issues & Fixes

### 🔴 Issue: 404 on page refresh
**Fix**: Upload `.htaccess` file to root of public_html

### 🔴 Issue: Blank page
**Fix**: Check browser console (F12) for errors, verify all files uploaded

### 🔴 Issue: CSS not loading
**Fix**: Clear browser cache, verify assets folder uploaded

### 🔴 Issue: Routes not working
**Fix**: Check `.htaccess` exists and mod_rewrite is enabled

---

## File Sizes Reference

Expected sizes after build:
- **Total dist/**: ~500-600 KB
- **JavaScript bundle**: ~500 KB (151 KB gzipped)
- **CSS bundle**: ~80 KB (13 KB gzipped)
- **Deployment ZIP**: ~400-500 KB

---

## Support

📖 Detailed guide: See `DEPLOYMENT_GUIDE.md`
🔧 Troubleshooting: Check cPanel error logs
💬 Contact: Your hosting support for server-specific issues

---

**Ready to deploy?** Run `./deploy.sh` and upload! 🚀
