# Roshan Ali — Portfolio Website

A premium, modern personal portfolio website for Roshan Ali, Senior QA Engineer & Quality Leader. Built with React, Vite, and Tailwind CSS. Designed for GitHub Pages deployment.

## Tech Stack

- **React 18** — UI framework
- **Vite 5** — Build tool & dev server
- **Tailwind CSS 3** — Utility-first styling
- **Custom SVG Icons** — No icon library dependencies
- **Google Fonts** — Outfit, Source Sans 3, JetBrains Mono

## Features

- Fully responsive (mobile, tablet, desktop)
- Dark premium aesthetic with glassmorphism
- Scroll-triggered animations
- Sticky navigation with active section highlighting
- Animated metric counters
- Expandable project case studies
- Copy-to-clipboard for email/phone
- Back-to-top button
- SEO-optimized meta tags
- Accessible markup
- Sitemap & robots.txt included
- No backend, no database — 100% static

## Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Install & Run Locally

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deploy to GitHub Pages

### Method 1: Using `gh-pages` (Recommended)

1. **Update `vite.config.js`** — Set the `base` to your repository name:

   ```js
   export default defineConfig({
     base: '/portfolio/',  // Replace 'portfolio' with your repo name
     // ...
   })
   ```

2. **Update `package.json`** — Add the homepage field:

   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/portfolio"
   }
   ```

3. **Deploy:**

   ```bash
   npm run deploy
   ```

   This runs `npm run build` and pushes the `dist/` folder to the `gh-pages` branch.

4. **Configure GitHub:**
   - Go to your repo → **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select the `gh-pages` branch and `/ (root)` folder
   - Click **Save**

5. Your site will be live at `https://YOUR_USERNAME.github.io/portfolio/`

### Method 2: GitHub Actions (Manual Workflow)

1. Push your code to the `main` branch.

2. Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: ['main']

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

3. Go to repo → **Settings** → **Pages** → Source: **GitHub Actions**.

### Method 3: Using a Custom Domain (Optional)

1. Add a `CNAME` file to the `public/` folder with your custom domain:

   ```
   yourdomain.com
   ```

2. Update `vite.config.js`:

   ```js
   base: '/'
   ```

3. Configure DNS at your domain registrar to point to GitHub Pages.

## Customization

### Update Personal Information

All content is contained within the React components in `src/components/`. Edit the relevant component file to update text, metrics, experience details, etc.

### Update Colors

Edit `tailwind.config.js` to modify the color palette under `theme.extend.colors`.

### Update Fonts

Change font imports in `index.html` and update `fontFamily` in `tailwind.config.js`.

### Add a CV File

Place your CV PDF in the `public/` folder and update the download button link in `Contact.jsx`:

```jsx
<a href="./Roshan_Ali_CV.pdf" download className="btn-primary">
```

### Update SEO

Edit meta tags in `index.html`. Update the canonical URL, Open Graph tags, and Twitter card metadata to match your deployed URL.

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── 404.html
│   └── .nojekyll
├── src/
│   ├── components/
│   │   ├── Icons.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── CoreStrengths.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Certifications.jsx
│   │   ├── Leadership.jsx
│   │   ├── Approach.jsx
│   │   ├── LookingFor.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   ├── hooks/
│   │   └── useInView.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## License

This project is for personal portfolio use. All content is proprietary to Roshan Ali.
