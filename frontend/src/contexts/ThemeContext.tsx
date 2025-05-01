import React from "react";

import { BS_THEME } from "../constants";

const initialState = {
  bsTheme: BS_THEME.LIGHT,
  setBsTheme: (theme: string) => {},
};

const ThemeContext = React.createContext(initialState);

export default ThemeContext;
