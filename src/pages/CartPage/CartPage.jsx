import "./CartPage.scss";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Data from "../../dommydata";
import DetailsResponse from "../../component/detailsResponse/detailsResponse";
const { cart } = Data;

export default function CartPage() {
  return (
    <div className="cart">
      <div className="cart_left">
        <h2 className="cart_left_title">Cart</h2>
        <ul className="cart_left_items_wrappers">
          {cart.map((item, index) => {
            return (
              <li key={index}>
                <div className="check">
                  <CheckIcon className="check_icon" />
                </div>
                <div className="product_image">
                  <img src={`${item.img}`} alt="" />
                </div>
                <div className="name_details">
                  <div className="name">{item.name}</div>
                  <div className="details">
                    <button>view details</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="arrow_forward_backward">
          <ArrowBackIcon className="arrow_backward" />
          <ArrowForwardIcon className="arrow_forwardward" />
        </div>
      </div>
      <div className="cart_right">
        <table className="table">
          <thead className="table_head">
            <tr>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              const { price } = item;
              return (
                <tr key={index} className="">
                  <td>{price}</td>
                  <td>
                    <select name="" id="">
                      <option value="">large</option>
                      <option value="">medium</option>
                      <option value="">small</option>
                    </select>
                  </td>
                  <td>{price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="continue_checkout">
          <button className="continue_shopping"> continue Shopping</button>
          <button className="check_out">Check out</button>
        </div>
      </div>
      {false && <DetailsResponse />}
    </div>
  );
}
