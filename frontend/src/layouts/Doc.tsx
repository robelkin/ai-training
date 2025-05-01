import React, { Suspense, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Wrapper from "../components/Wrapper";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/Main";
import NavbarMinimal from "../components/navbar/NavbarMinimal";
import Content from "../components/Content";
import Settings from "../components/Settings";
import Loader from "../components/Loader";

import docItems from "../components/sidebar/docItems";

interface DocProps {
  children?: ReactNode;
}

const Doc: React.FC<DocProps> = ({ children }) => (
  <React.Fragment>
    <Wrapper>
      <Sidebar items={docItems} showFooter={false} />
      <Main>
        <NavbarMinimal />
        <Content>
          <Suspense fallback={<Loader />}>
            {children}
            <Outlet />
          </Suspense>
        </Content>
      </Main>
    </Wrapper>
  </React.Fragment>
);

export default Doc;
