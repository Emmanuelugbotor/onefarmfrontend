import React, { useState } from "react";
import { List, ListItem, TextField, Button } from "@mui/material";
import "./forgetPassword.scss";
import { Link } from "react-router-dom";
import FormLeft from "../../component/formLeft/FormLeft";
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from "notistack";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = ({ email }) => {
    setEmail(email);
    setConfirm(!confirm);
    enqueueSnackbar("reset details have been sent to the affected email", {
      variant: "success",
    });
  };
  function handleResend(e) {
    e.preventDefault();
  }
  return (
    <div className="forgetPassword">
      <FormLeft />
      <div className="forgetPassword_right">
        <div className="image_container">
          <Link className="login_logo" to={"/"}>
            <img src="/images/main-logo.png" alt="" />
          </Link>
        </div>
        {!confirm ? (
          <form
            className="forgetPassword_right_main"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="title">Reset Password</div>
            <p>Reset your password by providing your account email below</p>
            <List>
              <ListItem>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  }}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="email"
                      label="Email"
                      inputProps={{ type: "email" }}
                      error={Boolean(errors.email)}
                      helperText={
                        errors.email
                          ? errors.email.type === "pattern"
                            ? "email is not valid"
                            : "email is required"
                          : ""
                      }
                      {...field}
                      style={{ color: "red", fontSize: "2rem" }}
                    ></TextField>
                  )}
                ></Controller>
              </ListItem>
              <ListItem>
                <Button
                  variant="contained"
                  type="submit"
                  // color="inherit"
                  style={{ background: "purple", borderRadius: "1rem" }}
                >
                  Next
                </Button>
              </ListItem>
            </List>
          </form>
        ) : (
          <form
            onSubmit={(e) => handleResend(e)}
            className="resend_forget_password"
          >
            <div className="title">Check your email</div>
            <p>
              You'll receive a link in the email you supplied that will enable
              you to reset your account password.
            </p>
            {email && <span>{email}</span>}

            <p>
              If you don't see the email, check other places it might be, like
              your junk, spam, social, or other folders.
            </p>
            <List>
              <ListItem>
                <Button
                  variant="contained"
                  type="submit"
                  style={{ padding: "2rem", borderRadius: "1rem" }}
                >
                  Resend Email
                </Button>
              </ListItem>
            </List>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgetPassword;
