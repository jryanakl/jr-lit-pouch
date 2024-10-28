import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'pouchdb': 'pouchdb-browser',
      'events': 'events',
      'stream': 'stream-browserify',
      'buffer': 'buffer/',
      'process': 'process/browser',// Ensure pouchdb resolves to pouchdb-browser
      '@': '/src'
    }
  },
  optimizeDeps: {
    include: ['lit', 'pouchdb-browser', 'events', 'stream-browserify', 'buffer', 'process'],
  },
  build: {
    rollupOptions: {
      external: ['events'], // Exclude Node.js modules
    },
  },
});
