import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CursorProvider } from './context/CursorContext';
import './styles/globals.css';
import App from './App';
import { Analytics } from "@vercel/analytics/next"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CursorProvider>
      <App />
      <Analytics/>
    </CursorProvider>
  </StrictMode>
);
