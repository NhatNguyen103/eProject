import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "react-use-cart";

const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const { totalItems } = useCart();

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        FANoFAN
        <i className="fa-solid fa-fan"></i>
      </h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link className="nav-links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/Categories">
            Categories
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/Gallery">
            Gallery
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/Contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/SignIn">
            Login
          </Link>
        </li>
        
        <li>
          <Link className="nav-links" to="/checkout">
            <i className="fa-solid fa-cart-plus"></i>
            <span className="cart-count">{totalItems > 0 ? totalItems : ""}</span>
          </Link>

        </li>
        
        
      </ul>
    </nav>
  );
};

export default Navbar;
