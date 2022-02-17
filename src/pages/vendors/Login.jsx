import "./Login.scss";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import { Link, useNavigate, useParams } from "react-router-dom";
import FormLeft from "../../component/formLeft/FormLeft";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { signin } from "../../redux/actions/vendorsAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RippleButton from "../../component/Button/Button";

export default function VendorLogin() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const vendorSignIn = useSelector((state) => state.vendorSignIn);

  const { vendorInfo, loading, error, success } = vendorSignIn;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("request body ", email, password);
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if ((vendorInfo && vendorInfo.id > 0) || success) {
      navigate("/vendor");
    }
    if (error) toast("Incorrect Username or password");
  }, [dispatch, error, vendorInfo]);
  // navigate to the forget password route
  function handleForget() {
    navigate("/forget-password");
  }
  return (
    <form className="login" onSubmit={(e) => submitHandler(e)}>
      <ToastContainer />

      <FormLeft />
      <div className="login_right">
        <div className="login_right_title">Login</div>
        <div className="input_form login_main login_main-1">
          <input
            type="text"
            placeholder="email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <PersonIcon className="personIcon" />
        </div>
        <div className="input_form login-main ">
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <KeyIcon className="KeyIcon" />
        </div>
        <span className="forget-password" onClick={handleForget}>
          forget password ?
        </span>
        <div className="submit">
          <RippleButton button="Login" />
        </div>

        <div className="form_redirection">
          <span> Don’t have an account? &nbsp;</span>
          <Link to="/buyers_SignUpPage" className="link">
            Signup
          </Link>
        </div>
      </div>
    </form>
  );
}

//
// (
//   <form className="login" onSubmit={(e) => submitHandler(e)}>
//     <ToastContainer />
//     <FormLeft />
//     <div className="login_right ">
//       <div className="login_right_title">Login</div>
//       {/* {error ?  toast("Incorrect username or password"): null} */}
//       <div className="input_form login-main login_main-1 ">
//         <input
//           type="text"
//           placeholder="email or phone number"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <PersonIcon className="personIcon" />
//       </div>
//       <div className="input_form login-main">
//         <input
//           type="password"
//           placeholder="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <KeyIcon className="KeyIcon" />
//       </div>
//       <span className="forget-password" onClick={handleForget}>
//         forget password ?
//       </span>
//       {/* <input type="submit" value="Login" /> */}
//       <RippleButton button="Login" width="40rem" />
//       <div className="form_redirection">
//         <span> Don’t have an account? &nbsp;</span>
//         <Link to="/farmer_signUpPage" className="link">
//           Signup
//         </Link>
//       </div>
//     </div>
//   </form>
// );
