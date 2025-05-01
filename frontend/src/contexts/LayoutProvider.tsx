import React from "react";

import { LAYOUT } from "../constants";
import useSettingsState from "../hooks/useSettingsState";

import LayoutContext from "./LayoutContext";

interface LayoutProviderType {
  children: React.ReactNode;
}

function LayoutProvider({ children }: LayoutProviderType) {
  const [layout, setLayout] = useSettingsState("layout", LAYOUT.FLUID);

  return (
    <LayoutContext.Provider
      value={{
        layout,
        setLayout,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutProvider;
