import axios from "axios";
import * as actionTypes from "../constants/usersConstant";
import { url } from "../../constant/url";

export const register = (body) => async (dispatch) => {
    
  dispatch({
    type: actionTypes.USER_REGISTER_REQUEST,
    payload: {
      body,
    },
  });

  try {
    const { data } = await axios.post(`${url}farmer_register`, { ...body });

    dispatch({ type: actionTypes.USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: actionTypes.USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
    localStorage.removeItem("cart");
  } catch (error) {
    // console.log(error.response.data.error )
    dispatch({
      type: actionTypes.USER_REGISTER_FAIL,
      payload: error.response.data.error
        ? error.response.data.error
        : error.message,
    });
  }
};

export const signin = (email, password) => async (dispatch) => {
  dispatch({
    type: actionTypes.USER_SIGNIN_REQUEST,
    payload: {
      email,
      password,
    },
  });

  try {
    const { data } = await axios.post(`${url}farmer_login`, {
      email,
      password,
    });

    dispatch({
      type: actionTypes.USER_SIGNIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_SIGNIN_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  // localStorage.removeItem('cartItems')
  dispatch({ type: actionTypes.USER_SIGNOUT });
};

export const changeEmail = (new_email, userInfo) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_CHANGE_EMAIL_REQUEST });

  try {
    const { data } = await axios.post(
      `${url}usersEditEmail`,
      { new_email },
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({
      type: actionTypes.USER_CHANGE_EMAIL_SUCCESS,
      payload: data,
    });
    localStorage.setItem("changeEmail", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_CHANGE_EMAIL_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const changePassword = (new_Pass, userInfo) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_CHANGE_PASSWORD_REQUEST });
  try {
    const { data } = await axios.post(
      `${url}usersEditPass`,
      { new_Pass },
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({
      type: actionTypes.USER_CHANGE_PASSWORD_SUCCESS,
      payload: data,
    });
    localStorage.setItem("changePass", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_CHANGE_PASSWORD_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const validateOTP =
  (otpCode, new_email) => async (dispatch, getState) => {
    dispatch({ type: actionTypes.USER_VALIDATE_OTP_REQUEST });

    try {
      const {
        userSignIn: { userInfo },
      } = getState();
      const { data } = await axios.post(
        `${url}resetEmail`,
        { otpCode, new_email },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );

      dispatch({
        type: actionTypes.USER_VALIDATE_OTP_SUCCESS,
        payload: data.msg,
      });
      dispatch({ type: actionTypes.USER_SIGNIN_SUCCESS, payload: data });
      localStorage.removeItem("changeEmail");
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error.response.data.error);
      dispatch({
        type: actionTypes.USER_VALIDATE_OTP_FAIL,
        payload: error.response.data.error,
      });
    }
  };

export const validatePassOTP =
  (otpCode, new_Pass) => async (dispatch, getState) => {
    dispatch({ type: actionTypes.USER_VALIDATE_PASS_OTP_REQUEST });

    try {
      const {
        userSignIn: { userInfo },
      } = getState();
      const { data } = await axios.post(
        `${url}resetPass`,
        { otpCode, new_Pass },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );

      dispatch({
        type: actionTypes.USER_VALIDATE_PASS_OTP_SUCCESS,
        payload: data.msg,
      });
      dispatch({ type: actionTypes.USER_SIGNIN_SUCCESS, payload: data });

      localStorage.removeItem("changePass");
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error.response.data.error);
      dispatch({
        type: actionTypes.USER_VALIDATE_PASS_OTP_FAIL,
        payload: error.response.data.error,
      });
    }
  };

export const changeDetails =
  (name, phone, address) => async (dispatch, getState) => {
    dispatch({ type: actionTypes.USER_CHANGE_DETAILS_REQUEST });

    try {
      const {
        userSignIn: { userInfo },
      } = getState();
      const { data } = await axios.post(
        `${url}changedetails`,
        { name, phone, address },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );

      dispatch({
        type: actionTypes.USER_CHANGE_DETAILS_SUCCESS,
        payload: data.msg,
      });
      dispatch({ type: actionTypes.USER_SIGNIN_SUCCESS, payload: data });

      // localStorage.removeItem("changePass")
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error.response.data.error);
      dispatch({
        type: actionTypes.USER_CHANGE_DETAILS_FAIL,
        payload: error.response.data.error,
      });
    }
  };
