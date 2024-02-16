import { randomUUID } from 'node:crypto'; // Import function to generate random UUIDs

// Example book storage array
export const booksStorage = [
  // Example book object
  {
    id: randomUUID(), // Generate a random UUID for the book
    title: 'Percy Jackson & the Olympians: The Lightning Thief',
    author: 'Rick Riordan',
    year: 2005,
    price: 25,
    stock: 10,
    picture: 'https://i.postimg.cc/Zn0WgHL4/001-percy-jackson-the-lightning-thief.jpg'
  }
];