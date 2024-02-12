import { booksStorage } from "../utils/database.js";

export const getAllBooks = () => {
  try {
    return { books: [...booksStorage] };
  } catch (err) {
    return { message: err.message };
  }
};