// Find book
export const findBookById = (bookList, bookId) => bookList.find(book => book.id === bookId);

// Find book index
export const findBookIndex = (bookList, bookId) => bookList.findIndex(book => book.id === bookId);