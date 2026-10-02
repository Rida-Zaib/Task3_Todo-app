import { defineConfig } from 'vite';

// index.html is fully self-contained (all CSS/JS inline), so this config
// only needs to tell Vite to serve/build it as a plain static site —
// no React or Tailwind plugins are required.
export default defineConfig({
  server: {
    port: 3000,
    host: true,
  },
});
