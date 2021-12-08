import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { Header } from "../components/header";

const ListenerRoutes = [
  // <Route key={1} path="/" exact>
  //   <Podcasts />
  // </Route>,
  // <Route key={2} path="/podcasts/:id">
  //   <Episodes />
  // </Route>,
];
export const LoggedInRouter = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
    // <Router>
    //   <Switch>
    //     <Route></Route>
    //   </Switch>
    // </Router>
  );
};
