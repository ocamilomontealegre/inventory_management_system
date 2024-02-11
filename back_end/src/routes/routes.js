import { Router } from 'express';
import { checkApiHealth, listBooks, addBook, updateBook, deleteBook } from '../controllers';
const router = Router();

// Check API state
router.get('v1/api/health', checkApiHealth);

// List all books
router.get('v1/api/books', listBooks);

// Add new book entry
router.post('v1/api/books', addBook);

// Update book entry
router.put('v1/api/books/:id', updateBook);

// Delete book entry
router.delete('v1/api/books/:id', deleteBook);

// Handle unknown endpoints
router.use((req, res) => res.status(404).json({ message: `Endpoint ${req.path} not found` }));

export default router;