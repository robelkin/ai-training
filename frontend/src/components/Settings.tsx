import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Alert, Button, Row, Col } from "react-bootstrap";

import { Sliders, BookOpen } from "lucide-react";

import {
  SIDEBAR_POSITION,
  SIDEBAR_BEHAVIOR,
  SIDEBAR_THEME,
  LAYOUT,
  BS_THEME,
} from "../constants";
import useOuterClick from "../hooks/useOuterClick";
import useTheme from "../hooks/useTheme";
import useSidebar from "../hooks/useSidebar";
import useLayout from "../hooks/useLayout";

const themeOptions = [
  {
    name: "Default",
    value: {
      bsTheme: BS_THEME.LIGHT,
      sidebarTheme: SIDEBAR_THEME.DARK,
    },
  },
  {
    name: "Colored",
    value: {
      bsTheme: BS_THEME.LIGHT,
      sidebarTheme: SIDEBAR_THEME.COLORED,
    },
  },
  {
    name: "Dark",
    value: {
      bsTheme: BS_THEME.DARK,
      sidebarTheme: SIDEBAR_THEME.DARK,
    },
  },
  {
    name: "Light",
    value: {
      bsTheme: BS_THEME.LIGHT,
      sidebarTheme: SIDEBAR_THEME.LIGHT,
    },
  },
];

const sidebarPositionOptions = [
  {
    name: "Left",
    value: SIDEBAR_POSITION.LEFT,
  },
  {
    name: "Right",
    value: SIDEBAR_POSITION.RIGHT,
  },
];

const sidebarBehaviorOptions = [
  {
    name: "Sticky",
    value: SIDEBAR_BEHAVIOR.STICKY,
  },
  {
    name: "Fixed",
    value: SIDEBAR_BEHAVIOR.FIXED,
  },
  {
    name: "Compact",
    value: SIDEBAR_BEHAVIOR.COMPACT,
  },
];

const layoutOptions = [
  {
    name: "Fluid",
    value: LAYOUT.FLUID,
  },
  {
    name: "Boxed",
    value: LAYOUT.BOXED,
  },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Settings = () => {
  const query = useQuery();
  const [isOpen, setIsOpen] = useState(false);

  const { bsTheme, setBsTheme } = useTheme();
  const { position, setPosition, behavior, setBehavior, theme, setTheme } =
    useSidebar();
  const { layout, setLayout } = useLayout();

  const innerRef = useOuterClick(() => {
    setIsOpen(false);
  });

  const setSettingByQueryParam = (name: string, set: any) => {
    const value = query.get(name);
    if (value) {
      set(value);
    }
  };

  // Read from query parameter (e.g. ?theme=dark)
  // only for demo purposes
  useEffect(() => {
    setSettingByQueryParam("bsTheme", setBsTheme);
    setSettingByQueryParam("sidebarPosition", setPosition);
    setSettingByQueryParam("sidebarBehavior", setBehavior);
    setSettingByQueryParam("sidebarTheme", setTheme);
    setSettingByQueryParam("layout", setLayout);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={innerRef}
      className={`settings js-settings ${isOpen ? "open" : ""}`}
    >
      <div className="settings-toggle">
        <div
          className="settings-toggle-option settings-toggle-option-text js-settings-toggle"
          title="Theme Builder"
          onClick={() => setIsOpen(true)}
        >
          <Sliders className="lucide align-middle" /> Builder
        </div>
        <a
          className="settings-toggle-option"
          title="Documentation"
          href="/docs/introduction"
          target="_blank"
        >
          <BookOpen className="lucide align-middle" />
        </a>
      </div>
      <div className="settings-panel">
        <div className="settings-content">
          <div className="settings-title d-flex align-items-center">
            <button
              type="button"
              className="btn-close float-right js-settings-toggle"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
            ></button>
            <h4 className="mb-0 ms-2 d-inline-block">Theme Builder</h4>
          </div>
          <div className="settings-body">
            <Alert variant="primary">
              <div className="alert-message">
                <strong>Hey there!</strong> Set your own customized style below.
                Choose the ones that best fits your needs.
              </div>
            </Alert>

            <div className="mb-3">
              <span className="d-block font-size-lg fw-bold">Color scheme</span>
              <span className="d-block text-muted mb-2">
                The perfect color mode for your app.
              </span>
              <Row className="g-0 text-center mx-n1 mb-2">
                {themeOptions.map(({ name, value }) => (
                  <Col xs={6} key={`${value.bsTheme}${value.sidebarTheme}`}>
                    <label className="mx-1 d-block mb-1">
                      <input
                        className="settings-scheme-label"
                        type="radio"
                        name="theme"
                        checked={
                          bsTheme === value.bsTheme &&
                          theme === value.sidebarTheme
                        }
                        onChange={() => {
                          setBsTheme(value.bsTheme);
                          setTheme(value.sidebarTheme);
                        }}
                      />
                      <div className="settings-scheme">
                        <div
                          className={`settings-scheme-theme settings-scheme-theme-${name.toLowerCase()}`}
                        ></div>
                      </div>
                    </label>
                    {name}
                  </Col>
                ))}
              </Row>
            </div>
            <hr />
            <div className="mb-3">
              <span className="d-block font-size-lg fw-bold">
                Sidebar position
              </span>
              <span className="d-block text-muted mb-2">
                Toggle the position of the sidebar.
              </span>
              <div>
                {sidebarPositionOptions.map(({ name, value }) => (
                  <label className="me-1" key={value}>
                    <input
                      className="settings-button-label"
                      type="radio"
                      name="sidebarPosition"
                      value={value}
                      checked={position === value}
                      onChange={() => setPosition(value)}
                    />
                    <div className="settings-button">{name}</div>
                  </label>
                ))}
              </div>
            </div>
            <hr />
            <div className="mb-3">
              <span className="d-block font-size-lg fw-bold">
                Sidebar behavior
              </span>
              <span className="d-block text-muted mb-2">
                Change the behavior of the sidebar.
              </span>
              <div>
                {sidebarBehaviorOptions.map(({ name, value }) => (
                  <label className="me-1" key={value}>
                    <input
                      className="settings-button-label"
                      type="radio"
                      name="sidebarBehavior"
                      value={value}
                      checked={behavior === value}
                      onChange={() => setBehavior(value)}
                    />
                    <div className="settings-button">{name}</div>
                  </label>
                ))}
              </div>
            </div>
            <hr />
            <div className="mb-3">
              <span className="d-block font-size-lg fw-bold">Layout</span>
              <span className="d-block text-muted mb-2">
                Toggle container layout system.
              </span>
              <div>
                {layoutOptions.map(({ name, value }) => (
                  <label className="me-1" key={value}>
                    <input
                      className="settings-button-label"
                      type="radio"
                      name="layout"
                      value={value}
                      checked={layout === value}
                      onChange={() => setLayout(value)}
                    />
                    <div className="settings-button">{name}</div>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="settings-footer">
            <div className="d-grid">
              <Button
                as="a"
                rel="noreferrer"
                href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
                target="_blank"
                variant="primary"
                size="lg"
              >
                Purchase
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
