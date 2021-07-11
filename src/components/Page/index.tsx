import React from "react";
import WithLoader from "../WithLoader";
import "./Page.css";

const Page: React.FC = ({ children }) => {
  return <div className="page">{children}</div>;
};

export default WithLoader(Page);
