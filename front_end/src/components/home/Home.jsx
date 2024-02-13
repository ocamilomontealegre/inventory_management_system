import { ServiceTitle } from "../common/ServiceTitle.jsx";

export const Home = () => {
  return(
    <div className="w-message">
      <ServiceTitle text="Welcome" />
      <div className="w-body">
        <p>
          This is the Dragon Bookstore Inventory 
          Management System
        </p>
        <p>
          Please select one of the options on
          the left side
        </p>
        <img className="w-picture" src="https://i.postimg.cc/FH6Kqz7H/Book.png" alt="Book" />
      </div>
    </div>
  )
};