import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./Pages/Home";
import PostDetailPage from "./Pages/PostDetailPage";

const Routes = () => {

  return (
    <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Home" component={Home} exact />
          <Route path="/detailPage" component={PostDetailPage} />
        </Switch>
    </Router>
  );
};

export default Routes;
