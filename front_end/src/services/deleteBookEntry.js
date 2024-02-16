import axios from 'axios'; // Import Axios for making HTTP requests
import { baseUrl } from '../api/apiData.js'; // Import the base URL for the API endpoint

// Async function to delete a book entry
export const deleteBookEntry = async (bookId) => {
  try {
    // Send a DELETE request to the specific book ID endpoint
    const result = await axios.delete(`${baseUrl}/${bookId}`);
    return result; // Return the response data
  } catch (err) {
    console.error(err); // Log any errors to the console
  }
};