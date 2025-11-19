# StayX - AI Operations Platform

A Next.js application for autonomous AI operations platform for multi-location businesses.

## 🚀 Quick Start

### Development
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Visit `http://localhost:3000`

### Production Build
```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 📦 Deploy to GitHub + Vercel (Recommended)

### Step 1: Push to GitHub

1. **Create a new repository on GitHub**
   - Go to [github.com](https://github.com) and create a new repository
   - Don't initialize with README (you already have one)

2. **Push your code to GitHub**
   ```bash
   # Add all files
   git add .

   # Commit changes
   git commit -m "Initial commit"

   # Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel (Free)

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import your repository**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Deploy**
   - Click "Deploy"
   - Your app will be live in ~2 minutes!
   - You'll get a URL like: `https://your-app.vercel.app`

4. **Automatic deployments**
   - Every push to `main` branch = automatic deployment
   - Pull requests get preview deployments

## 🌐 Alternative Hosting Options

### Netlify
1. Sign up at [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build command: `pnpm build`
4. Publish directory: `.next`

### Railway
1. Sign up at [railway.app](https://railway.app)
2. Connect GitHub repository
3. Railway auto-detects Next.js

### Render
1. Sign up at [render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Build command: `pnpm build`
5. Start command: `pnpm start`

## 📝 Environment Variables

If you need environment variables, create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

**Note:** For Vercel, add environment variables in the project settings dashboard.

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Radix UI
- **Icons:** Lucide React

## 📄 License

Private - All rights reserved

