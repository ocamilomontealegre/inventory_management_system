import { useState } from "react";
import { Button } from "../../common/Button.jsx";
import { updateBookEntry } from '../../../services/updateBookEntry.js';

const initialBookData = {
  id: '',
  title: '',
  author: '',
  year: '',
  price: '',
  stock: '',
  picture: ''
}

export const UpdateForm = () => {
  const [ bookData, setBookData ] = useState(initialBookData);

  const updateBook = async(event) => {
    event.preventDefault();

    try {
      await updateBookEntry(bookData);
      setBookData(initialBookData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (event, key) => {
    setBookData({
      ...bookData,
      [key]: event.target.value
    });
  }

  return(
    <div className="form">
      <form className="f-body">
        <div className="f-group">
          <input type="text" name="bookId" id="bookId" value={bookData.id} onChange={(event) => handleInputChange(event, 'id')} placeholder="Id" />
        </div>
        <div className="f-group">
          <input type="text" name="title" id="title" value={bookData.title} onChange={(event) => handleInputChange(event, 'title')} placeholder="Title" />
          <input type="text" name="author" id="author" value={bookData.author} onChange={(event) => handleInputChange(event, 'author')} placeholder="Author" />
        </div>
        <div className="f-group">
          <input type="number" name="year" id="year" value={bookData.year} onChange={(event) => handleInputChange(event, 'year')} placeholder="Year" />
          <input type="number" name="price" id="price" value={bookData.price} onChange={(event) => handleInputChange(event, 'price')} placeholder="Price" />
          <input type="number" name="stock" id="stock" value={bookData.stock} onChange={(event) => handleInputChange(event, 'stock')} placeholder="Stock" />
        </div>
        <div className="f-group">
          <input type="text" name="picture" id="picture" value={bookData.picture} onChange={(event) => handleInputChange(event, 'picture')} placeholder="Picture" />
        </div>
        <Button text="Update Book" onClick={updateBook}/>
      </form>
    </div>
  )
};