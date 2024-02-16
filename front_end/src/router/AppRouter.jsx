import { Routes, Route } from "react-router-dom"; // Import the Routes and Route components
import { Home } from '../components/home/Home.jsx'; // Import the Home component
import { ListBooks, AddBook, UpdateBook, DeleteBook } from '../components/bookManagement/index.js'; // Import components for book management

// AppRouter component for defining routes and mapping them to components
export const AppRouter = () => {
  return (
    <Routes>
      {/* Route for the home page */}
      <Route exact path='/' element={<Home />} />
      {/* Route for listing books */}
      <Route exact path='/list-books' element={<ListBooks />} />
      {/* Route for adding a new book */}
      <Route path='/add-book' element={<AddBook />} />
      {/* Route for updating a book */}
      <Route path='/update-book' element={<UpdateBook />} />
      {/* Route for deleting a book */}
      <Route path='/delete-book' element={<DeleteBook />} />
    </Routes>
  );
};