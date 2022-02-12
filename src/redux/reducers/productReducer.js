import React from "react";

import * as actionTypes from "../constants/productConstant";

export const getProductReducer = (state = { products: [] }, action) => {

  switch (action.type) {
    case actionTypes.GET_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case actionTypes.GET_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    case actionTypes.GET_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const postProductReducer = (state = { products: [] }, action) => {
  console.log("incoming actions ", action)

  switch (action.type) {
    
    case actionTypes.POST_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case actionTypes.POST_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    case actionTypes.POST_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: [] }, action) => {

  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {   }
      }

    default:
      return state;
  }
};
export const deleteProductReducer = (state = { deleteProduct: [] }, action) => {

  switch (action.type) {
    case actionTypes.DELETE_PRODUCT_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.DELETE_PRODUCT_SUCCESS:
      return {
        loading: false,
        deleteProduct: action.payload,
      };

    case actionTypes.DELETE_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };


    default:
      return state;
  }
};
