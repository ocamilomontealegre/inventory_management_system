import { Menu } from "../menu/Menu.jsx"; // Import the Menu component
import { ServiceContainer } from "./ServiceContainer.jsx"; // Import the ServiceContainer component

// MainContainer component for the main container of the application
export const MainContainer = () => {
  return (
    <div className="main-container">
      {/* Render the Menu component for navigation */}
      <Menu />
      {/* Render the ServiceContainer component for displaying services or sections */}
      <ServiceContainer />
    </div>
  );
};