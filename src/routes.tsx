import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const Side = React.lazy(() => import("./pages/Side"));

const rotas = [
  { path: "/", component: Home, exact: true },
  { path: "/Side", component: Side },
];

export default rotas;
