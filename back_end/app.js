import express, { json } from 'express';
import cors from 'cors';
import routes from './src/routes/routes.js';

const app = express();

// Enable CORS
app.use(cors());

// Parse body request
app.use(json());

// Use API defined routes
app.use(routes);

export default app;