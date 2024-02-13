import { Routes, Route } from "react-router-dom";
import { Home } from '../components/home/Home.jsx';
import { ListBooks, AddBook, UpdateBook, DeleteBook } from '../components/bookManagement/index.js';

export const AppRouter = () => {
  return(
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/list-books' element={<ListBooks />}></Route>
      <Route path='/add-book' element={<AddBook />}></Route>
      <Route path='/update-book' element={<UpdateBook />}></Route>
      <Route path='/delete-book' element={<DeleteBook />}></Route>
    </Routes>
  )
};