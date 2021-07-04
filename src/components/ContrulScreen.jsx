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
import { PostToServer } from "../serveses";
import DataContext from "../DataContext";

const ContrulScreen = () => {
  const data = useContext(DataContext).data;
  const defullang = useContext(DataContext).lang;
  const changlang = useContext(DataContext).changlang;

  const changdata = useContext(DataContext).changdata;
  const [dir, setsir] = useState("tlr");
  const DirectionOfLang = (languigtype) => {
    switch (languigtype) {
      case 2:
        setsir("rtl");
        break;
      case 5:
        setsir("rtl");
        break;
      default:
        setsir("tlr");
    }
  };
  useEffect(async () => {
    // let langugtypie = 2;
    DirectionOfLang(defullang.langid);

    // let ruter = "lang";
    // let value = { lang: langugtypie };
    // let res = await PostToServer(ruter, value);
    // let obj = { lang: res, langid: langugtypie };

    // changlang(obj);
  }, []);

  return (
    <Router>
      <Language Language={dir}>
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
