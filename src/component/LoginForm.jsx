import { Typography } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email()
          .trim()
          .required("Email is required.")
          .max(25, "Email must be within 25 characters."),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum."),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            gap: "1rem",
            boxShadow:
              " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
            margin: "5px 50px 75px 100px",
            width: "150%",
          }}
        >
          <Typography variant="h5" color="black">
            Login
          </Typography>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
