import { validateProperties } from '../validations/validations.js'; // Import function to validate properties
import { idSchema } from '../validations/schemas.js'; // Import schema for validating book IDs
import { updateBookEntry } from '../services/updateBookEntry.js'; // Import function to update a book entry
import { logInfo } from '../utils/logger.js'; // Import function for logging info
import { response } from '../utils/responseManager.js'; // Import function for managing responses

// Controller function to update a book entry
export const updateBook = (req, res) => {
  const { id } = req.params; // Extract the book ID from the request parameters
  const updatedBookData = { ...req.body }; // Extract updated book data from the request body
  
  // Validate the book ID
  const validationResult = validateProperties(idSchema, id);
  // If validation fails, return an error response
  if (validationResult.errorCode !== 0)
    return response(res, { type: 'error', name: 'updateBook', statusCode: validationResult.statusCode }, { message: validationResult.message });
    
  try {
    // Attempt to update the book entry with the provided ID and data
    const result = updateBookEntry(id, updatedBookData);
    // Log the update of the book entry
    logInfo(`Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(result));

    // Return a success response with the updated book entry
    response(res, { type: 'success', name: 'updateBook', statusCode: 200 }, result);
  } catch (err) {
    // If an error occurs during update, return an error response
    response(res, { type: 'error', name: 'updateBook', statusCode: 500 }, { message: err.message });
  }
};