import { ServiceTitle } from "../../common/ServiceTitle.jsx";
import { DeleteForm } from "./DeleteForm.jsx";

export const DeleteBook = () => {
  return(
    <div className="f-message">
      <ServiceTitle text="Delete Book Entry" />
      <DeleteForm />
    </div>
  );
};