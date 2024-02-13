import { useState } from 'react';
import { Button } from "../../common/Button.jsx";
import { deleteBookEntry } from '../../../services/deleteBookEntry.js';

export const DeleteForm = () => {
  const [ bookId, setBookId ] = useState('');

  const deleteBook = async (event) => {
    event.preventDefault();

    try {
      await deleteBookEntry(bookId);
      setBookId('');
    } catch (err) {
      console.error(err);
    }
  }

  const handleInputChange = (event) => {
    setBookId(event.target.value)
  };

  return(
    <div className="form">
      <form className="f-body">
        <div className="f-group">
          <input type="text" name="bookId" id="bookId" value={bookId} onChange={handleInputChange} placeholder="Id" />
        </div>
        <Button text="Delete Book" onClick={deleteBook}/>
      </form>
    </div>
  )
};