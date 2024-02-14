import {
  Button,
  ButtonBase,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import LoginForm from "./LoginForm.jsx";

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        gender: "",
        location: "",
        role: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email()
          .trim()
          .required("Email is required.")
          .max(25, "Email must be within 25 characters."),
        firstName: Yup.string()
          .trim()
          .required("First name is required.")
          .max(20, "First name must be within 20 Characters."),
        lastName: Yup.string()
          .trim()
          .required("Last name is required.")
          .max(20, "Last name must be within 20 Characters."),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum."),
        confirmPassword: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum."),
        gender: Yup.string().oneOf(["Male", "Female", "Others"]),
        location: Yup.string().trim().required("Location is required."),
        role: Yup.string().trim().required("Role must be declared."),
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
            Register
          </Typography>

          {/* Email         */}
          <FormControl>
            <TextField
              label="Email"
              {...formik.getFieldProps("email")}
            ></TextField>
            {formik.touched.email && formik.errors.email ? (
              <FormHelperText error>{formik.errors.email}</FormHelperText>
            ) : null}
          </FormControl>

          {/* First Name */}
          <FormControl>
            <TextField
              label="First Name"
              {...formik.getFieldProps("firstName")}
            ></TextField>
            {formik.touched.firstName && formik.errors.firstName ? (
              <FormHelperText error>{formik.errors.firstName}</FormHelperText>
            ) : null}
          </FormControl>

          {/* Last Name */}
          <FormControl>
            <TextField
              label="Last Name"
              {...formik.getFieldProps("lastName")}
            ></TextField>
            {formik.touched.lastName && formik.errors.lastName ? (
              <FormHelperText error>{formik.errors.lastName}</FormHelperText>
            ) : null}
          </FormControl>

          {/* Password */}
          <FormControl>
            <TextField
              label="Password"
              {...formik.getFieldProps("password")}
            ></TextField>
            {formik.touched.password && formik.errors.password ? (
              <FormHelperText error>{formik.errors.password}</FormHelperText>
            ) : null}
          </FormControl>

          {/* Confirm Password */}
          <FormControl>
            <TextField
              label="Confirm Password"
              {...formik.getFieldProps("confirmPassword")}
            ></TextField>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <FormHelperText error>
                {formik.errors.confirmPassword}
              </FormHelperText>
            ) : null}
          </FormControl>

          {/* Gender */}
          <FormControl>
            <Field
              type="Gender"
              as="select"
              {...formik.getFieldProps("gender")}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </Field>

            {/* <TextField
              label="Gender"
              {...formik.getFieldProps("gender")}
            ></TextField>
            {formik.touched.gender && formik.errors.gender ? (
              <FormHelperText error>{formik.errors.gender}</FormHelperText>
            ) : null} */}
          </FormControl>

          {/* Location */}
          <FormControl>
            <TextField
              label="Location"
              {...formik.getFieldProps("location")}
            ></TextField>
            {formik.touched.location && formik.errors.location ? (
              <FormHelperText error>{formik.errors.location}</FormHelperText>
            ) : null}
          </FormControl>

          {/* Role */}
          <FormControl>
            <TextField
              label="Role"
              {...formik.getFieldProps("role")}
            ></TextField>
            {formik.touched.role && formik.errors.role ? (
              <FormHelperText error>{formik.errors.role}</FormHelperText>
            ) : null}
          </FormControl>

          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
          <Typography variant="body2" component="span" color={"black"}>
            Already registered? <a href="LoginForm.jsx">Login</a>
          </Typography>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
