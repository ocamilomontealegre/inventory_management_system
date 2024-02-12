import { booksStorage } from '../utils/database.js';
import { findBookIndex } from '../utils/functions.js';

// Delete book entry in the database
export const deleteBookEntry = (bookId) => {
  try {
    const bookIndex = findBookIndex(booksStorage, bookId);
    booksStorage.splice(bookIndex, 1);
    return { message: 'Book successfully deleted!' }
  } catch (err) {
    return { message: err.message };
  }
};