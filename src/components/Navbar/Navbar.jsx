import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "./context/AuthContext";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    // login screen
    if (isAuth) {
      logout();
      // he wants to logout
    } else {
      // he wants to login
      navigate("/login");
    }
  };

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">
        logo{" "}
      </Link>
      <span data-cy="navbar-cart-items-count"> Cart{/* count here */}:0</span>
     <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;