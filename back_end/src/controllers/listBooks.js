import { getAllBooks } from '../services/getAllBooks.js'; // Import function to get all books
import { logInfo } from '../utils/logger.js'; // Import function for logging info
import { response } from '../utils/responseManager.js'; // Import function for managing responses

// Controller function to list all books
export const listBooks = (req, res) => {
  try {
    // Get all books
    const books = getAllBooks();
    // Log the retrieval of all books
    logInfo(`Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(books));

    // Return a success response with the list of books
    response(res, { type: 'success', name: 'listBooks', statusCode: 200 }, books);
  } catch (err) {
    // If an error occurs during book retrieval, return an error response
    response(res, { type: 'error', name: 'listBooks', statusCode: 500 }, { message: err.message });
  }
};