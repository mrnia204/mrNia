import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import viteSitemap from 'vite-plugin-sitemap';

import tailwindcss from '@tailwindcss/vite';



const routes = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteSitemap({
      baseUrl: 'https://yourdomain.com',
      routes: routes.map(r => r.path),
      generateRobotsTxt: true,
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Default Title',
          description: 'Default Description',
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
