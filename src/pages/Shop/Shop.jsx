import './Shop.scss';
import Layout from '../../component/layout/Layout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchComponent from '../../component/Search/Search';
export default function Shop() {
  return (
    <Layout>
      <main>
        <section className="sidebar__section">
          <div className="sidebar__section__container">
            <h1 className="sidebar__section__main__text__search">Search</h1>
            <SearchComponent />
            <h1 className="sidebar__section__main__text__categories">
              Categories
            </h1>
            <div className="category_wrapper">
              <div className="category_item">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="sidebar__section__categories__items"
                />
                <div className="category_item_name">Vegetables</div>
                <span className="sidebar__section__categories__items__price">
                  (12,000)
                </span>
              </div>
              <div className="category_item">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="sidebar__section__categories__items"
                />
                <div className="category_item_name">Food stuffs</div>
                <span className="sidebar__section__categories__items__price">
                  (1,000)
                </span>
              </div>
              <div className="category_item">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="sidebar__section__categories__items"
                />
                <div className="category_item_name">Food stuffs</div>
                <span className="sidebar__section__categories__items__price">
                  (1,000)
                </span>
              </div>
              <div className="category_item">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="sidebar__section__categories__items"
                />
                <div className="category_item_name">Fruits</div>
                <span className="sidebar__section__categories__items__price">
                  (2,000)
                </span>
              </div>
              <div className="category_item">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="sidebar__section__categories__items"
                />
                <div className="category_item_name">Food Stuffs</div>
                <span className="sidebar__section__categories__items__price">
                  (11,000)
                </span>
              </div>
              <div className="category_item">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="sidebar__section__categories__items"
                />
                <div className="category_item_name">Fruits</div>
                <span className="sidebar__section__categories__items__price">
                  (2,000)
                </span>
              </div>
            </div>
            <div className="discount_section">
              <h1 className="sidebar__section__main__text__discount">
                Discount percentage
              </h1>
              <div className="discount_item">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="sidebar__section__discount__items"
                />
                <div className="discount_item_percent">50%</div>
              </div>
              <div className="discount_item">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="sidebar__section__discount__items"
                />
                <div className="discount_item_percent">40%</div>
              </div>
              <div className="discount_item">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="sidebar__section__discount__items"
                />
                <div className="discount_item_percent">30%</div>
              </div>
              <div className="discount_item">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="sidebar__section__discount__items"
                />
                <div className="discount_item_percent">20%</div>
              </div>
              <div className="discount_item">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="sidebar__section__discount__items"
                />
                <div className="discount_item_percent">10%</div>
              </div>
            </div>
            <div className="filter_range">
              <h1 className="sidebar__section__main__text__filter">
                Filter by price
              </h1>
              <input
                className="sidebar__section__filter__range"
                type="range"
                name=""
                id=""
              />
              <button className="sidebar__section__filter__button">
                Filter
              </button>
            </div>
          </div>
        </section>
        <section className="products__section">
          <div className="product_filter_title">
            <h1 className="products__section__text">Featured Products</h1>
            <input
              type="search"
              className="products__section__sort__button"
              name="search"
              placeholder="Sort By Default"
            />
          </div>

          {/* the Shop or the product section...... */}
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
                {/* <img
                  src="/images/cart-11-24.png"
                  alt=""
                  className="product__section__basket"
                /> */}
              </div>

              <p className="products__section__product__price">
                Price: &#8358; 100
              </p>
              <button className="products__section__product__button">
                View More
              </button>
            </div>
            {/*  */}
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
                {/* <img
                  src="/images/cart-11-24.png"
                  alt=""
                  className="product__section__basket"
                /> */}
              </div>

              <p className="products__section__product__price">
                Price: &#8358; 100
              </p>
              <button className="products__section__product__button">
                View More
              </button>
            </div>
            {/*  */}
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
                {/* <img
                  src="/images/cart-11-24.png"
                  alt=""
                  className="product__section__basket"
                /> */}
              </div>

              <p className="products__section__product__price">
                Price: &#8358; 100
              </p>
              <button className="products__section__product__button">
                View More
              </button>
            </div>
            {/*  */}
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
                {/* <img
                  src="/images/cart-11-24.png"
                  alt=""
                  className="product__section__basket"
                /> */}
              </div>

              <p className="products__section__product__price">
                Price: &#8358; 100
              </p>
              <button className="products__section__product__button">
                View More
              </button>
            </div>
            {/*  */}
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
                {/* <img
                  src="/images/cart-11-24.png"
                  alt=""
                  className="product__section__basket"
                /> */}
              </div>

              <p className="products__section__product__price">
                Price: &#8358; 100
              </p>
              <button className="products__section__product__button">
                View More
              </button>
            </div>
            {/*  */}
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
                {/* <img
                  src="/images/cart-11-24.png"
                  alt=""
                  className="product__section__basket"
                /> */}
              </div>

              <p className="products__section__product__price">
                Price: &#8358; 100
              </p>
              <button className="products__section__product__button">
                View More
              </button>
            </div>
            {/*  */}
          </div>
        </section>
        <div className="fixed_cart__item">
          <ShoppingCartIcon className="cart" />
        </div>
      </main>
    </Layout>
  );
}
