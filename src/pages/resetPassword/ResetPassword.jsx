import React, { useState } from "react";
import { List, ListItem, TextField, Button } from "@mui/material";
import "../forgetPassword/forgetPassword.scss";
import { Link } from "react-router-dom";
import FormLeft from "../../component/formLeft/FormLeft";
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from "notistack";

function ResetPassword() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  // function handleSubmit(e) {
  //   e.preventDefault();
  // }
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const onSubmit = (data) => {
    console.log(data);
    enqueueSnackbar("reset password sent", { variant: "success" });
  };

  return (
    <div className="forgetPassword">
      <FormLeft />
      <div className="forgetPassword_right">
        <div className="image_container">
          <Link className="login_logo" to={"/"}>
            <img src="/images/main-logo.png" alt="" />
          </Link>
        </div>
        <form
          className="forgetPassword_right_main"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="title">Confirm Password</div>
          <p>
            Update your account with a unique password and password and confirm
            password should be the same
          </p>
          <List>
            <ListItem>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 6,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="password"
                    label="Password"
                    inputProps={{ type: "password" }}
                    error={Boolean(errors.password)}
                    helperText={
                      errors.password
                        ? errors.password.type === "minLength"
                          ? "password length is more 5 character"
                          : "password is required"
                        : ""
                    }
                    {...field}
                    style={{ color: "red", fontSize: "2rem" }}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="confirmPassword"
                defaultValue=""
                control={control}
                rules={{
                  required: true,
                  minLength: 6,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="confirmPassword"
                    label="Confirm Password"
                    inputProps={{ type: "password" }}
                    error={Boolean(errors.confirmPassword)}
                    helperText={
                      errors.confirmPassword
                        ? errors.confirmPassword.type === "minLength"
                          ? "confirm password length is more 5 character"
                          : "confirm password is required"
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
                Update
              </Button>
            </ListItem>
          </List>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
