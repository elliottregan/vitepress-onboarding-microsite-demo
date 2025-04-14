# vitepress-onboarding-microsite-demo

This is a demo project for building an onboarding microsite using **Vitepress 2**. Vitepress is a modern static site generator powered by Vite and Vue.

## Features

- **Fast and lightweight**: Built with Vite for lightning-fast builds and hot module replacement.
- **Markdown-based**: Write content in Markdown with Vue-powered enhancements.
- **Customizable**: Easily extend and customize the site with Vue components and plugins.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/elliottregan/vitepress-onboarding-microsite-demo.git
   cd vitepress-onboarding-microsite-demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the site.

## Building for Production

To build the site for production:

```bash
npm run docs:build
```

The static files will be generated in the `docs/.vitepress/dist` directory.

## Previewing the Build

To preview the production build locally:

```bash
npm run docs:preview
```

## Deploying

You can deploy the `docs/.vitepress/dist` directory to any static hosting service, such as:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

## License

This project is licensed under the [MIT License](LICENSE).
```
