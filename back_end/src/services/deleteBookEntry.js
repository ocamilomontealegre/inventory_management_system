import { booksStorage } from '../utils/database.js'; // Import the storage for books
import { findBookIndex } from '../utils/functions.js'; // Import function to find the index of a book

// Function to delete a book entry from the database
export const deleteBookEntry = (bookId) => {
  try {
    // Find the index of the book to delete
    const bookIndex = findBookIndex(booksStorage, bookId);
    // Remove the book entry from the storage
    booksStorage.splice(bookIndex, 1);
    // Return a success message
    return { message: 'Book successfully deleted!' };
  } catch (err) {
    // If an error occurs during book deletion, return an object with an error message
    return { message: err.message };
  }
};