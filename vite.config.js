import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // build date = last deploy, shown in the hero as "last updated"
  define: { 'import.meta.env.VITE_BUILD_DATE': JSON.stringify(new Date().toISOString()) },
});
