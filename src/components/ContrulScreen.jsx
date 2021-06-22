import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkform from "./checkform";
import Nwerequest from "./new_request";
import User from "./user";
import Menu from "./Menu";
import ListOfreq from "./ListOfreq";
import Location from "./Location";
import Users from "./ListOfUsers";
import Categoris from "./Categoris";
import Setings from "./Setings";
const ContrulScreen = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/Users">
          <User />
        </Route>
        <Route path="/Checkform">
          <Checkform />
        </Route>
        <Route exact path="/">
          <Nwerequest />
        </Route>
        <Route path="/ListOfreq">
          <ListOfreq repeatedtask={false} />
        </Route>
        <Route path="/Repeatedtask">
          <ListOfreq Repeatedtask={true} />
        </Route>
        <Route path="/temmembertask">
          <Nwerequest Temmembertask={true} />
        </Route>
        <Route path="/location">
          <Location />
        </Route>
        <Route path="/list_users">
          <Users />
        </Route>
        <Route path="/categoris">
          <Categoris />
        </Route>
        <Route path="/setings">
          <Setings />
        </Route>
      </Switch>
    </Router>
  );
};

export default ContrulScreen;
