import "./footer.scss";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
      <section className="footer__section">
        <div className="footer__section__row">
          <div className="footer__section__column">
            <img
              src="/images/footer-logo.png"
              alt=""
              className="footer__section__logo"
            />
            <p className="footer__section__description">
              Our purpose is to sustainly make the pleasurable and benefit of
              agricultural produces accessible to many.
            </p>
          </div>
          <div className="footer__section__column useful-link">
            <h1 className="footer__section__text__header">Useful Links</h1>
            <ul className="footer__section__details useful-link">
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>

              <li>
                <Link to="/products" className="link">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/blog" className="link">
                  Blog post
                </Link>
              </li>

              <li>
                <Link to="/return_policy" className="link">
                  Return policy
                </Link>
              </li>

              <li>
                <Link to="/affiliate" className="link">
                  Join affiliate
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__section__column contact-link">
            <h1 className="footer__section__text__header">Contact Us</h1>
            <ul className="footer__section__details">
              <li>
                <a href="#">+2348037135296</a>
              </li>

              <li>
                <a href="#">Abuja, Nigeria</a>
              </li>

              <li>
                <a href="#">info@onefarmtech.com</a>
              </li>

              <li>
                <a href="#">support@onefarmtech.com</a>
              </li>
            </ul>
          </div>
          <div className="footer__section__column">
            <h1 className="footer__section__text__header">Download Our App</h1>
            <p className="footer__section__description">
              Download our app for Android and IOS mobile phone.
            </p>
            <div className="apple_andriod_wrapper">
              <div className="andriod">
                <img
                  src="/images/download-google.png"
                  alt=""
                  className="footer__section__google__download"
                />
              </div>
              <div className="apple">
                <img
                  src="/images/download-apple.png"
                  alt=""
                  className="footer__section__apple__download"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
