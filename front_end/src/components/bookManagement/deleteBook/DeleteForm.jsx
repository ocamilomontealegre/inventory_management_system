import { useState } from 'react'; // Import the useState hook from React
import { Button } from "../../common/Button.jsx"; // Import the Button component
import { deleteBookEntry } from '../../../services/deleteBookEntry.js'; // Import the deleteBookEntry function
import { sendAlertMessage } from '../../../functions/sendAlertMessage.js';

// DeleteForm component for deleting a book entry
export const DeleteForm = () => {
  const [ bookId, setBookId ] = useState(''); // State for managing book ID input field

  // Function to handle deleting a book entry
  const deleteBook = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const result = await deleteBookEntry(bookId); // Call the deleteBookEntry function to delete the book entry
      if(result) sendAlertMessage('Book deleted successfully');
      setBookId(''); // Reset the book ID input field after deletion
    } catch (err) {
      console.error(err); // Log any errors encountered during book deletion
    }
  }

  // Function to handle input changes in the book ID input field
  const handleInputChange = (event) => {
    setBookId(event.target.value); // Update the book ID state with the input value
  };

  // JSX structure for the DeleteForm component
  return (
    <div className="form">
      <form className="f-body">
        <div className="f-group">
          {/* Input field for entering the book ID */}
          <input type="text" name="bookId" id="bookId" value={bookId} onChange={handleInputChange} placeholder="Id" />
        </div>
        {/* Button for deleting the book */}
        <Button text="Delete Book" onClick={deleteBook}/>
      </form>
    </div>
  );
};