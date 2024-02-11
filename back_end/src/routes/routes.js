import { Router } from 'express';
import { addBook } from '../controllers';
const router = Router();

// Add new book entry
router.post('v1/books', addBook);

// Handle unknown endpoints
router.use((req, res) => res.status(404).json({ message: `Endpoint ${req.path} not found` }));

export default router;