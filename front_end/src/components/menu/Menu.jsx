import { Icon } from './Icon.jsx'; // Import the Icon component
import { NavBar } from './NavBar.jsx'; // Import the NavBar component

// Menu component representing the menu bar of the application
export const Menu = () => {
  return (
    <div className="menu">
      {/* Render the Icon component for the bookstore logo */}
      <Icon />
      {/* Render the NavBar component for navigation links */}
      <NavBar />
    </div>
  );
};