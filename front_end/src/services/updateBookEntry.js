import axios from 'axios'; // Import Axios for making HTTP requests
import { baseUrl } from '../api/apiData.js'; // Import the base URL for the API endpoint

// Async function to update a book entry in the API
export const updateBookEntry = async (bookData) => {
  try {
    // Send a PUT request to the specific book ID endpoint with the updated book data
    const result = await axios.put(`${baseUrl}/${bookData.id}`, bookData);
    return result; // Return the response data
  } catch (err) {
    console.error(err); // Log any errors to the console
  }
};