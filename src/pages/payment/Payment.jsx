import "./payment.scss";
export default function Payment() {
  return (
    <div className="payment">
      <div className="logo">
        <img src="/images/main-logo.png" alt="main-logo" />
      </div>
      <h1 className="payment_title">Payment Method</h1>
      <div className="payment_details">
        <div className="payment_paypal">
          <input type="radio" name="payment" id="paypal" checked />
          <label htmlFor="paypal">
            <span></span>
            <img src="/images/paypal.png" alt="" />
          </label>
        </div>
        <div className="payment_creditCard">
          <input type="radio" name="payment" id="creditCard" />
          <label htmlFor="creditCard">
            <span></span>
            credit card
          </label>
          <div className="payment_creditCard_details">
            <input type="password" name="" id="" placeholder="*** *** ***" />
            <div className="split_details">
              <input type="password" name="" id="" />
              <input type="password" name="" id="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
