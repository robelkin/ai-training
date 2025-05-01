import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import LockScreen from "../../components/auth/LockScreen";

const LockScreenPage = () => (
  <React.Fragment>
    <Helmet title="LockScreen" />
    <div className="text-center">
      <h1 className="h2">Welcome back, Chris!</h1>
      <p className="lead">Enter your password to continue</p>
    </div>

    <LockScreen />

    <div className="text-center">
      Not you? <Link to="/auth/sign-in">Sign out</Link>
    </div>
  </React.Fragment>
);

export default LockScreenPage;
