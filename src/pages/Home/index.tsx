import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Button } from "reactstrap";
import Page from "../../components/Page";
import "./Home.css";

const Home: React.FC<RouteComponentProps> = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Page isLoading={isLoading}>
      <div className="Home">
        <div className="welcome">
          <span>Welcome to </span>
          <b>iClinic</b>
        </div>
        <p className="challenge">FRONTEND CHALLENGE</p>
        <Button className="button-start">START</Button>
      </div>
    </Page>
  );
};

export default Home;
