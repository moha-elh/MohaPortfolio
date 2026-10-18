import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CursorProvider } from './context/CursorContext';
import { LangProvider } from './context/LangContext';
import './styles/globals.css';
import App from './App';
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <CursorProvider>
        <App />
        <Analytics/>
      </CursorProvider>
    </LangProvider>
  </StrictMode>
);
