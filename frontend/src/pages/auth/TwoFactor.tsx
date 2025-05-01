import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import TwoFactor from "../../components/auth/TwoFactor";

const TwoFactorPage = () => (
  <React.Fragment>
    <Helmet title="TwoFactor" />
    <div className="text-center">
      <h1 className="h2">Verify your email</h1>
      <p className="lead">
        Please enter the 6 digit code sent to{" "}
        <strong>chris.wood@gmail.com</strong>
      </p>
    </div>

    <TwoFactor />

    <div className="text-center">
      Didn't receive a code? <Link to="/auth/2fa">Resend</Link>
    </div>
  </React.Fragment>
);

export default TwoFactorPage;
