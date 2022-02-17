import "./login.scss";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import { useForm } from "react-hook-form";
import SuperAdminLayout from "../../../component/layout/superAdminLayout/superAdminLayout";
export default function SuperLoginPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <SuperAdminLayout>
      <div className="adminLogin">
        <div className="image_wrapper">
          <img src="/images/main-logo.png" alt="" className="header__logo" />
        </div>
        <div className="form_wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="form_title">Login</h1>

            <div className="form_field">
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: 'email is required',
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              <label htmlFor="">
                <PersonIcon className="icon" />
              </label>
            </div>
            {errors?.email && (
              <span className="error">{errors.email.message}</span>
            )}
            <div className="form_field">
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: 'password is required',
                  minLength: {
                    value: 6,
                    message: "password should be atleast six character",
                  },
                })}
              />
              <label htmlFor="">
                <KeyIcon className="icon" />
                {/* <span>Password</span> */}
              </label>
            </div>
            {errors?.password && (
              <span className="error">{errors.password.message}</span>
            )}
            <div className="form_field">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </SuperAdminLayout>
  );
}
