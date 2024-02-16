import { ServiceTitle } from "../common/ServiceTitle.jsx"; // Import the ServiceTitle component

// Home component representing the home page of the application
export const Home = () => {
  return (
    <div className="w-message">
      {/* Render the ServiceTitle component with the text "Welcome" */}
      <ServiceTitle text="Welcome" />
      <div className="w-body">
        {/* Text content for welcoming message */}
        <p>
          This is the Dragon Bookstore Inventory Management System
        </p>
        <p>
          Please select one of the options on the left side
        </p>
        {/* Image for visual representation */}
        <img className="w-picture" src="https://i.postimg.cc/FH6Kqz7H/Book.png" alt="Book" />
      </div>
    </div>
  );
};