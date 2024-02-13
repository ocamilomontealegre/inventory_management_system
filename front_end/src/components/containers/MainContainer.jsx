import { Menu } from "../menu/Menu.jsx";
import { ServiceContainer } from "./ServiceContainer.jsx";

export const MainContainer = () => {
  return(
    <div className="main-container">
      <Menu />
      <ServiceContainer />
    </div>
  )
};