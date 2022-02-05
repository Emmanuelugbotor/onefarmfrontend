import "./sideNav.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
export default function SideNav({ handleClicked }) {
  const userSignin = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignin;

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
                  <span>About</span>
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
            {/* <li>
              <Link to="/shop" className="link">
                <div>
                  <ShoppingCartIcon className="icon" />
                  <span> Shop</span>
                </div>
              </Link>
            </li> */}
            <li>
              <Link to="/contact-us" className="link">
                <div>
                  <HomeIcon className="icon" />
                  <span>Contact</span>
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

            {userInfo && userInfo.token ? (
              userInfo.role == "farmer" ? (
                <li className="login_display">
                  <Link to="/dashboard" className="link">
                    <div>
                      <HomeIcon className="icon" />
                      <span> Dashboard</span>
                    </div>
                  </Link>
                </li>
              ) : (
                <li className="login_display">
                  <Link to="/vendor_dashboard" className="link">
                    <div>
                      <HomeIcon className="icon" />
                      <span> Vendor</span>
                    </div>
                  </Link>
                </li>
              )
            ) : (
              <>
                <li className="login_display">
                  <Link to="/loginPage" className="link">
                    <div>
                      <HomeIcon className="icon" />
                      <span> Login</span>
                    </div>
                  </Link>
                </li>
                <li className="login_display">
                  <Link to="/signUpPage" className="link">
                    <div>
                      <HomeIcon className="icon" />
                      <span> Sign up</span>
                    </div>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
