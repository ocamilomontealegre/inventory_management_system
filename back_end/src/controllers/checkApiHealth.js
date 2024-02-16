import { response } from '../utils/responseManager.js'; // Import function for managing responses

// Controller function to check the API state
export const checkApiHealth = (req, res) => {
  // Respond with a success message indicating that the API is live
  response(res, { type: 'success', name: 'checkApiHealth', statusCode: 200 }, { message: 'Great News! The API is now live' });
};