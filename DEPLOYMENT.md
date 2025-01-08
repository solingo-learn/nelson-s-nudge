# Deployment Guide

## GitHub Pages Deployment

### Option 1: Automated Deployment with GitHub Actions (Recommended)

1. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"

2. **Add Repository Secrets**
   - Go to Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `VITE_SUPABASE_PROJECT_ID`
     - `VITE_SUPABASE_PUBLISHABLE_KEY`
     - `VITE_SUPABASE_URL`

3. **Push the workflow file**
   - The `.github/workflows/deploy.yml` file is ready
   - Push it to GitHub (requires a token with `workflow` scope)
   - The site will be automatically deployed on every push to `main`

4. **Access your site**
   - Your site will be available at: `https://solingo-learn.github.io/nelson-s-nudge/`

### Option 2: Manual Deployment

If you prefer to deploy manually:

1. **Build the project locally**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: Select `gh-pages` and `/root`
   - Push your `dist` folder to the `gh-pages` branch

3. **Using GitHub CLI**
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

## Other Deployment Options

### Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/solingo-learn/nelson-s-nudge)

### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/solingo-learn/nelson-s-nudge)

### Environment Variables

Don't forget to set these environment variables in your deployment platform:
- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_URL`

### Supabase Edge Functions

Configure these in your Supabase project:
- `AI_API_KEY`: Your AI provider API key
- `AI_API_URL`: (Optional) Custom API endpoint
