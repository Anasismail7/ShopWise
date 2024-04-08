import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import AxiosConfig from "../../../Axios/AxiosConfig";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

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

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    agreeToTerms: Yup.boolean()
      .oneOf([true], "You must agree to the terms and conditions")
      .required("You must agree to the terms and conditions"),
  });

  async function handleRegisterForm(values) {
    try {
      const res = await AxiosConfig({
        url: "/register",
        method: "POST",
        data: values,
      });
      toast.success("Success Register...");

      navigate("/login");
    } catch (err) {
      toast.error(err.response.data);
      console.log(err);
    }
  }

  const onSubmit = async (values, actions) => {
    handleRegisterForm(values);
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} pageTitle="Register" />
      <div className="register-container">
        <h3>Create An Account</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <Field type="text" name="name" placeholder="Enter your Name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error-message"
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
                <ErrorMessage
                  name="agreeToTerms"
                  component="div"
                  className="error-message"
                />
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
