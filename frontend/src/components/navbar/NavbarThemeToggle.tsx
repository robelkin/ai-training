import React from "react";
import { Moon, Sun } from "lucide-react";
import { Nav } from "react-bootstrap";

import useTheme from "../../hooks/useTheme";
import useSidebar from "../../hooks/useSidebar";

const NavbarThemeToggle = () => {
  const { bsTheme, setBsTheme } = useTheme();
  const { setTheme } = useSidebar();

  const toggleTheme = () => {
    if (bsTheme === "dark") {
      setBsTheme("light");
      setTheme("dark");
    } else {
      setBsTheme("dark");
      setTheme("dark");
    }
  };

  return (
    <Nav.Link className="nav-icon me-2" onClick={toggleTheme}>
      {bsTheme === "dark" ? <Sun /> : <Moon />}
    </Nav.Link>
  );
};

export default NavbarThemeToggle;
