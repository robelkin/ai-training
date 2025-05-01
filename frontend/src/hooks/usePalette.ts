import { useState, useEffect } from "react";

import {
  BS_THEME,
  THEME_PALETTE_LIGHT,
  THEME_PALETTE_DARK,
} from "../constants";

import useTheme from "./useTheme";

const usePalette = () => {
  const { bsTheme } = useTheme();

  const [palette, setPalette] = useState(THEME_PALETTE_LIGHT);

  useEffect(() => {
    if (bsTheme === BS_THEME.DARK) {
      setPalette(THEME_PALETTE_DARK);
    } else {
      setPalette(THEME_PALETTE_LIGHT);
    }
  }, [bsTheme]);

  return palette;
};

export default usePalette;
