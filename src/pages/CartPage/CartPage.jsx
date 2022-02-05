import DetailsResponse from "../../component/detailsResponse/detailsResponse";
import RemoveFromCart from "../../utils/removeFromCart";
import CheckIcon from "@mui/icons-material/Check";
import "./CartPage.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Data from "../../dommydata";
import { useSelector, useDispatch } from "react-redux";
import AddToCard from "../../utils/addToCartForCart";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { pagination } from "../../paginateFunction";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { url } from "../../constant/url";

export default function CartPage() {
  let totalPrice = 0;
  let cartItems = useSelector((state) => state.cart);
  let numOfCartItems = cartItems.cartItems.length;
  cartItems.cartItems.forEach(
    (items, index) => {
      totalPrice += parseInt(items.sellingPrice)
      console.log("this is the total price ", totalPrice)
      console.log("this is the total sellingPrice ", items.sellingPrice)
    }
  );

  let cartRemover = RemoveFromCart(useDispatch);
  let addToCart = AddToCard(useDispatch, useSelector);

  // handle the paginate and reduction function....
  const [paginate, setPaginate] = useState(1);
  const [productData, setProductData] = useState([]);
  const [show, setShow] = useState(false);
  const [productInfo, setProductInfo] = useState();
  // determine the pagination condition...
  const total = cartItems.cartItems.length;
  const pageCount = 3;
  const pageSize = Math.ceil(total / pageCount);
  // console.log(pageSize);

  function handleIncrement() {
    if (paginate < pageSize) {
      setPaginate(paginate + 1);
    }
  }
  function handleReduction() {
    if (paginate > 1) {
      setPaginate(paginate - 1);
    }
  }

  const showDetails = (items) => {
    setShow(true);
    setProductInfo(items);
  };
  const hideDetails = () => {
    setShow(!show);
  };
  
  useEffect(() => {

    const product = pagination(pageCount, cartItems.cartItems, paginate);
    setProductData(product);

  }, [paginate, cartItems]);

  return (
    <div className="cart">
      <div className="cart_left">
        <div className="cart_left_wrapper">
          <h2 className="cart_left_title">Cart</h2>
          <ul className="cart_left_items_wrappers">
            {productData &&
              productData.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="check">
                      <CheckIcon className="check_icon" />
                    </div>
                    <div className="product_image">
                      <img src={`${url + item.image}`} alt="" />
                    </div>
                    <div className="name_details">
                      <div className="name">{item.name.replace("_", "  ").toUpperCase()}</div>
                      <div className="details">
                        <button onClick={() => showDetails(item)}>
                          view details
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="arrow_forward_backward">
          <ArrowBackIcon className="arrow_backward" onClick={handleReduction} />
          <ArrowForwardIcon
            className="arrow_forwardward"
            onClick={handleIncrement}
          />
        </div>
      </div>
      <div className="cart_right">
        <h4>Total:: #{totalPrice}</h4>
        <table className="table">
          <thead className="table_head">
            <tr>
              <th className="th_image">image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productData &&
              productData.map((product, index) => {
                const { price } = product;
                return (
                  <tr key={index} className="">
                    <td className="td_image">
                      <figure>
                        <img src={`${url + product.image}`} alt="" />
                      </figure>
                    </td>
                    <td>{product.sellingPrice}</td>

                    <td>
                      <select
                        name=""
                        id=""
                        onChange={(e) =>
                          (totalPrice += addToCart(product.id, e.target.value))
                        }
                      >
                        <option
                          value={product.fullbag}
                        >{`#${product.fullbag} /Fullbag`}</option>
                        <option
                          value={product.halfbag}
                        >{`#${product.halfbag} /Halfbag`}</option>
                        <option
                          value={product.quaterbag}
                        >{` #${product.quaterbag} /Quaterbag`}</option>
                      </select>
                    </td>
                    <td>
                      <DeleteForeverIcon
                        className="delete_icon"
                        onClick={() => cartRemover(product.id)}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="continue_checkout">
          <button className="continue_shopping">
            <Link
              to="/farmers"
              className="continue_shopping"
              style={{ textDecoration: "none" }}
            >
              Continue shopping
            </Link>
          </button>

          <button className="check_out">Check out</button>
        </div>
      </div>

      {show && (
        <DetailsResponse items={productInfo} hideDetails={hideDetails} />
      )}
    </div>
  );
}
