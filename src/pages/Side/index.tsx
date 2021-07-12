import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Button } from "reactstrap";
import Page from "../../components/Page";
import dark from "../../images/darth-vader.png";
import light from "../../images/luke-skywalker.png";
import { useSide } from "../../providers/SideProvider";
import { getMaster } from "../../service/masterService";
import "./Side.css";

const Side: React.FC<RouteComponentProps> = ({ history }) => {
    const { name, setName } = useSide();
    const [isLoading, setIsLoading] = useState(false);

    const handleBack = () => {
        setName("");
        history.goBack();
    };

    const parseSide = () => {
        return name === "Darth Vader" ? "dark" : "light";
    };

    useEffect(() => {
        if (name === "") history?.push("/");
    }, [name, history]);

    const fetchMaster = () => {
        setIsLoading(true);
        getMaster()
            .then((data) => setName(data.name))
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Page isLoading={isLoading}>
            <div
                className={`side side-${parseSide()}`}
                data-testid="sideComponente"
            >
                <Button
                    className="button-back"
                    color="link"
                    onClick={handleBack}
                >
                    <i className="fas fa-arrow-left" />
                    <span>back</span>
                </Button>
                <Button
                    onClick={fetchMaster}
                    className="button-restart"
                    disabled={isLoading}
                >
                    choose your path again, Padawan
                </Button>
                {parseSide() === "dark" ? (
                    <img className="img-fluid" src={dark} alt="master" />
                ) : (
                    <img className="img-fluid" src={light} alt="master" />
                )}
                <div className="master">
                    <span>Your master is </span>
                    <b>{name}</b>
                </div>
            </div>
        </Page>
    );
};

export default Side;
