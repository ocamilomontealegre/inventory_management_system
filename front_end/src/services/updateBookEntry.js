import axios from 'axios';
import { baseUrl } from '../api/apiData.js';

export const updateBookEntry = async (bookData) => {
  try {
    const result = await axios.put(`${baseUrl}/${bookData.id}`, bookData);
    return result;
  } catch (err) {
    console.error(err);
  };
};