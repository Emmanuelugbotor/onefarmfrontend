import "./login.scss";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import SuperAdminLayout from "../../../component/layout/superAdminLayout/superAdminLayout";
export default function SuperLoginPage() {
  return (
    <SuperAdminLayout>
      <div className="adminLogin">
        <div className="image_wrapper">
          <img src="/images/main-logo.png" alt="" className="header__logo" />
        </div>
        <div className="form_wrapper">
          <form>
            <h1 className="form_title">Login</h1>
            <div className="form_field">
              <input type="email" name="" id="" placeholder="Email" />
              <label htmlFor="">
                <PersonIcon className="icon" />
                {/* <span>Email</span> */}
              </label>
            </div>
            <div className="form_field">
              <input type="password" name="" id="" placeholder="Password" />
              <label htmlFor="">
                <KeyIcon className="icon" />
                {/* <span>Password</span> */}
              </label>
            </div>
            <div className="form_field">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </SuperAdminLayout>
  );
}
