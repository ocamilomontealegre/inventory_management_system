import { validateProperties } from '../validations/validations.js'; // Import function to validate properties
import { addBookSchema } from '../validations/schemas.js'; // Import schema for adding a book
import { createBookEntry } from '../services/createBookEntry.js'; // Import function to create a new book entry
import { logInfo } from '../utils/logger.js'; // Import function for logging info
import { response } from '../utils/responseManager.js'; // Import function for managing responses

// Controller function to add a new book entry
export const addBook = (req, res) => {
  const bookData = { ...req.body }; // Extract book data from request body

  // Validate body properties using the schema
  const validationResult = validateProperties(addBookSchema, bookData);
  // If validation fails, return an error response
  if (validationResult.errorCode !== 0)
    return response(res, { type: 'error', name: 'addBook', statusCode: validationResult.statusCode }, { message: validationResult.message });

  try {
    // Create a new book entry using the provided data
    const newBook = createBookEntry(bookData);
    // Log the creation of the new book entry
    logInfo(`Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(newBook));

    // Return a success response with the newly created book entry
    response(res, { type: 'success', name: 'addBook', statusCode: 201 }, newBook);
  } catch (err) {
    // If an error occurs during book creation, return an error response
    response(res, { type: 'error', name: 'addBook', statusCode: 500 }, { message: err.message });
  }
};