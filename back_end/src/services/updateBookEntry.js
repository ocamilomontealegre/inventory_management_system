import { booksStorage } from '../utils/database.js'; // Import the storage for books
import { findBookIndex } from '../utils/functions.js'; // Import function to find the index of a book

// Function to update book entry properties in the database
export const updateBookEntry = (bookId, updatedBookData) => {
  // Filter out empty properties from the updated book data
  const nonEmptyProperties = Object.entries(updatedBookData)
    .reduce((acc, [key, value]) => {
      if (value !== '') acc[key] = value;
      return acc;
    }, {});

  try {
    // Find the index of the book to update
    const bookIndex = findBookIndex(booksStorage, bookId);
    // Update the book entry with the non-empty properties
    Object.assign(booksStorage[bookIndex], nonEmptyProperties);
    // Return a success message with the updated book entry
    return { message: booksStorage[bookIndex] };
  } catch (err) {
    // If an error occurs during update, return an object with an error message
    return { message: err.message };
  }
};