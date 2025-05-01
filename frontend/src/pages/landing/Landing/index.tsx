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
import Features from "./Features";
import Demos from "./Demos";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Cta from "./Cta";
import Footer from "./Footer";

const Landing = () => {
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
      <Features />
      <Demos />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
