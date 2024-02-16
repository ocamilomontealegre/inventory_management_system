import { say } from 'cowsay'; // Import the 'say' function from the 'cowsay' library for ASCII art
import { PORT } from './src/utils/config.js'; // Import the PORT constant from the configuration file
import app from './app.js'; // Import the Express application instance from 'app.js'

// Start the Express app and listen on the specified port
app.listen(PORT, () => {
  console.log(say({ // Display a cow ASCII art with a message indicating the server is running
    text: `Server listening on http://localhost:${PORT}`, // Message to display with the server URL
    e: 'oO', // Cow's eyes style
    T: 'U ' // Cow's tongue style
  }));
});