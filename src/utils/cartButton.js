import React from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const CartButton = (props) => {

    const userSignin = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignin;

    let cartItems = useSelector((state) => state.cart);
    let numOfCartItems = cartItems.cartItems.length;

  return (

      userInfo.token && userInfo.role === "farmer" ? (

        null

      ) : (

        <Link to="/cart">
          <button
            id="whatsapp"
            className="whatsapp"
            style={{
              position: "fixed",
              textAlign: "center",
              zIndex: 100,
              width: "60px",
              height: "60px",
              bottom: "2rem",
              right: "4rem",
              borderRadius: "50px",
              borderColor: "#25d366",
              backgroundColor: '#88b22e'
            }}
          >
            <i
              className="fa fa-shopping-cart"
              style={{  color: "white" }}
            > {numOfCartItems} </i>
          </button>
        </Link>
      )

  );
};

export default CartButton;
