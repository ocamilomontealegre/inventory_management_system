import { randomUUID } from 'node:crypto';

export const booksStorage = [
  // Book example
  {
    id: randomUUID(),
    title: 'Percy Jackson & the Olympians: The Lightning Thief',
    author: 'Rick Riordan',
    year: 2005,
    price: 25,
    stock: 10,
    picture: 'https://i.postimg.cc/Zn0WgHL4/001-percy-jackson-the-lightning-thief.jpg'
  }
];