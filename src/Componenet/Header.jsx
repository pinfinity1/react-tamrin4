import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="flex items-center justify-between w-full px-6 py-2  bg-black text-white">
      <div>
        <NavLink to="/">
          <img
            src="../assets/pinfinity.png"
            alt="logo image"
            className="w-14 h-14"
          />
        </NavLink>
      </div>
      <div>
        <NavLink to="/" className="mr-6 link">
          Home
        </NavLink>
        <NavLink to="/menu" className="mr-6 link">
          Menu
        </NavLink>
        <NavLink to="/about" className="mr-6 link">
          About
        </NavLink>
        <NavLink to="/contact" className="mr-6 link">
          Contact
        </NavLink>
      </div>
    </header>
  );
};
