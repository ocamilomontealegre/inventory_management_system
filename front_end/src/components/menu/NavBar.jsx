import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom

// NavBar component representing the navigation bar of the application
export const NavBar = () => {
  return (
    <nav className='m-nav'>
      <ul>
        {/* Links to different routes within the application */}
        <li><Link to='/list-books'>List Books</Link></li>
        <li><Link to='/add-book'>Create new book entry</Link></li>
        <li><Link to='/update-book'>Update book entry</Link></li>
        <li><Link to='/delete-book'>Delete book entry</Link></li>
      </ul>
    </nav>
  );
};