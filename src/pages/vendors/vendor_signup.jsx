import "./SignUp.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormLeft from "../../component/formLeft/FormLeft";
import http from "../../services/httpServices";
import { BASE_URL } from "../../constant/url";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/usersAction";

export default function VendorSignUp() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignIn);
  const userRegister = useSelector((state) => state.userRegister);

  const { userInfo, loading, error, success } = userSignin;
  const { reguserInfo, regloading, regerror, regsuccess } = userRegister;

  const [email, setEmail] = useState("");
  const [address, setAddr] = useState("");
  const [number, setNumber] = useState("");
  const [fullname, setfullName] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = { fullname, address, email, number, password };
    dispatch(register(body));
  };

  useEffect(() => {
    if ((userInfo && userInfo.id > 0) || regsuccess || success)
      navigate("/dashboard");
  }, [dispatch, userSignin, error, userInfo, success]);

  return (
    <div className="signUp">
      <FormLeft />
      <div className="signup_right">
        <div className="signup_title">Sign-up</div>
        {regerror && (
          <div className="signup_title" style={{ color: "red" }}>
            {regerror}
          </div>
        )}
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
            <label htmlFor="">Farm Address</label>
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
            Already Have an account?
            <Link to="/farmer_LoginPage" className="link">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
