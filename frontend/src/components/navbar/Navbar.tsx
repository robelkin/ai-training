import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Navbar, Nav, Form, InputGroup } from "react-bootstrap";

import {
  AlertCircle,
  Bell,
  BellOff,
  Home,
  MessageCircle,
  UserPlus,
  Search,
} from "lucide-react";

import useSidebar from "../../hooks/useSidebar";

import NavbarDropdown from "./NavbarDropdown";
import NavbarDropdownItem from "./NavbarDropdownItem";
import NavbarLanguages from "./NavbarLanguages";
import NavbarThemeToggle from "./NavbarThemeToggle";
import NavbarUser from "./NavbarUser";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../assets/img/avatars/avatar-5.jpg";

const notifications = [
  {
    type: "important",
    title: "Update completed",
    description: "Restart server 12 to complete the update.",
    time: "2h ago",
  },
  {
    type: "default",
    title: "Lorem ipsum",
    description: "Aliquam ex eros, imperdiet vulputate hendrerit et.",
    time: "6h ago",
  },
  {
    type: "login",
    title: "Login from 192.186.1.1",
    description: "",
    time: "6h ago",
  },
  {
    type: "request",
    title: "New connection",
    description: "Anna accepted your request.",
    time: "12h ago",
  },
];

const messages = [
  {
    name: "Ashley Briggs",
    avatar: avatar5,
    description: "Nam pretium turpis et arcu. Duis arcu tortor.",
    time: "15m ago",
  },
  {
    name: "Chris Wood",
    avatar: avatar1,
    description: "Curabitur ligula sapien euismod vitae.",
    time: "2h ago",
  },
  {
    name: "Stacie Hall",
    avatar: avatar4,
    description: "Pellentesque auctor neque nec urna.",
    time: "4h ago",
  },
  {
    name: "Bertha Martin",
    avatar: avatar3,
    description: "Aenean tellus metus, bibendum sed, posuere ac, mattis non.",
    time: "5h ago",
  },
];

const NavbarComponent = () => {
  const { t } = useTranslation();
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <Navbar variant="light" expand className="navbar-bg">
      <span
        className="sidebar-toggle d-flex"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <i className="hamburger align-self-center" />
      </span>

      <Navbar.Collapse>
        <Nav className="navbar-align">
          <NavbarDropdown
            header="New Messages"
            footer="Show all messages"
            icon={MessageCircle}
            count={messages.length}
            showBadge
          >
            {messages.map((item, key) => {
              return (
                <NavbarDropdownItem
                  key={key}
                  icon={
                    <img
                      className="avatar img-fluid rounded-circle"
                      src={item.avatar}
                      alt={item.name}
                    />
                  }
                  title={item.name}
                  description={item.description}
                  time={item.time}
                  spacing
                />
              );
            })}
          </NavbarDropdown>

          <NavbarThemeToggle />
          <NavbarUser />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
