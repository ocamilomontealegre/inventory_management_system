import { booksStorage } from '../utils/database.js';
import { findBookIndex } from '../utils/functions.js';

// Update book entry properties
export const updateBookEntry = (bookId, updatedBookData) => {
  const nonEmptyProperties = Object.entries(updatedBookData)
    .reduce((acc, [key, value]) => {
      if(value !== '') acc[key] = value;
      return acc;
    }, {});

  try {
    const bookIndex = findBookIndex(booksStorage, bookId);
    Object.assign(booksStorage[bookIndex], nonEmptyProperties);
    return { message: booksStorage[bookIndex] };
  } catch (err) {
    return { message: err.message };
  };
};