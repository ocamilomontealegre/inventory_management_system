import { ServiceTitle } from "../../common/ServiceTitle.jsx"; // Import ServiceTitle component
import { BookContainer } from "./BookContainer.jsx"; // Import BookContainer component

// ListBooks component responsible for rendering a section to list all books
export const ListBooks = () => {
  return (
    <div className="f-message">
      {/* Render ServiceTitle component with the text "List Books" */}
      <ServiceTitle text="List Books" />
      {/* Render BookContainer component to display the list of books */}
      <BookContainer />
    </div>
  );
};