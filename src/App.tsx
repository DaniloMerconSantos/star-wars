import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader";
import routes from "./routes";
import SideProvider from "./providers/SideProvider";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <SideProvider>
          <Router>
            <Switch>
              {routes.map((route) => (
                <Route {...route} key={route.path} />
              ))}
            </Switch>
          </Router>
        </SideProvider>
      </Suspense>
    </div>
  );
};

export default App;
