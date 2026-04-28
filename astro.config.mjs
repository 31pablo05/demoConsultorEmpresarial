// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://demo-consultor-empresarial.vercel.app',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});