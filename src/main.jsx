import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CursorProvider } from './context/CursorContext';
import './styles/globals.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CursorProvider>
      <App />
    </CursorProvider>
  </StrictMode>
);
