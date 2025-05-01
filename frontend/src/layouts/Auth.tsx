import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Settings from "../components/Settings";

interface AuthProps {
  children?: ReactNode;
}

const Auth: React.FC<AuthProps> = ({ children }) => (
  <React.Fragment>
    <div className="auth-full-page d-flex">
      <div className="auth-form p-3">
        {children}
        <Outlet />
      </div>
    </div>
  </React.Fragment>
);

export default Auth;
