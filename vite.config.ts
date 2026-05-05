import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

function getBase() {
  return process.env.NODE_ENV === 'production' ? '/' : '/'
}

export default defineConfig({
  plugins: [react()],
  base: getBase(),
})