import React, { Suspense, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Home, LayoutGrid, List } from "lucide-react";

import Wrapper from "../components/Wrapper";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/Main";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Settings from "../components/Settings";
import Loader from "../components/Loader";
import { SidebarItemsType } from "../types/sidebar";

interface DashboardProps {
  children?: ReactNode;
}

// Define the Example Layouts item separately for clarity
const exampleLayoutsItem: SidebarItemsType = {
  href: "/navigation",
  icon: LayoutGrid,
  title: "Example Layouts",
};

const sidebarNavigation: { title: string; pages: SidebarItemsType[] }[] = [
  {
    title: "",
    pages: [
      {
        href: "/",
        icon: Home,
        title: "Home",
      },
    ],
  },
  {
    title: "Examples",
    pages: [
      {
        href: "/examples/tasks/list",
        title: "Task List",
        icon: List,
      },
    ],
  },
  {
    title: "Reference",
    pages: [
      exampleLayoutsItem,
    ],
  },
];

const Dashboard: React.FC<DashboardProps> = ({ children }) => (
  <React.Fragment>
    <Wrapper>
      <Sidebar items={sidebarNavigation} />
      <Main>
        <Navbar />
        <Content>
          <Suspense fallback={<Loader />}>
            {children}
            <Outlet />
          </Suspense>
        </Content>
        <Footer />
      </Main>
    </Wrapper>
  </React.Fragment>
);

export default Dashboard;
