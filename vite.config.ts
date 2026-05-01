import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Set DEPLOY_TARGET=gh-pages at build time when deploying to GitHub Pages
// under https://<user>.github.io/<repo>/. Netlify and local dev use '/'.
const deployTarget = process.env.DEPLOY_TARGET;
const repoName = process.env.GH_PAGES_REPO ?? 'Sri-Portfolio';

export default defineConfig({
  plugins: [react()],
  base: deployTarget === 'gh-pages' ? `/${repoName}/` : '/',
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
  },
  server: {
    port: 5173,
    open: true,
  },
});
