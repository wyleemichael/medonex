import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { loadRuntimeConfig } from './lib/config.ts';

// Load runtime configuration before rendering the app
async function initializeApp() {
  // Prerendered blog pages are served as pure static HTML for SEO.
  // Intentionally skip React mounting so the crawler-facing markup stays
  // lightweight and self-contained — no client-side hydration needed.
  if (
    document
      .querySelector('meta[name="prerender-static-page"]')
      ?.getAttribute('content') === 'blog'
  ) {
    return;
  }

  // Render immediately so the page never waits on optional runtime config.
  createRoot(document.getElementById('root')!).render(<App />);

  try {
    await loadRuntimeConfig();
  } catch (error) {
    console.warn('Runtime configuration unavailable, using defaults:', error);
  }
}

// Initialize the app
initializeApp();
