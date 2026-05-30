import { defineConfig } from 'vite';
import { copyFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';

export default defineConfig({
  base: '/east-africa-travel-hub/',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacy-policy.html',
        affiliate: 'affiliate-disclosure.html',
      },
    },
  },
});
