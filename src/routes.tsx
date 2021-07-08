import React from "react";

const Home = React.lazy(() => import("./pages/Home"));

const rotas = [{ path: "/", component: Home, exact: true }];

export default rotas;
