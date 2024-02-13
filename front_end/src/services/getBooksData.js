import axios from 'axios';
import { baseUrl } from '../api/apiData.js';

export const getBooksData = async () => {
  try {
    const result = await axios.get(baseUrl);
    return result.data.books;
  } catch (err) {
    console.error(err);
  }
};