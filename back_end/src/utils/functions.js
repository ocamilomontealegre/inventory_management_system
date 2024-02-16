// Function to find a book by its ID in a book list
export const findBookById = (bookList, bookId) => bookList.find(book => book.id === bookId);

// Function to find the index of a book by its ID in a book list
export const findBookIndex = (bookList, bookId) => bookList.findIndex(book => book.id === bookId);