import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM library
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for routing
import { App } from './App.jsx'; // Import the App component
import './index.css'; // Import the CSS file for styling

// Render the App component into the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);