import { booksStorage } from '../utils/database.js';
import { findBookIndex } from '../utils/functions.js';

// Update book entry properties
export const updateBookEntry = (bookId, updatedBookData) => {
  try {
    const bookIndex = findBookIndex(booksStorage, bookId);
    Object.assign(booksStorage[bookIndex], updatedBookData);
    return { message: booksStorage[bookIndex] };
  } catch (err) {
    return { message: err.message };
  };
};