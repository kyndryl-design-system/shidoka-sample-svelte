import '@kyndryl-design-system/shidoka-foundation/scss/root.scss';
import '@kyndryl-design-system/shidoka-foundation/scss/utility/typography.scss';
import '@kyndryl-design-system/shidoka-foundation/scss/utility/grid.scss';
import './app.scss';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
});

export default app;
