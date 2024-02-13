import { useState } from "react";
import { Button } from "../../common/Button.jsx";
import { createBookEntry } from "../../../services/createBookEntry.js";

export const BookForm = () => {
  const [ bookData, setBookData ] = useState({
    title: '',
    author: '',
    year: '',
    price: '',
    stock: '',
    picture: ''
  });

  const addBook = async (event) => {
    event.preventDefault();

    try {
      await createBookEntry(bookData);
      setBookData({
        title: '',
        author: '',
        year: '',
        price: '',
        stock: '',
        picture: ''
      })
    } catch (err) {
      console.error(err);
    }
  }

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
        <Button text="Add Book" onClick={addBook}/>
      </form>
    </div>
  );
};