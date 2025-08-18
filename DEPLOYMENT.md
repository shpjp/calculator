# How to Deploy Your Calculator Live

Here are several ways to make your calculator available online:

## 🚀 Option 1: GitHub Pages (Recommended - Free)

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name it something like "calculator-app"
4. Make it public
5. Don't initialize with README (we already have one)

### Step 2: Upload Your Files
```bash
# In your calculator folder, run these commands:
git init
git add .
git commit -m "Initial commit - Calculator app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/calculator-app.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

Your calculator will be live at: `https://YOUR_USERNAME.github.io/calculator-app`

---

## 🌐 Option 2: Netlify (Free & Super Easy)

### Step 1: Create Netlify Account
1. Go to [Netlify.com](https://netlify.com)
2. Sign up with GitHub (recommended)

### Step 2: Deploy
1. Click "New site from Git"
2. Choose GitHub and select your calculator repository
3. Click "Deploy site"

Your site will be live instantly with a random URL like: `https://amazing-calculator-123.netlify.app`

### Step 3: Custom Domain (Optional)
- Go to "Site settings" → "Domain management"
- Add your custom domain

---

## ☁️ Option 3: Vercel (Free & Fast)

### Step 1: Create Vercel Account
1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub

### Step 2: Deploy
1. Click "New Project"
2. Import your GitHub repository
3. Click "Deploy"

Your site will be live at: `https://calculator-app-123.vercel.app`

---

## 📱 Option 4: Firebase Hosting (Free)

### Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

### Step 2: Initialize Firebase
```bash
firebase login
firebase init hosting
# Choose your project and set public directory to "." (current folder)
```

### Step 3: Deploy
```bash
firebase deploy
```

---

## 🎯 Option 5: Simple File Sharing (Quick Test)

### For Quick Testing:
1. **Surge.sh**: `npx surge` (if you have Node.js)
2. **GitHub Gist**: Create a gist with your files
3. **CodePen**: Copy your code into CodePen.io

---

## 🔧 Local Development Server

To test locally before deploying:

### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Using Node.js (if installed):
```bash
npx serve .
```

Then visit: `http://localhost:8000`

---

## 📋 Deployment Checklist

Before deploying, make sure:
- [ ] All files are saved
- [ ] Calculator works locally
- [ ] No console errors
- [ ] Files are in the correct structure:
  ```
  calculator/
  ├── index.html
  ├── styles.css
  ├── script.js
  └── README.md
  ```

---

## 🎉 After Deployment

Once live, you can:
- Share the URL with friends
- Add it to your portfolio
- Test it on different devices
- Get feedback from users

## 💡 Pro Tips

1. **GitHub Pages** is perfect for beginners - it's free and integrates well with GitHub
2. **Netlify** offers automatic deployments when you update your code
3. **Vercel** is great for performance and has excellent developer experience
4. Always test your site after deployment to ensure everything works

Choose the option that best fits your needs. GitHub Pages is usually the best starting point for simple projects like this calculator! 