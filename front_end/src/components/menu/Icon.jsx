import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom

// Icon component representing the Dragon Bookstore logo
export const Icon = () => {
  return (
    <div>
      {/* Link to the home page */}
      <Link to='/'>
        {/* Image representing the Dragon Bookstore logo */}
        <img src="https://i.postimg.cc/qR6PGL3L/Dragon-Bookstore-1-removebg-preview-1.png" alt="Bookstore Logo" />
      </Link>
    </div>
  );
};