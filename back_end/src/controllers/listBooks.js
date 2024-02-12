import { getAllBooks } from '../services/getAllBooks.js';
import { logInfo } from '../utils/logger.js';
import { response } from '../utils/responseManager.js';

// List all books
export const listBooks = (req, res) => {
  try {
    const books = getAllBooks();
    logInfo(`Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(books) );

    response(res, { type: 'success', name: 'listBooks', statusCode: 200 }, books );
  } catch (err) {
    response(res, { type: 'error', name: 'listBooks', statusCode: 500 }, { message: err.message } )
  }
};