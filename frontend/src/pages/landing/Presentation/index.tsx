import React, { useEffect } from "react";

import {
  SIDEBAR_POSITION,
  SIDEBAR_BEHAVIOR,
  SIDEBAR_THEME,
  LAYOUT,
  BS_THEME,
} from "../../../constants";

import useTheme from "../../../hooks/useTheme";
import useSidebar from "../../../hooks/useSidebar";
import useLayout from "../../../hooks/useLayout";

import Navigation from "./Navigation";
import Intro from "./Intro";
import Demos1 from "./Demos1";
import Demos2 from "./Demos2";
import Integrations from "./Integrations";
import Testimonials from "./Testimonials";
import Features from "./Features";
import Faq from "./Faq";
import Cta from "./Cta";

const Presentation = () => {
  const { setBsTheme } = useTheme();
  const { setPosition, setBehavior, setTheme } = useSidebar();
  const { setLayout } = useLayout();

  useEffect(() => {
    setBsTheme(BS_THEME.LIGHT);
    setTheme(SIDEBAR_THEME.DARK);
    setPosition(SIDEBAR_POSITION.LEFT);
    setBehavior(SIDEBAR_BEHAVIOR.STICKY);
    setLayout(LAYOUT.FLUID);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Navigation />
      <Intro />
      <Demos1 />
      <Integrations />
      <Testimonials />
      <Demos2 />
      <Features />
      <Faq />
      <Cta />
    </React.Fragment>
  );
};

export default Presentation;
