import { ServiceTitle } from "../../common/ServiceTitle.jsx"; // Import ServiceTitle component
import { UpdateForm } from "./UpdateForm.jsx"; // Import UpdateForm component

// UpdateBook component responsible for rendering a form to update a book entry
export const UpdateBook = () => {
  return (
    <div className="f-message">  
      {/* Render ServiceTitle component with the text "Update Book Entry" */}
      <ServiceTitle text="Update Book Entry" />
      {/* Render UpdateForm component for updating book entry */}
      <UpdateForm />
    </div>
  );
}