import "./Login.scss";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import { Link, useNavigate, useParams } from "react-router-dom";
import FormLeft from "../../component/formLeft/FormLeft";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { signin } from "../../redux/actions/usersAction";

export default function Login() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const userSignin = useSelector((state) => state.userSignIn);
  const { userInfo, loading, error, success } = userSignin;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("request body ", email, password);
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if ((userInfo && userInfo.id > 0) || success) {
      navigate("/dashboard");
    }
  }, [dispatch, error, userInfo]);

  return (
    <form className="login" onSubmit={(e) => submitHandler(e)}>
      <FormLeft />
      <div className="login_right">
        <div className="login_right_title">Login</div>
        {error && <h4 style={{ color: "red" }}>{error}</h4>}
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
          <span>  Don’t Have an account?</span>
          <Link to="/farmer_signUpPage" className="link">
            Signup
          </Link>
        </div>
      </div>
    </form>
  );
}
