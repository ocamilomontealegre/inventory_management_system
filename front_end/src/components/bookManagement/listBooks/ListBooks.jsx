import { ServiceTitle } from "../../common/ServiceTitle.jsx";
import { BookContainer } from "./BookContainer.jsx";

export const ListBooks = () => {
  return(
    <div className="f-message">
      <ServiceTitle text="List Books" />
      <BookContainer />
    </div>
  )
};