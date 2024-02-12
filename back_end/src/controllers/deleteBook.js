import { validateProperties } from '../validations/validations.js';
import { idSchema } from '../validations/schemas.js';
import { deleteBookEntry } from '../services/deleteBookEntry.js';
import { logInfo } from '../utils/logger.js';
import { response } from '../utils/responseManager.js';

// Delete a book entry
export const deleteBook = (req, res) => {
  const { id } = req.params;

  // Validate id properties
  const validationResult = validateProperties(idSchema, id);
  if (validationResult.errorCode !== 0)
    return response(res, { type: 'error', name: 'deleteBook', statusCode: validationResult.statusCode }, { message: validationResult.message } );
  
  try {
    const result = deleteBookEntry(id);
    logInfo( `Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(result) );

    response( res, { type: 'success', name: 'deleteBook', statusCode: 200 }, { message: result.message } );
  } catch (err) {
    response( res, { type: 'error', name: 'deleteBook', statusCode: 500 }, { message: err.message } );
  }
};