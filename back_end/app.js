import express, { json } from 'express';
import routes from './src/routes/routes.js';

const app = express();

app.use(json());

// Use API defined routes
app.use(routes);

export default app;