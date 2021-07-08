import React from "react";
import { RouteComponentProps } from "react-router-dom";

const Home: React.FC<RouteComponentProps> = ({ location, history }) => {
  return <h1>Home</h1>;
};

export default Home;
