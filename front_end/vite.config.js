import 'dotenv/config'; // Load environment variables from .env file
import { defineConfig } from 'vite'; // Import defineConfig function from Vite
import react from '@vitejs/plugin-react-swc'; // Import the Vite plugin for React with SWC compiler

// Export the Vite configuration
export default defineConfig({
  server: {
    // Define the port for the development server, using the PORT environment variable if available, otherwise default to 3001
    port: process.env.PORT || 3001
  },
  plugins: [
    react() // Use the Vite plugin for React with SWC compiler
  ]
});