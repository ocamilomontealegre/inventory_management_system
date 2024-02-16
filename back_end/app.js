// Import necessary modules from the 'express' framework
import express, { json } from 'express';
import cors from 'cors'; // Import 'cors' for Cross-Origin Resource Sharing
import routes from './src/routes/routes.js'; // Import custom routes

const app = express(); // Create an instance of the Express application

// Enable CORS (Cross-Origin Resource Sharing) for handling requests from different origins
app.use(cors());

// Parse incoming request bodies in JSON format
app.use(json());

// Use the API routes defined in the 'routes' module
app.use(routes);

export default app; // Export the configured Express application