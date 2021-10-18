import React, { useContext, useRef } from "react";
import { Spin } from "antd";
import ReactToPrint from "react-to-print";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkform from "../components/checkform";
import Nwerequest from "../screens/new_request";
import User from "../components/user";
import Menu from "./Menu";
import ListOfreq from "./ListOfreq";
import Location from "../components/Location";
import Users from "./ListOfUsers";
import Categoris from "../components/Categoris";
import Setings from "../components/Setings";
import Affiliation from "../components/Affiliation";
import SendMassege from "../components/SendMassege";
import Adduser from "../components/Adduser";
import Statistics from "../screens/Statistics";
import DataContext from "../DataContext";

const ContrulScreen = ({ dir }) => {
  const defullang = useContext(DataContext).lang;
  const ticketlist = useContext(DataContext).ticketlist;
  const masof = useContext(DataContext).masof;
  const componentRef = useRef();

  return (
    <Router>
      <Menu dir={dir} />
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
          {ticketlist && defullang ? (
            <ListOfreq repeatedtask={false} />
          ) : (
            <Spin size="large" />
          )}
        </Route>
        <Route path="/Repeatedtask">
          {ticketlist && defullang ? (
            <ListOfreq Repeatedtask={true} />
          ) : (
            <Spin size="large" />
          )}
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
        {masof ? (
          <Route path="/categoris">
            <Categoris />
          </Route>
        ) : (
          <Spin size="large" />
        )}

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
        <Route path="/Statistics">
          <ReactToPrint
            trigger={() => (
              <button className="pribtpdf">
                <AiOutlineFilePdf />
              </button>
            )}
            content={() => componentRef.current}
          />
          <Statistics ref={componentRef} />
        </Route>
      </Switch>
    </Router>
  );
};

export default ContrulScreen;
