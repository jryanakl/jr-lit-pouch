import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'pouchdb': 'pouchdb-browser',
      'events': 'events',
      'stream': 'stream-browserify',
      'buffer': 'buffer/',
      'process': 'process/browser',// Ensures pouchdb resolves to pouchdb-browser
      '@': '/src',
      '@jr-state': '/src/state',
      '@jr-ui': '/src/ui',
      '@jr-utils': '/src/utils'
    }
  },
  optimizeDeps: {
    include: ['lit', 'pouchdb-browser', 'events', 'stream-browserify', 'buffer', 'process'],
  },
  build: {
    outDir: 'dist', // Output directory for built files
    emptyOutDir: true, // Clean the output directory before building
    rollupOptions: {
      external: ['events'], // Exclude Node.js modules
    },
  },
});
