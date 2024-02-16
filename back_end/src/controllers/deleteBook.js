import { validateProperties } from '../validations/validations.js'; // Import function to validate properties
import { idSchema } from '../validations/schemas.js'; // Import schema for validating book IDs
import { deleteBookEntry } from '../services/deleteBookEntry.js'; // Import function to delete a book entry
import { logInfo } from '../utils/logger.js'; // Import function for logging info
import { response } from '../utils/responseManager.js'; // Import function for managing responses

// Controller function to delete a book entry
export const deleteBook = (req, res) => {
  const { id } = req.params; // Extract the book ID from the request parameters

  // Validate the book ID
  const validationResult = validateProperties(idSchema, id);
  // If validation fails, return an error response
  if (validationResult.errorCode !== 0)
    return response(res, { type: 'error', name: 'deleteBook', statusCode: validationResult.statusCode }, { message: validationResult.message });
  
  try {
    // Attempt to delete the book entry with the provided ID
    const result = deleteBookEntry(id);
    // Log the deletion of the book entry
    logInfo(`Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(result));

    // Return a success response with a message indicating the deletion was successful
    response(res, { type: 'success', name: 'deleteBook', statusCode: 200 }, { message: result.message });
  } catch (err) {
    // If an error occurs during deletion, return an error response
    response(res, { type: 'error', name: 'deleteBook', statusCode: 500 }, { message: err.message });
  }
};