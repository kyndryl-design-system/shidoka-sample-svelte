import { defineConfig } from 'vite';
import ViteSvgr from 'vite-plugin-svgr';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(),ViteSvgr()],
  preprocess: [vitePreprocess()],
});
