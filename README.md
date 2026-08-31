# Digital Marketing Portfolio - Rinkal Ahuja

A premium, performance-focused digital marketing portfolio website built with React, Vite, and Tailwind CSS. Designed to showcase verifiable marketing outcomes across SEO, Paid Media, and Social Strategy.

## Tech Stack
- React 18
- Vite
- Tailwind CSS
- TypeScript
- Lucide React (Icons)

## Local Development
1. Clone the repository.
2. Run `npm install`
3. Run `npm run dev` to start the development server.

## Deployment (GitHub Pages)
This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site to GitHub Pages whenever code is pushed to the `main` branch.
Ensure you have GitHub Pages enabled in your repository settings (Settings -> Pages -> Source: GitHub Actions).

## Updating Content
All portfolio content (case studies, metrics, experience) is abstracted into `src/data/portfolioData.ts`. Update this file to modify the website content without touching the UI components.
