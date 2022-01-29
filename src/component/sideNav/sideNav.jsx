import "./sideNav.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function SideNav({ handleClicked }) {
  return (
    <div className="sideNav">
      <div className="sideNav_main">
        <div className="hamburger_logo">
          <MenuIcon className="hamburger_menu" onClick={handleClicked} />
          <div className="company_logo">
            <img src="/images/main-logo.png" alt="" className="header__logo" />
          </div>
        </div>
        <nav className="navbar_wrapper">
          <ul>
            <li>
              <Link to="/" className="link">
                <div>
                  <HomeIcon className="icon" />
                  <span>Home</span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/about-us" className="link">
                <div>
                  <HomeIcon className="icon" />
                  <span>About Us</span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/faq" className="link">
                <div>
                  <HomeIcon className="icon" />
                  <span>FAQ</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/shop" className="link">
                <div>
                  <ShoppingCartIcon className="icon" />
                  <span> Shop</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="link">
                <div>
                  <HomeIcon className="icon" />
                  <span>Contact us</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/farmers" className="link">
                <div>
                  <HomeIcon className="icon" />
                  <span> Farmers</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
