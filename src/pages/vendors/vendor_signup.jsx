import "./SignUp.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormLeft from "../../component/formLeft/FormLeft";
import http from "../../services/httpServices";
import { BASE_URL } from "../../constant/url";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../../redux/actions/vendorsAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function VendorSignUp() {

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const vendorSignIn = useSelector((state) => state.vendorSignIn);
  const vendorRegister = useSelector((state) => state.vendorRegister);

  const { vendorInfo, loading, error, success } = vendorSignIn;
  const { reguserInfo, regloading, regerror, regsuccess } = vendorRegister;

  const [email, setEmail] = useState("");
  const [address, setAddr] = useState("");
  const [number, setNumber] = useState("");
  const [fullname, setfullName] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = { fullname, address, email, number, password };
    console.log("this is the request vendor body, ", body)
    dispatch(register(body));
  };

  useEffect(() => {
    if ((vendorInfo && vendorInfo.id > 0) || regsuccess || success) navigate("/vendor");
    if(regerror) toast(`${regerror}`)
  }, [dispatch, vendorSignIn, error, vendorInfo, success]);

  return (
    
    <div className="signUp">
      <ToastContainer/>
      <FormLeft />
      <div className="signup_right">
        <div className="signup_title">Sign-up</div>
        <form className="form_wrapper" onSubmit={(e) => handleSubmit(e)}>
          <div className="input_form first">
            <div className="input_form_left">
              <input
                type="text"
                onChange={(e) => setfullName(e.target.value)}
                required={true}
              />
              <label htmlFor="">Fullname</label>
            </div>
            <div className="input_form_left">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              <label htmlFor="">Email</label>
            </div>
          </div>
          <div className="input_form">
            <input
              type="text"
              onChange={(e) => setAddr(e.target.value)}
              required={true}
            />
            <label htmlFor=""> Address</label>
          </div>
          <div className="input_form">
            <input
              type="number"
              onChange={(e) => setNumber(e.target.value)}
              required={true}
            />
            <label htmlFor="">number</label>
          </div>
          <div className="input_form">
            <input
              type="password"
              name=""
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
            <label htmlFor="">Password</label>
          </div>
          {/* <div className="input_form">
            <input
              type="password"
              name=""
              onChange={(e) => setConfirmPassword(e.target.value)}
              required={true}
            />
            <label htmlFor="">Confirm password</label>
          </div> */}
          <div className="input_form">
            <input type="submit" value="sign-up" required={true} />
          </div>
          <div className="form_redirection">
            Already Have an account ?
            <Link to="/buyers_LoginPage" className="link">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
