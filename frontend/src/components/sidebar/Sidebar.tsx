import React from "react";

import PerfectScrollbar from "react-perfect-scrollbar";

import useSidebar from "../../hooks/useSidebar";
import SidebarFooter from "./SidebarFooter";
import SidebarNav from "./SidebarNav";
import Logo from "../../assets/img/logo.svg?react";

import { SidebarItemsType } from "../../types/sidebar";

interface SidebarProps {
  items: {
    title: string;
    pages: SidebarItemsType[];
  }[];
  open?: boolean;
  showFooter?: boolean;
}

const Sidebar = ({ items, showFooter = true }: SidebarProps) => {
  const { isOpen } = useSidebar();

  return (
    <nav className={`sidebar ${!isOpen ? "collapsed" : ""}`}>
      <div className="sidebar-content">
        <PerfectScrollbar>
          <a className="sidebar-brand" href="/">
            <Logo /> <span className="align-middle me-3">AI Learning</span>
          </a>

          <SidebarNav items={items} />
        </PerfectScrollbar>
      </div>
    </nav>
  );
};

export default Sidebar;
