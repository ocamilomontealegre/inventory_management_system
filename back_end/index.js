import { say } from 'cowsay';
import { PORT } from './src/utils/config.js';
import app from './app.js';

// Start the Express app and listen on the specified port
app.listen(PORT, () => {
  console.log(say({ 
    text: `Server listening on http://localhost:${PORT}`,
    e: 'oO',
    T: 'U '
  }));
});
