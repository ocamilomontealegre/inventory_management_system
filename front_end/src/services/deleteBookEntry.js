import axios from 'axios';
import { baseUrl } from '../api/apiData.js';

export const deleteBookEntry = async (bookId) => {
  try {
    const result = await axios.delete(`${baseUrl}/${bookId}`);
    return result;
  } catch (err) {
    console.error(err);
  }
};