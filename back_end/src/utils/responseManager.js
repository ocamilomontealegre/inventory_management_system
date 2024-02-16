import { logInfo } from "./logger.js"; // Import the logInfo function for logging

// Function to send a response to the client
export const response = (res, service, message) => {
  // Log information about the response
  logInfo(`${service.name} |`, `${service.type} |`, `statusCode: ${service.statusCode} |`, JSON.stringify(message));
  // Send the response with the specified status code and message
  return res.status(service.statusCode).send(message);
};