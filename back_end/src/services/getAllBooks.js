import { booksStorage } from "../utils/database.js"; // Import the storage for books

// Function to get all books from the database
export const getAllBooks = () => {
  try {
    // Return a copy of all books from the storage
    return { books: [...booksStorage] };
  } catch (err) {
    // If an error occurs during retrieval, return an object with an error message
    return { message: err.message };
  }
};