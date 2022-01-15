import "./Login.scss";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import { Link, useParams  } from "react-router-dom";
import FormLeft from "../../component/formLeft/FormLeft";

export default function Login() {
  

  return (
    <form className="login">
      <FormLeft />
      <div className="login_right">
        <div className="login_right_title">Login</div>
        <div className="input_form">
          <input type="text" placeholder="email or phone number" />
          <PersonIcon className="personIcon" />
        </div>
        <div className="input_form">
          <input type="password" placeholder=" password" />
          <KeyIcon className="KeyIcon" />
        </div>

        <input type="submit" value="Login" />
        <div className="form_redirection">
          Don’t Have an account{" "}
          <Link to="/farmer_signUpPage" className="link">
            Signup
          </Link>
        </div>
      </div>
    </form>
  );
}
