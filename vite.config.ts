import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      'components': '/src/components',
      'styles': '/src/styles',
      'hooks': '/src/hooks',
      'store': '/src/store',
      'assets': '/src/assets',
      'utils': '/src/utils',
      'types': '/src/types',
    }
  }
})
