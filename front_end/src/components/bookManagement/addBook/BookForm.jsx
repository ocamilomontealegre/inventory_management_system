import { useState } from 'react';
import { Button } from '../../common/Button.jsx';
import { createBookEntry } from '../../../services/createBookEntry.js';
import { sendAlertMessage } from '../../../functions/sendAlertMessage.js';

const bookModel = {
  title: '',
  author: '',
  year: '',
  price: '',
  stock: '',
  picture: ''
};

// BookForm component
export const BookForm = () => {
  // State for storing book data
  const [ bookData, setBookData ] = useState(bookModel);

  // Function to add a book
  const addBook = async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    try {
      const result = await createBookEntry(bookData); // Create a new book entry
      if(result) sendAlertMessage(`Book added successfully`);
      setBookData(bookModel) // Reset the form
    } catch (err) {
      console.error(err); // Log any errors
    }
  }

  // Function to handle input changes
  const handleInputChange = (event, key) => {
    setBookData({
      ...bookData, // Spread existing book data
      [key]: event.target.value // Update the changed field
    });
  }

  // Render the form
  return(
    <div className="form">
      <form className="f-body">
        <div className="f-group">
          {/* Input for title */}
          <input type="text" name="title" id="title" value={bookData.title} onChange={(event) => handleInputChange(event, 'title')} placeholder="Title" />
          {/* Input for author */}
          <input type="text" name="author" id="author" value={bookData.author} onChange={(event) => handleInputChange(event, 'author')} placeholder="Author" />
        </div>
        <div className="f-group">
          {/* Input for year */}
          <input type="number" name="year" id="year" value={bookData.year} onChange={(event) => handleInputChange(event, 'year')} placeholder="Year" />
          {/* Input for price */}
          <input type="number" name="price" id="price" value={bookData.price} onChange={(event) => handleInputChange(event, 'price')} placeholder="Price" />
          {/* Input for stock */}
          <input type="number" name="stock" id="stock" value={bookData.stock} onChange={(event) => handleInputChange(event, 'stock')} placeholder="Stock" />
        </div>
        <div className="f-group">
          {/* Input for picture */}
          <input type="text" name="picture" id="picture" value={bookData.picture} onChange={(event) => handleInputChange(event, 'picture')} placeholder="Picture" />
        </div>
        {/* Button to submit the form */}
        <Button text="Add Book" onClick={addBook}/>
      </form>
    </div>
  );
};