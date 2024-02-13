import { ServiceTitle } from "../../common/ServiceTitle.jsx";
import { UpdateForm } from "./UpdateForm.jsx";

export const UpdateBook = () => {
  return(
    <div className="f-message">  
      <ServiceTitle text="Update Book Entry" />
      <UpdateForm />
    </div>
  )
}