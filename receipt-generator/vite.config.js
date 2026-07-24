import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Include .js files that contain JSX (CRA convention: .js not .jsx)
    react({ include: /\.(js|jsx|ts|tsx)$/ }),
    // @react-pdf/renderer needs Buffer, process, stream, etc. in the browser
    nodePolyfills({
      include: ['buffer', 'process', 'stream', 'util', 'assert', 'zlib'],
      globals: {
        Buffer: true,
        process: true,
      },
    }),
  ],

  // Treat .js files as JSX so Vite's Rollup bundler parses them correctly
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },

  optimizeDeps: {
    // Pre-bundle @react-pdf/renderer so Vite handles its CJS/ESM split correctly
    include: ['@react-pdf/renderer'],
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
