import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
// import {
//   loginReducer,
//   updateImageReducer,
//   updateUserReducer,
// } from './reducer/loginReducer';
// import { registerReducer } from './reducer/registerReducer';
// import { renderProductReducer } from './reducer/renderProductReducer';
// import { singleProductReducer } from './reducer/singleProductReducer';

// import {
//   productDetailsReducer,
//   productListReducer,
// } from './reducer/productReducer';
// import { cartReducer, shippingReducer } from './reducer/cartReducer';

// import { userReducer } from './reducer/userReducer';
// import { register_reducer } from './reducer/registerReducer';
// import { paymentReducer } from './reducer/paymentReducer';

const initialState = {
  // signIn: {
  //   userInfo: localStorage.getItem('userToken')
  //     ? JSON.parse(localStorage.getItem('userToken'))
  //     : null,
  // },
//   Login: {
//     loginUser: localStorage.getItem('login')
//       ? JSON.parse(localStorage.getItem('login'))
//       : null,
//   },
};
const reducer = combineReducers({
 
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
