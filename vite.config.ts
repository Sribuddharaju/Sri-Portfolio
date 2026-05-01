import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Set DEPLOY_TARGET=gh-pages at build time when deploying to GitHub Pages.
// - User Site repo (e.g. "sribuddharaju.github.io")  -> served at "/"
// - Project Site repo (any other name)               -> served at "/<repo>/"
// Netlify, custom domains, and local dev always use "/".
const deployTarget = process.env.DEPLOY_TARGET;
const repoName = process.env.GH_PAGES_REPO ?? 'Sri-Portfolio';
const isUserSite = repoName.toLowerCase().endsWith('.github.io');
const ghPagesBase = isUserSite ? '/' : `/${repoName}/`;

export default defineConfig({
  plugins: [react()],
  base: deployTarget === 'gh-pages' ? ghPagesBase : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2020',
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    // Reset the per-asset inlining limit so anything tiny (favicons, etc.)
    // is inlined as a data URL and saves a request.
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Split big vendor libraries into their own long-lived chunks so
        // the browser can parse React first and start rendering the hero
        // while framer-motion / lucide stream in.
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion'],
          'icons-vendor': ['lucide-react'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
