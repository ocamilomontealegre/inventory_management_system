import Swal from 'sweetalert2'; // Import SweetAlert2 library
import withReactContent from 'sweetalert2-react-content'; // Import withReactContent function

// Function to send an alert message
export const sendAlertMessage = (message) => {
  // Use SweetAlert2 to display the alert message
  withReactContent(Swal).fire({
    title: message // Set the title of the alert message
  });  
};