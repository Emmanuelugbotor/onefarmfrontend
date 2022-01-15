import { Link } from 'react-router-dom';
import './FormComponent.scss';
export default function FormComponent({
  text,
  farmerLink,
  buyerLink,
  farmerDesc,
  buyerDesc,
}) {
  return (
    <div className="container">
      <h1 className="container__header__text">{text}</h1>
      <div className="container__row">
        <div className="container__column__cart">
          <Link to={`/${buyerLink}`} className="link">
            <div className="image_wrapper">
              <img
                src="/images/login-cart.png"
                alt=""
                className="container__column__image__cart"
              />
            </div>
          </Link>
          <p className="container__column__image__cart__description">
            {buyerDesc}
          </p>
        </div>

        <div className="container__column__farmer">
          <Link to={`/${farmerLink}`} className="link">
            <div className="image_wrapper">
              <img
                src="/images/farmer-login.png"
                alt=""
                className="container__column__image__farmer"
              />
            </div>
          </Link>
          <p className="container__column__image__cart__description">
            {farmerDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
