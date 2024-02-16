import { useState } from "react"; // Import the useState hook from React
import { Button } from "../../common/Button.jsx"; // Import the Button component
import { updateBookEntry } from '../../../services/updateBookEntry.js'; // Import the updateBookEntry function
import { sendAlertMessage } from '../../../functions/sendAlertMessage.js';

// Initial book data with empty values
const initialBookData = {
  id: '',
  title: '',
  author: '',
  year: '',
  price: '',
  stock: '',
  picture: ''
}

// UpdateForm component for updating a book entry
export const UpdateForm = () => {
  const [ bookData, setBookData ] = useState(initialBookData); // State for managing book data

  // Function to handle updating a book entry
  const updateBook = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const result = await updateBookEntry(bookData); // Call the updateBookEntry function to update the book entry
      if(result) sendAlertMessage(`Book update successfully`);
      setBookData(initialBookData); // Reset the form data after updating the book
    } catch (err) {
      console.error(err); // Log any errors encountered during book update
    }
  };

  // Function to handle input changes in the form fields
  const handleInputChange = (event, key) => {
    setBookData({
      ...bookData,
      [key]: event.target.value
    });
  }

  // JSX structure for the UpdateForm component
  return (
    <div className="form">
      <form className="f-body">
        <div className="f-group">
          {/* Input field for entering the book ID */}
          <input type="text" name="bookId" id="bookId" value={bookData.id} onChange={(event) => handleInputChange(event, 'id')} placeholder="Id" />
        </div>
        <div className="f-group">
          {/* Input fields for book title and author */}
          <input type="text" name="title" id="title" value={bookData.title} onChange={(event) => handleInputChange(event, 'title')} placeholder="Title" />
          <input type="text" name="author" id="author" value={bookData.author} onChange={(event) => handleInputChange(event, 'author')} placeholder="Author" />
        </div>
        <div className="f-group">
          {/* Input fields for book year, price, and stock */}
          <input type="number" name="year" id="year" value={bookData.year} onChange={(event) => handleInputChange(event, 'year')} placeholder="Year" />
          <input type="number" name="price" id="price" value={bookData.price} onChange={(event) => handleInputChange(event, 'price')} placeholder="Price" />
          <input type="number" name="stock" id="stock" value={bookData.stock} onChange={(event) => handleInputChange(event, 'stock')} placeholder="Stock" />
        </div>
        <div className="f-group">
          {/* Input field for book picture */}
          <input type="text" name="picture" id="picture" value={bookData.picture} onChange={(event) => handleInputChange(event, 'picture')} placeholder="Picture" />
        </div>
        {/* Button for updating the book */}
        <Button text="Update Book" onClick={updateBook}/>
      </form>
    </div>
  );
};