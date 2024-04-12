// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    middleware: [
      (req, res, next) => {
        // Set the MIME type for JavaScript files to "text/javascript"
        if (req.url.endsWith('.js')) {
          res.setHeader('Content-Type', 'text/javascript');
        }
        next();
      },
    ],
  },
});
