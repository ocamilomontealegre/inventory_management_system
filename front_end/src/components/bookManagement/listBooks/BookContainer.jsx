import { useState } from 'react';
import { Button } from "../../common/Button.jsx";
import { BookInfo } from "./BookInfo.jsx";
import { getBooksData } from "../../../services/getBooksData.js";

export const BookContainer = () => {
  const [ bookData, setBookData ] = useState([]);

  const listBooks = async() => {
    try {
      const result = await getBooksData();
      setBookData(result);
    } catch (err) {
      console.error(err);
    };
  };


  return(
    <div className='b-container'>
      <div className="books">
      {bookData?.map(book => <BookInfo key={book.id} data={book} />)}
      </div>
      <Button text="Get Books" onClick={listBooks} />
    </div>
  )
};