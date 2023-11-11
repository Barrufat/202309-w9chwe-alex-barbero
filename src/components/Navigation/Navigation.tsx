import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationStyled>
      <span>Navigation</span>
      <ul className="navigation__box">
        <li>
          <NavLink to="/home">See All</NavLink>
        </li>
        <li>
          <NavLink to="/home">Add New</NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
