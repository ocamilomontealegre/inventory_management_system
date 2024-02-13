import { randomUUID } from 'node:crypto';
import { booksStorage } from '../utils/database.js';
import { findBookById } from '../utils/functions.js';


// Create new book entry in the database
export const createBookEntry = (bookData) => {
  try {
    // Validate book existence by its id
    const bookTitleValidation = findBookById(booksStorage, bookData.id);
    if (bookTitleValidation) throw new Error(`${bookData.title} already exists in the database`);

    // Add new book entry
    const newBook = { id: randomUUID(), ...bookData };
    if(!newBook.picture) newBook.picture = 'https://i.postimg.cc/C12VywF2/000-no-cover.jpgn';
    booksStorage.push(newBook);
    
    return newBook;  
  } catch (err) {
    return { message: err.message };
  };
};