import "./Login.scss";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import { Link, useNavigate, useParams } from "react-router-dom";
import FormLeft from "../../component/formLeft/FormLeft";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { signin } from "../../redux/actions/vendorsAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    if(error) toast("Incorrect Username or password")
  }, [dispatch, error, vendorInfo]);

  return (
    <form className="login" onSubmit={(e) => submitHandler(e)}>
      <ToastContainer/>

      <FormLeft />
      <div className="login_right">
        <div className="login_right_title">Login</div>
        <div className="input_form">
          <input
            type="text"
            placeholder="email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <PersonIcon className="personIcon" />
        </div>
        <div className="input_form">
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <KeyIcon className="KeyIcon" />
        </div>
        <input type="submit" value="Login" />
        <div className="form_redirection">
          Don’t Have an account
          <Link to="/buyers_SignUpPage" className="link">
            Signup
          </Link>
        </div>
      </div>
    </form>
  );
}
