import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import { useForm } from "react-hook-form";
import SuperAdminLayout from "../../../component/layout/superAdminLayout/superAdminLayout";
import './adminRegister.scss'
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
    console.log( data)
  };

  return (
<SuperAdminLayout>
<div className="adminRegister">
      <div className="image_wrapper">
        <img src="/images/main-logo.png" alt="" className="header__logo" />
      </div>
      <div className="form_wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="form_title">Register</h1>
          <div className="form_field_wrapper">
            <div className="form_field ">
              {/* <label>First name</label> */}
              <input
                type="text"
                placeholder="Enter full name"
                {...register("fullName", {
                  required: "fullName is Required",
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
                placeholder="enter phone number"
                {...register("phone", {
                  required: "phone is Required",
                })}
              />
              {/* {errors?.lastName && (
              <span className="error-red">{errors.lastName.message}</span>
            )} */}
            </div>
          </div>
          <div className="form_field_wrapper">
          <div className="form_field">
            <input type="password" placeholder="password" {...register('password', {required:"please enter password"})}/>
            
          </div>
          <div className="form_field">
            <input type="password" placeholder="confirm password" {...register('confirmPassword', {required:"please enter password"})} />
          </div>
          </div>

 
          <div className="form_field">
            <input type="email" placeholder="Enter email" {...register('email', {required:"please enter a valid email"})}/>
          </div>
          <div className="form_field">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
</SuperAdminLayout>
    
  );
}
