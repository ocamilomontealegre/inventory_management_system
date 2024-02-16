import { ServiceTitle } from "../../common/ServiceTitle.jsx"; // Import ServiceTitle component
import { DeleteForm } from "./DeleteForm.jsx"; // Import DeleteForm component

// DeleteBook component responsible for rendering a form to delete a book entry
export const DeleteBook = () => {
  return (
    <div className="f-message">
      {/* Render ServiceTitle component with the text "Delete Book Entry" */}
      <ServiceTitle text="Delete Book Entry" />
      {/* Render DeleteForm component */}
      <DeleteForm />
    </div>
  );
};