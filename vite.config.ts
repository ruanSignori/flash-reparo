import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',      
        upsell: 'upsell.html',  
        obrigado: 'obrigado.html'
      }
    }
  }
});
