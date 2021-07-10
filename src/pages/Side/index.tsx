import React, { useState } from "react";
import { Button } from "reactstrap";
import Page from "../../components/Page";
import darth from "../../images/darth-vader.png";
import luck from "../../images/luke-skywalker.png";
import "./Side.css";

const Side: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Page isLoading={isLoading}>
      <Button className="button-back" color="link">
        <i className="fas fa-arrow-left" />
        <span>back</span>
      </Button>
      <Button className="button-restart">
        choose your path again, Padawan
      </Button>
      <img src={darth} alt="master" />
      <div className="master">
        <span>Your master is </span>
        <b>Darth Vader</b>
      </div>
    </Page>
  );
};

export default Side;
