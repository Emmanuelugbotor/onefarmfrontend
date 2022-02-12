import { NavLink } from "react-router-dom";
import "./FormLeft.scss";
export default function FormLeft() {
  
  return (
    <div className="login_left">
      <NavLink className="login_logo" to={"/"} >
        <img src="/images/main-logo.png" alt="" />
      </NavLink>
      <div className="login_person">
        <img src="/images/farmer-login.png" alt="" />
      </div>
    </div>
  );
}
