import React, { ReactNode } from "react";

interface WrapperProps {
  children?: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <div className="wrapper">{children}</div>
);

export default Wrapper;
