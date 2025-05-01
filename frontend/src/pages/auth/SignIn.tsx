import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import SignIn from "../../components/auth/SignIn";

const SignInPage = () => (
  <React.Fragment>
    <Helmet title="Sign In" />
    <div className="text-center mt-4">
      <h2>Welcome back!</h2>
      <p className="lead">Sign in to your account to continue</p>
    </div>

    <SignIn />
    <div className="text-center mt-3">
      Don't have an account? <Link to="/auth/sign-up">Sign up</Link>
    </div>
  </React.Fragment>
);

export default SignInPage;
