import Layout from '../../component/layout/Layout';
import WhatWeDo from '../../component/WhatWeDo/WhatWeDo';
import OurFarmers from '../../component/OurFarmers/OurFarmers';
import './home.scss';
// import  from '@mui/icons-material'
export default function Home() {
  return (
    <Layout>
      <div className="container">
        <section className="hero__section">
          <div className="hero__section__left">
            <div className="text_button">
              <h1 className="hero__section__left__text">
                Welcome To <br /> OneFarmTech <br /> Fresh Organic Food
              </h1>
              <button className="hero__section__left__button">Shop Now</button>
            </div>

            <img
              src="/images/main-hero-side.png"
              alt=""
              className="hero__section__left__back__image"
            />
            <img
              src="/images/main-hero.png"
              alt=""
              className="hero__section__left__main__image"
            />
          </div>
          <div className="hero__side__wrapper">
            <aside
              className="hero__aside__top"
              style={{ backgroundImage: 'url(/images/hero-side.png)' }}
            >
              <div className="hero__aside__top__text_button">
                <h1 className="hero__aside__top__text">
                  Fresh <br />
                  <span>Exotic Fruits</span>
                </h1>
                <button className="hero__aside__top__button">
                  View Products{' '}
                  <img
                    src="../images/chevron-white.png"
                    alt=""
                    className="hero__aside__top__button__arrow"
                  />
                </button>
              </div>
            </aside>
            <aside className="hero__aside__bottom">
              <h1 className="hero__aside__bottom__text">
                Fresh <br />
                <span>Exotic Vegetables</span>
              </h1>
              <button className="hero__aside__bottom__button">
                View Products{' '}
                <img
                  src="../images/chevron-white.png"
                  alt=""
                  className="hero__aside__bottom__button__arrow"
                />
              </button>
              <img
                src="/images/hero-side-down.png"
                alt=""
                className="hero__aside__bottom__img"
              />
            </aside>
          </div>
        </section>
        <section className="services__section">
          <div className="services__section__column">
            <div className="image_wrapper">
              <img
                src="/images/delivery.png"
                alt=""
                className="services__section__column__image"
              />
            </div>

            <p className="services__section__column__text">Fast Delivery</p>
            <p className="services__section__column__text__description">
              Delivery takes 2 to 5 working days.
            </p>
          </div>
          <div className="services__section__column">
            <div className="image_wrapper">
              <img
                src="/images/headset.png"
                alt=""
                className="services__section__column__image"
              />
            </div>

            <p className="services__section__column__text">Customer Support</p>
            <p className="services__section__column__text__description">
              We provide round the clock customer support.
            </p>
          </div>
          <div className="services__section__column">
            <div className="image_wrapper">
              <img
                src="/images/wallet.png"
                alt=""
                className="services__section__column__images"
              />
            </div>

            <p className="services__section__column__text">
              Secure and safe payment
            </p>
            <p className="services__section__column__text__description">
              We provide secure and safe payment methods.
            </p>
          </div>
        </section>
        <section className="products__section">
          <h1 className="products__section__text">New Products</h1>
          <p className="products__section__text__description">
            Recently added to the store
          </p>
          <div className="products__section__row">
            <div className="products__section__column">
              <div className="products__section__product__image_wrapper">
                <img
                  src="/images/cherry.png"
                  alt=""
                  className="products__section__product__image"
                />
              </div>
              <div className="product_name_basket">
                <h1 className="products__section__product__name">
                  Red Tomatoes
                </h1>
                <img
                  src="/images/cart-11-24.png"
                  alt=""
                  className="product__section__basket"
                />
              </div>

              <p className="products__section__product__price">
                Price: &#8358; 100
              </p>
              <button className="products__section__product__button">
                View More
              </button>
            </div>
            <div className="products__section__column">
              <div className="products__section__product__image_wrapper">
                <img
                  src="/images/peppers.png"
                  alt=""
                  className="products__section__product__image"
                />
              </div>
              <div className="product_name_basket">
                <h1 className="products__section__product__name">
                  Red Peppers
                </h1>
                <img
                  src="/images/cart-11-24.png"
                  alt=""
                  className="product__section__basket"
                />
              </div>

              <p className="products__section__product__price">
                Price: &#8358; 50
              </p>
              <button className="products__section__product__button">
                View More
              </button>
            </div>
            <div className="products__section__column">
              <div className="products__section__product__image_wrapper">
                <img
                  src="/images/pear.png"
                  alt=""
                  className="products__section__product__image"
                />
              </div>
              <div className="product_name_basket">
                <h1 className="products__section__product__name">Avocados</h1>
                <img
                  src="/images/cart-11-24.png"
                  alt=""
                  className="product__section__basket"
                />
              </div>

              <p className="products__section__product__price">
                Price: &#8358; 200
              </p>
              <button className="products__section__product__button">
                View More
              </button>
            </div>

            <div className="products__section__column">
              <div className="products__section__product__image_wrapper">
                <img
                  src="/images/cherry.png"
                  alt=""
                  className="products__section__product__image"
                />
              </div>
              <div className="product_name_basket">
                <h1 className="products__section__product__name">
                  Red Tomatoes
                </h1>
                <img
                  src="/images/cart-11-24.png"
                  alt=""
                  className="product__section__basket"
                />
              </div>

              <p className="products__section__product__price">
                Price: &#8358; 100
              </p>
              <button className="products__section__product__button">
                View More
              </button>
            </div>
            <div className="products__section__column">
              <div className="products__section__product__image_wrapper">
                <img
                  src="/images/peppers.png"
                  alt=""
                  className="products__section__product__image"
                />
              </div>
              <div className="product_name_basket">
                <h1 className="products__section__product__name">
                  Red Peppers
                </h1>
                <img
                  src="/images/cart-11-24.png"
                  alt=""
                  className="product__section__basket"
                />
              </div>

              <p className="products__section__product__price">
                Price: &#8358; 50
              </p>
              <button className="products__section__product__button">
                View More
              </button>
            </div>
            <div className="products__section__column">
              <div className="products__section__product__image_wrapper">
                <img
                  src="/images/pear.png"
                  alt=""
                  className="products__section__product__image"
                />
              </div>
              <div className="product_name_basket">
                <h1 className="products__section__product__name">Avocados</h1>
                <img
                  src="/images/cart-11-24.png"
                  alt=""
                  className="product__section__basket"
                />
              </div>

              <p className="products__section__product__price">
                Price: &#8358; 200
              </p>
              <button className="products__section__product__button">
                View More
              </button>
            </div>
          </div>
        </section>
        <section className="discount__section">
          <div className="discount__section__row">
            <div className="discount__section__column">
              <h1 className="discount__percentage">50% OFF</h1>
              <h1 className="discount__section__text">
                Get Quality <br /> Vegetables at <br /> Affordable Rates
              </h1>
              <button className="discount__section__button">
                View Products{' '}
                <img
                  src="/images/right-chevron.png"
                  alt=""
                  className="discount__section__button__arrow"
                />
              </button>
              <img
                src="/images/discount (1).png"
                alt=""
                className="discount__section__vegetable__image"
              />
            </div>
            <div className="discount__section__column__fruits">
              <img
                src="/images/discount (2).png"
                alt=""
                className="discount__section__fruits__image"
              />
              <h1 className="discount__section__fruits__text">
                Fruits Straight From <br /> the Farm
              </h1>
              <button className="discount__section__button">
                View Products{' '}
                <img
                  src="/images/right-chevron.png"
                  alt=""
                  className="discount__section__button__arrow"
                />
              </button>
              <h1 className="discount__fruits__percentage">50% OFF</h1>
            </div>
          </div>
        </section>
      </div>
      <WhatWeDo />
      <OurFarmers />
    </Layout>
  );
}
