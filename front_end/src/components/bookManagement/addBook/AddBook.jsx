import { ServiceTitle } from "../../common/ServiceTitle.jsx";
import { BookForm } from "./BookForm.jsx";

export const AddBook = () => {


  return(
    <div className="f-message"> 
      <ServiceTitle text="Create New Book Entry" />
      <BookForm />
    </div>
  )
};