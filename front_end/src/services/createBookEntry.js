import axios from 'axios'; // Import Axios for making HTTP requests
import { baseUrl } from '../api/apiData.js'; // Import the base URL for the API endpoint

// Async function to create a new book entry
export const createBookEntry = async (bookData) => {
  try {
    // Send a POST request to the API endpoint with the provided bookData
    const result = await axios.post(baseUrl, bookData);
    return result.data; // Return the response data
  } catch (err) {
    console.error(err); // Log any errors to the console
  }
};