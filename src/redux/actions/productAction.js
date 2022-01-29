import React from "react";
import * as actionTypes from "../constants/productConstant";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import {url} from "../../constant/url";

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_REQUEST,
  });
  try {
    axios
      .get(`${url}getProducts`)
      .then((res) => {
        dispatch({
          type: actionTypes.GET_PRODUCT_SUCCESS,
          payload: res.data.items,
        });
        localStorage.setItem("products", JSON.stringify(res.data.items));
      })
      .catch((error) =>
        dispatch({
          type: actionTypes.GET_PRODUCT_FAIL,
          payload: error,
        })
      );
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAIL,
      payload: null,
    });
  }
};

export const postProducts = (data, userInfo) => async (dispatch) => {
  dispatch({
    type: actionTypes.POST_PRODUCT_REQUEST,
  });

  // try {
    
    axios
      .post(url+'addProduct', data, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
      .then((res) => {
        console.log("finding the responses ", res);
        dispatch({
          type: actionTypes.POST_PRODUCT_SUCCESS,
          payload: res.data,
        });
        localStorage.setItem("postprod", JSON.stringify(res.data));
      })
      .catch((error) =>
      
      {  dispatch({
        type: actionTypes.POST_PRODUCT_FAIL,
        payload: error.response.data.error,
      });
      console.log("finding the responses ", error.response.data.error)
    }
    
    
    )
  // } catch (error) {
  //   dispatch({
  //     type: actionTypes.POST_PRODUCT_FAIL,
  //     payload: error.response.data.error,
      
  //   });
  //   console.log("finding the responses ", error.response.data.error)
  // }
};

export const getProductDetails = (id) => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAILS_REQUEST,
  });
  try {
    axios
      .get(`${url}getProduct/${id}`)
      .then((res) =>
        dispatch({
          type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
          payload: res.data.items,
        })
      )
      .catch((error) =>
        dispatch({
          type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
          payload: error,
        })
      );
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: error,
    });
  }
};
