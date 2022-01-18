import React from "react";
import MainLayout from "./components/layout/MainLayout";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home/Home";
import Graph from "./pages/graph/Graph";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <React.Fragment>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/graphs" exact component={Graph} />
          <Route path="/not-found" exact component={NotFound} />
          <Redirect to="/not-found" from="*" />
        </Switch>
      </MainLayout>
    </React.Fragment>
  );
}

export default App;
