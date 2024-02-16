import axios from 'axios'; // Import Axios for making HTTP requests
import { baseUrl } from '../api/apiData.js'; // Import the base URL for the API endpoint

// Async function to fetch book data from the API
export const getBooksData = async () => {
  try {
    // Send a GET request to the base URL to fetch book data
    const result = await axios.get(baseUrl);
    return result.data.books; // Return the books data from the response
  } catch (err) {
    console.error(err); // Log any errors to the console
  }
};