import { ServiceTitle } from "../../common/ServiceTitle.jsx"; // Import ServiceTitle component
import { BookForm } from "./BookForm.jsx"; // Import BookForm component

// AddBook component responsible for rendering a form to create a new book entry
export const AddBook = () => {
  return (
    <div className="f-message"> 
      {/* Render ServiceTitle component with the text "Create New Book Entry" */}
      <ServiceTitle text="Create New Book Entry" />
      {/* Render BookForm component */}
      <BookForm />
    </div>
  );
};