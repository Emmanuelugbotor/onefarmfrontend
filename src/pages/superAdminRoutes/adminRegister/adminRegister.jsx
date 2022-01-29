import "../adminLogin/login.scss";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import { useForm } from "react-hook-form";
export default function SuperRegisterPage() {
  const {
    handleSubmit,
    register,
    watch,
    // setError,
    // formState: { errors },
  } = useForm();
  //   handling the form data...
  const onSubmit = (data) => {
    console.log("data coming in froom the frntnd ", data);
  };

  return (
    <div className="adminLogin">
      <div className="image_wrapper">
        <img src="/images/main-logo.png" alt="" className="header__logo" />
      </div>
      <div className="form_wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="form_title">Login</h1>
          <div className="form_field">
            <input type="text" placeholder="Email" />
            <label htmlFor="">
              <PersonIcon className="icon" />
            </label>
          </div>
          <div className="form_field">
            <input type="email" name="" id="" placeholder="Email" />
            <label htmlFor="">
              <PersonIcon className="icon" />
              {/* <span>Email</span> */}
            </label>
          </div>
          <div className="form_field_wrapper">
            <div className="form_field ">
              {/* <label>First name</label> */}
              <input
                type="text"
                placeholder="Bryan"
                {...register("firstName", {
                  required: "First Name is Required",
                })}
              />
              {/* {errors?.firstName && (
              <span className="error-red">{errors.firstName.message}</span>
            )} */}
            </div>
            <div className="form_field">
              {/* <label>Last name</label> */}
              <input
                type="text"
                placeholder="Williams"
                {...register("lastName", {
                  required: "Last Name is Required",
                })}
              />
              {/* {errors?.lastName && (
              <span className="error-red">{errors.lastName.message}</span>
            )} */}
            </div>
          </div>
          <div className="form_field">
            <input type="password" name="" id="" placeholder="Password" />
            <label htmlFor="">
              <KeyIcon className="icon" />
              {/* <span>Password</span> */}
            </label>
          </div>
          <div className="form_field">
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
}
