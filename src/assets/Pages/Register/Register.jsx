import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

const Register = () => {
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Pages", path: "/" },
  ];

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  };

  const onSubmit = (values, actions) => {
    // Handle form submission here
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} pageTitle="Register" />
      <div className="register-container">
        <h3>Create An Account</h3>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <Field type="text" name="name" placeholder="Enter your Name" />
              </div>
              <div className="form-group">
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="form-group">
                <Field type="password" name="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="form-group">
                <label>
                  <Field
                    type="checkbox"
                    name="agreeToTerms"
                    className="custom-checkbox"
                  />
                  <span className="checkmark"></span>
                  <span className="check-doc">I agree to terms & Policy</span>
                </label>
              </div>
              <div className="form-group">
                <button
                  className="btn register"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Register
                </button>
              </div>
              <span className="break">OR</span>
              <div className="form-group register">
                <button className="btn-facebook" type="button">
                  <FaFacebookF /> Facebook
                </button>
                <button className="btn-google" type="button">
                  <TfiGoogle /> Google
                </button>
              </div>
              <div className="form-group current-acc">
                <span>Already have an account?</span>{" "}
                <Link to="/login">Log in</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Register;
