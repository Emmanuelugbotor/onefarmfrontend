import { Link } from "react-router-dom";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import SideNav from "../sideNav/sideNav";
import { useState } from "react";
export default function Navbar() {
  const [home, setHome] = useState(false);
  function handleClicked() {
    setHome(false);
  }
  return (
    <div>
      <header className="header">
        <MenuIcon className="hamburger_menu" onClick={() => setHome(true)} />
        <div className="company_logo">
          <img src="/images/main-logo.png" alt="" className="header__logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/shop" className="link">
                Shop
              </Link>
            </li>

            <li>
              <Link to="/about-us" className="link">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/faq" className="link">
                FAQ
              </Link>
            </li>

            <li>
              <Link to="/contact-us" className="link">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/farmers" className="link">
                Farmers
              </Link>
            </li>
          </ul>
        </nav>
        <div className="nav__right">
          <button className="login__button">
            <img
              src="/images/user (1).png"
              alt=""
              className="login__button__image"
            />
            <Link to="/loginPage" className="link">
              <p className="login__button__text">Login</p>
            </Link>
          </button>
          <button className="signup__button">
            <img
              src="/images/add-user (1).png"
              alt=""
              className="signup__button__image"
            />
            <Link to="/signUpPage" className="link">
              <p className="signup__button__text">Signup</p>
            </Link>
          </button>
          <form className="search__form">
            <input
              type="search"
              className="header__search"
              name="search"
              placeholder="Search"
            />
            <SearchIcon className="search__icon" />
          </form>
          <div className="basket_wrapper">
            <img
              src="/images/cart-11-24.png"
              alt=""
              className="header__basket"
            />{" "}
            <p className="header__basket__text">Basket</p>
          </div>
        </div>
        {home && <SideNav handleClicked={handleClicked} />}
      </header>
    </div>
  );
}
