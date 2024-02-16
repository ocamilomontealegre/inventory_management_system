import { useState } from 'react'; // Import the useState hook from React
import { Button } from "../../common/Button.jsx"; // Import the Button component
import { BookInfo } from "./BookInfo.jsx"; // Import the BookInfo component
import { getBooksData } from "../../../services/getBooksData.js"; // Import the getBooksData function

// BookContainer component for displaying a list of books and fetching book data
export const BookContainer = () => {
  const [ bookData, setBookData ] = useState([]); // State for managing book data

  // Function to fetch book data
  const listBooks = async () => {
    try {
      const result = await getBooksData(); // Call the getBooksData function to fetch book data
      setBookData(result); // Update the book data state with the fetched data
    } catch (err) {
      console.error(err); // Log any errors encountered during data fetching
    }
  };

  // JSX structure for the BookContainer component
  return (
    <div className='b-container'>
      <div className="books">
        {/* Render BookInfo component for each book in the bookData array */}
        {bookData?.map(book => <BookInfo key={book.id} data={book} />)}
      </div>
      {/* Button for fetching book data */}
      <Button text="Get Books" onClick={listBooks} />
    </div>
  );
};