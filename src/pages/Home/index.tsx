import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Button } from "reactstrap";
import { getMaster } from "../../service/masterService";
import Page from "../../components/Page";
import "./Home.css";
import { useSide } from "../../providers/SideProvider";

const Home: React.FC<RouteComponentProps> = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const { setName } = useSide();

    const fetchMaster = () => {
        setIsLoading(true);
        getMaster()
            .then((data) => setName(data.name))
            .then(() => {
                props.history.push("/side");
            });
    };

    return (
        <Page isLoading={isLoading}>
            <div className="Home" data-testid="homeComponente">
                <div className="welcome">
                    <span>Welcome to </span>
                    <b>iClinic</b>
                </div>
                <p className="challenge">FRONTEND CHALLENGE</p>
                <Button
                    onClick={fetchMaster}
                    className="button-start"
                    disabled={isLoading}
                >
                    START
                </Button>
            </div>
        </Page>
    );
};

export default Home;
