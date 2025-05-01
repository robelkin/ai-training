import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Main from "../components/Main";

interface LandingProps {
  children?: ReactNode;
}

const Landing: React.FC<LandingProps> = ({ children }) => (
  <Main>
    {children}
    <Outlet />
  </Main>
);

export default Landing;
