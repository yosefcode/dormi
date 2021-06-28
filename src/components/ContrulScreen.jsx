import React, { useState, useEffect, useContext } from "react";

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
import Affiliation from "./Affiliation";
import SendMassege from "./SendMassege";
import Adduser from "./Adduser";
import { Language } from "../styelscomponents/Language";
import { GettLangfromServer } from "../serveses";
import DataContext from "../DataContext";

const ContrulScreen = () => {
  const data = useContext(DataContext).data;
  const defullang = useContext(DataContext).lang;
  const changlang = useContext(DataContext).changlang;

  const changdata = useContext(DataContext).changdata;
  useEffect(async () => {
    let languigtype = 2;

    let res = await GettLangfromServer(languigtype);
    // defullang.lang = res;
    let obj = { lang: res, langid: languigtype };

    changlang(obj);
  }, []);
  let direction = "rtl";

  return (
    <Router>
      <Language Language={direction}>
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
          <Route path="/Affiliation">
            <Affiliation />
          </Route>
          <Route path="/SendMassege">
            <SendMassege />
          </Route>

          <Route path="/Adduser">
            <Adduser />
          </Route>
        </Switch>
      </Language>
    </Router>
  );
};

export default ContrulScreen;
