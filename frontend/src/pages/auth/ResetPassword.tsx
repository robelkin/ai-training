import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ResetPassword from "../../components/auth/ResetPassword";

const ResetPasswordPage = () => (
  <React.Fragment>
    <Helmet title="Reset Password" />
    <div className="text-center mt-4">
      <h1 className="h2">Reset password</h1>
      <p className="lead">Enter your email to reset your password.</p>
    </div>

    <ResetPassword />
    <div className="text-center mt-3">
      Don't have an account? <Link to="/auth/sign-up">Sign up</Link>
    </div>
  </React.Fragment>
);

export default ResetPasswordPage;
