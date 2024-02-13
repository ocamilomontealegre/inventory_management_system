import axios from 'axios';
import { baseUrl } from '../api/apiData.js';

export const createBookEntry = async (bookData) => {
  try {
    const result = await axios.post(baseUrl, bookData);
    return result;
  } catch (err) {
    console.error(err);
  }
};