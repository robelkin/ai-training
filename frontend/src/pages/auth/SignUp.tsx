import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import SignUp from "../../components/auth/SignUp";

const SignUpPage = () => (
  <React.Fragment>
    <Helmet title="Sign Up" />
    <div className="text-center mt-4">
      <h1 className="h2">Get started</h1>
      <p className="lead">
        Start creating the best possible user experience for you customers.
      </p>
    </div>

    <SignUp />
    <div className="text-center mt-3">
      Already have an account? <Link to="/auth/sign-in">Log in</Link>
    </div>
  </React.Fragment>
);

export default SignUpPage;
