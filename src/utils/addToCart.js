import React from "react";
import { addToCart } from "../redux/actions/cartActions";

const AddToCard = (useDispatch, useSelector) => {
  
  let dispatch = useDispatch();
  let product = useSelector((state) => state.getProduct);

  const addToCartController = async (id, qty) => {
  let prodDetails = product.products.find((prod) => prod.id == parseInt(id));
  dispatch(addToCart(prodDetails, qty));
  };

  return addToCartController;
};

export default AddToCard;

// cc = 4682 1903 0891 1961
// 04/24  cvc = 881
// MARIAN AKPAMA
