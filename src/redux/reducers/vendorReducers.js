import * as actionTypes from "../constants/usersConstant";

export const vendorSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.VENDOR_SIGNIN_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.VENDOR_SIGNIN_SUCCESS:
      return {
        loading: false,
        // state: action.payload,
        vendorInfo: action.payload,
      };

    case actionTypes.VENDOR_SIGNIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case actionTypes.VENDOR_SIGNOUT:
      return {};

    default:
      return state;
  }
};

export const vendorRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.VENDOR_REGISTER_REQUEST:
      return {
        regloading: true,
        regsuccess: false,
      };

    case actionTypes.VENDOR_REGISTER_SUCCESS:
      return {
        regloading: false,
        regsuccess: true,
        reguserInfo: action.payload,
      };

    case actionTypes.VENDOR_REGISTER_FAIL:
      return {
        regloading: false,
        regsuccess: false,
        regerror: action.payload,
      };

    default:
      return state;
  }
};

export const userChangeEmailReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.VENDOR_CHANGE_EMAIL_REQUEST:
      return {
        loading: true,
      };

    case actionTypes.VENDOR_CHANGE_EMAIL_SUCCESS:
      return {
        loading: false,
        changeEmailInfo: action.payload,
      };

    case actionTypes.VENDOR_CHANGE_EMAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const userChangePassReducer = (state = {}, action) => {

  switch (action.type) {

    case actionTypes.VENDOR_CHANGE_PASSWORD_REQUEST:

      return {
        loadingPass: true,
      };

    case actionTypes.VENDOR_CHANGE_PASSWORD_SUCCESS:
      return {
        loadingPass: false,
        passInfo: action.payload,
      };

    case actionTypes.VENDOR_CHANGE_PASSWORD_FAIL:
      return {
        loadingPass: false,
        errorPass: action.payload,
      };

    default:
      return state;
  }
};

export const userValidateOTP = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.VENDOR_VALIDATE_OTP_REQUEST:
      return {
        otpLoading: true,
      };

    case actionTypes.VENDOR_VALIDATE_OTP_SUCCESS:
      return {
        otpLoading: false,
        otpSuccess: action.payload,
      };

    case actionTypes.VENDOR_VALIDATE_OTP_FAIL:
      return {
        otpLoading: false,
        otpError: action.payload,
      };

    default:
      return state;
  }
};


export const userValidateOtpPass = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.VENDOR_VALIDATE_PASS_OTP_REQUEST:
      return {
        passOtpLoading: true,
      };

    case actionTypes.VENDOR_VALIDATE_PASS_OTP_SUCCESS:
      return {
        passOtpLoading: false,
        passOtpSuccess: action.payload,
      };

    case actionTypes.VENDOR_VALIDATE_PASS_OTP_FAIL:
      return {
        passOtpLoading: false,
        passOtpError: action.payload,
      };

    default:
      return state;
  }
};


export const userChangeDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.VENDOR_CHANGE_DETAILS_REQUEST:

      return {
        loadingDetails: true,
      };

    case actionTypes.VENDOR_CHANGE_DETAILS_SUCCESS:
      return {
        loadingDetails: false,
        detailsInfo: action.payload,
      };

    case actionTypes.VENDOR_CHANGE_DETAILS_FAIL:
      return {
        loadingDetails: false,
        errorDetails: action.payload,
      };

    default:
      return state;
  }
};