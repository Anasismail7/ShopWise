import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs"; // Import Breadcrumbs component

const Login = () => {
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Pages", path: "/" },
  ];

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const onSubmit = (values, actions) => {
    // Handle form submission here
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} pageTitle="Login" />
      <div className="login-container">
        <h3>Login</h3>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <Field type="email" name="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <Field type="password" name="password" placeholder="Password" />
              </div>
              <div className="form-group password">
                <label>
                  <Field
                    type="checkbox"
                    name="rememberMe"
                    className="custom-checkbox"
                  />
                  <span className="checkmark"></span>
                  <span className="check-doc">Remember me</span>
                </label>
                <div className="form-group forgot">
                  <Link to={"/forgot-password"}>Forgot password?</Link>
                </div>
              </div>

              <div className="form-group">
                <button
                  className="btn login"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Log In
                </button>
              </div>
              <span className="break">OR</span>
              <div className="form-group login">
                <button className="btn-facebook" type="button">
                  <FaFacebookF /> Facebook
                </button>
                <button className="btn-google" type="button">
                  <TfiGoogle /> Google
                </button>
              </div>
              <div className="form-group create-acc ">
                <span>Don't have an account?</span>{" "}
                <Link to={"/signup"}>Sign up now</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
