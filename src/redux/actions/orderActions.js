import axios from 'axios';
import { CART_RESET } from '../constants/cartConstant';
import * as actionTypes from "../constants/orderConstants"
import {url} from '../../constant/url';

export const createOrder = (response, cartItems)=> async (dispatch, getState)=>{
    
    dispatch({
        
        type: actionTypes.ORDER_CREATE_REQUEST,
        payload: { response, cartItems  }
        
    })

    try {
        
        const { vendorSignIn: {vendorInfo},} = getState();
        // console.log("__________________________________________ ", vendorInfo)
        const { data } = await axios.post(`${url}orders`, {response, cartItems}, {
            headers:{ 
                Authorization: `Bearer ${vendorInfo.token}`
            }
        });
        console.log("this i sthe order respnsed data ", cartItems)
        
        dispatch({type: actionTypes.ORDER_CREATE_SUCCESS,  payload: data  })
        dispatch({type: CART_RESET})
        if(data){

            localStorage.removeItem("cart");
        }
          
    } catch (error) {
        // console.log(error.response) 
        dispatch({
            type: actionTypes.ORDER_CREATE_FAIL,
            payload: error.response 
        })  
    }
}


