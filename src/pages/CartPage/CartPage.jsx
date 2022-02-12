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
import { createOrder } from "../../redux/actions/orderActions";
import { useFlutterwave, closePaymentModal, FlutterWaveButton } from 'flutterwave-react-v3';

import { url } from "../../constant/url";

export default function CartPage() {

  let dispatch = useDispatch()

  // import { useFlutterwave, closePaymentModal, FlutterWaveButton } from 'flutterwave-react-v3';

  // public_key: 'FLWPUBK_TEST-c2c93645ec804dcafa80ccaf15bb4acd-X',

  //public_key: 'FLWPUBK-93f72abbb910f3df3c4dbc960feb93c6-X',

  
  let totalPrice = 0;
  let cartItems = useSelector((state) => state.cart);
  let numOfCartItems = cartItems.cartItems.length;
  cartItems.cartItems.forEach((items, index) => {
    totalPrice += parseInt(items.sellingPrice);
  });

  let cartRemover = RemoveFromCart(useDispatch);
  let addToCart = AddToCard(useDispatch, useSelector);

  let x = {status: 'successful', 
  transaction_id: 3115978, tx_ref: 1644405793586,
   flw_ref: 'FLW-MOCK-c28b857d2fe16463c0e7dd493550f141',
 
 amount: 933,
 currency: "NGN",
 customer: {name: 'Emmanuel Ugbotor ', email: 'emmanuelugbotor@gmail.com', phone_number: '08065099558'},
 flw_ref: "FLW-MOCK-c28b857d2fe16463c0e7dd493550f141",
 redirectstatus: undefined,
 status: "successful",
 transaction_id: 3115978,
 tx_ref: 1644405793586
 }

  const placeOrderHandler = (response) =>
{
  
  console.log("this is the frontend response data ", cartItems)
  dispatch(createOrder(response, cartItems.cartItems))
}
console.log(cartItems)
console.log("cartItems", cartItems.cartItems)
   
// handle the paginate and reduct ion function....
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

const config = {
  
  public_key: "FLWPUBK_TEST-c2c93645ec804dcafa80ccaf15bb4acd-X",
  tx_ref: Date.now(),
  amount: totalPrice,
  currency: "NGN",
  payment_options: "card, ussd, bank",
  customer: {
    email: `emmanuelugbotor@gmail.com`,
    phone_number: `08065099558`,
    name: `emmanuel ugbotor`,
  },
  
  // meta:{
    //   ShippingAddress: ShippingAddress
    // },
    
    customizations: {
      title: "OneFarmTech CheckOut",
      description: "Payment for items in cart",
      logo: "https://onefarmtech.com/images/logo.png",
    },
  }; 
  
  const handleFlutterPayment = useFlutterwave(config);
  
  useEffect(() => {
    
    const product = pagination(pageCount, cartItems.cartItems, paginate);
    setProductData(product);
  }, [paginate, cartItems, ]);

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
                      <div className="name">
                        {item.name.replace("_", "  ").toUpperCase()}
                      </div>
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

          {/* <button className="check_out">Check out</button> */}
          <button
            className="check_out"
            type="button"
            onClick={() => {
              handleFlutterPayment({
                callback: async (response) => {
                  if (response.status == "successful") {
                    console.log("REQUEST DATA CAME IN HERE : ");
                    console.log("REACT FRONTEND RESPONDE", response);
                    // setRedirectStatus(true);
                    await placeOrderHandler(response);
                    alert("YOUR PAYMENT WAS SUCCESSFUL")
                  } else {
                    alert("Network Error,  Try again");
                  }
                },

                onClose: () => {
                  alert("You cancelled the payment session")
                  closePaymentModal();
                },

              });
            }}
          >
            Pay Now
          </button>
        </div>
      </div>

      {show && (
        <DetailsResponse items={productInfo} hideDetails={hideDetails} />
      )}
    </div>
  );
}
