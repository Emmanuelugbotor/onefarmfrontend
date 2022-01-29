import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  composeWithDevTiils,
  composeWithDevTools,
} from "redux-devtools-extension/developmentOnly";
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductReducer,
  getProductDetailsReducer,
  postProductReducer,
} from "./reducers/productReducer";

import {
  userRegisterReducer,
  userSignInReducer,
  userChangePassReducer,
  userChangeDetailsReducer,
  userChangeEmailReducer,
  userValidateOTP,
  userValidateOtpPass,
} from "./reducers/usersReducer";

import { orderCreateReducer } from "./reducers/orderReducers";
const reducers = combineReducers({
  cart: cartReducer,
  getProduct: getProductReducer,
  postProduct: postProductReducer,
  getProductDetails: getProductDetailsReducer,
  userSignIn: userSignInReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  userChangeEmail: userChangeEmailReducer,
  changeEmail: userValidateOTP,
  userChangePass: userChangePassReducer,
  changePass: userValidateOtpPass,
  userChangeDetails: userChangeDetailsReducer,
});

const middleware = { thunk };

const productsFromLocalStorage = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];
const postProduct = localStorage.getItem("postprod")
  ? JSON.parse(localStorage.getItem("postprod"))
  : [];
const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const userSignIn = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];
const shippingAdress = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : [];
const userChangeEmail = localStorage.getItem("changeEmail")
  ? JSON.parse(localStorage.getItem("changeEmail"))
  : {};
const userChangePass = localStorage.getItem("changePass")
  ? JSON.parse(localStorage.getItem("changePass"))
  : {};

const INITIAL_CART_STATE = {
  cart: { cartItems: cartFromLocalStorage, shippingAdress: shippingAdress },
  userSignIn: { userInfo: userSignIn },
  getProduct: { products: productsFromLocalStorage },
  postProduct: { products: postProduct },
  userChangeEmail: { emailChange: userChangeEmail },
  userChangePass: { changePass: userChangePass },
};

const store = createStore(
  reducers,
  INITIAL_CART_STATE,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
