import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader";
import routes from "./routes";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            {routes.map((route) => (
              <Route {...route} key={route.path} />
            ))}
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
