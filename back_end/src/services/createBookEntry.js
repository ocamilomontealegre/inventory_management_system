import { randomUUID } from 'node:crypto'; // Import function to generate random UUIDs
import { booksStorage } from '../utils/database.js'; // Import the storage for books
import { findBookById } from '../utils/functions.js'; // Import function to find a book by ID

// Function to create a new book entry in the database
export const createBookEntry = (bookData) => {
  try {
    // Validate if a book with the same ID already exists
    const bookTitleValidation = findBookById(booksStorage, bookData.id);
    if (bookTitleValidation) throw new Error(`${bookData.title} already exists in the database`);

    // Generate a random UUID for the new book entry
    const newBook = { id: randomUUID(), ...bookData };
    // Set a default picture URL if none is provided
    if (!newBook.picture) newBook.picture = 'https://i.postimg.cc/C12VywF2/000-no-cover.jpgn';
    // Add the new book entry to the database storage
    booksStorage.push(newBook);
    
    return newBook; // Return the newly created book entry
  } catch (err) {
    // If an error occurs during book creation, return an object with an error message
    return { message: err.message };
  }
};