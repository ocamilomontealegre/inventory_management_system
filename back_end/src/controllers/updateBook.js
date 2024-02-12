import { validateProperties } from '../validations/validations.js';
import { idSchema } from '../validations/schemas.js';
import { updateBookEntry } from '../services/updateBookEntry.js';
import { logInfo } from '../utils/logger.js';
import { response } from '../utils/responseManager.js';

// Update a book entry
export const updateBook = (req, res) => {
  const { id } = req.params;
  const updatedBookData = { ...req.body };
  
  // Validate id properties
  const validationResult = validateProperties(idSchema, id);
  if (validationResult.errorCode !== 0)
    return response(res, { type: 'error', name: 'updateBook', statusCode: validationResult.statusCode }, { message: validationResult.message } );
    
  try {
    const result = updateBookEntry(id, updatedBookData);
    logInfo( `Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(result) );

    response( res, { type: 'success', name: 'addBook', statusCode: 201 }, result );
  } catch (err) {
    response( res, { type: 'error', name: 'updateBook', statusCode: 500 }, { message: err.message } );
  }
};