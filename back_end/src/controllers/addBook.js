import { validateProperties } from '../validations/validations.js';
import { addBookSchema } from '../validations/schemas.js';
import { createBookEntry } from '../services/createBookEntry.js';
import { logInfo } from '../utils/logger.js';
import { response } from '../utils/responseManager.js';

// Add new book entry
export const addBook = (req, res) => {
  const bookData = { ...req.body };

  // Validate body properties
  const validationResult = validateProperties(addBookSchema, bookData);
  if (validationResult.errorCode !== 0)
    return response(res, { type: 'error', name: 'addBook', statusCode: validationResult.statusCode }, { message: validationResult.message } );

  try {
    const newBook = createBookEntry(bookData);
    logInfo( `Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(newBook) );

    response( res, { type: 'success', name: 'addBook', statusCode: 201 }, newBook );
  } catch (err) {
    response( res, { type: 'error', name: 'addBook', statusCode: 500 }, { message: err.message } );
  };
};

