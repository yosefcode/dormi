import React, { useContext, useRef } from "react";

import ReactToPrint from "react-to-print";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkform from "../components/checkform";
import Nwerequest from "../screens/new_request";
import User from "./user";
import Menu from "./Menu";
import ListOfreq from "./ListOfreq";
import Location from "./Location";
import Users from "./ListOfUsers";
import Categoris from "./Categoris";
import Setings from "../components/Setings";
import Affiliation from "../components/Affiliation";
import SendMassege from "../components/SendMassege";
import Adduser from "../screens/Adduser";
import Statistics from "../screens/Statistics";
import DataContext from "../DataContext";
import Ticketlis from "../screens/Ticketlis";
import { FaSpinner } from "react-icons/fa";
import Forms from "./Forms";
import SendsForm from "./SendsForm";
const ContrulScreen = ({ dir }) => {
  const defullang = useContext(DataContext).lang;
  const ticketlist = useContext(DataContext).ticketlist;
  const masof = useContext(DataContext).masof;

  const componentRef = useRef();

  // useEffect(() => {}, [progres]);
  return (
    <Router>
      <Menu dir={dir} />
      <Switch>
        <Route path="/Users">
          {ticketlist && defullang ? (
            <User />
          ) : (
            <div>
              <img
                src="/images/Semdimag.png"
                className="lodingimage"
                alt="lodingimage"
              />
              <FaSpinner />
            </div>
          )}
        </Route>
        <Route path="/Checkform">
          <Checkform />
        </Route>
        <Route exact path="/">
          <Nwerequest />
        </Route>
        <Route path="/test">
          {ticketlist && defullang ? (
            <ListOfreq repeatedtask={false} />
          ) : (
            <div>
              <img
                src="/images/Semdimag.png"
                className="lodingimage"
                alt="lodingimage"
              />
              <FaSpinner />
            </div>
          )}
        </Route>

        <Route path="/ListOfreq">
          {ticketlist && defullang ? (
            <Ticketlis Repeatedtask={false} />
          ) : (
            <div>
              <img
                src="/images/Semdimag.png"
                className="lodingimage"
                alt="lodingimage"
              />
              <FaSpinner />
            </div>
          )}
        </Route>
        <Route path="/Repeatedtask">
          {ticketlist && defullang ? (
            <Ticketlis Repeatedtask={true} />
          ) : (
            <div>
              <img
                src="/images/Semdimag.png"
                className="lodingimage"
                alt="lodingimage"
              />
              <FaSpinner />
            </div>
          )}
        </Route>
        <Route path="/temmembertask">
          <Nwerequest Temmembertask={true} />
        </Route>
        <Route path="/location">
          <Location />
        </Route>
        <Route path="/list_users">
          {ticketlist && defullang ? (
            <Users />
          ) : (
            <div>
              <img
                src="/images/Semdimag.png"
                className="lodingimage"
                alt="lodingimage"
              />
              <FaSpinner />
            </div>
          )}
        </Route>
        {masof ? (
          <Route path="/categoris">
            <Categoris />
          </Route>
        ) : (
          <img
            src="/images/Semdimag.png"
            className="lodingimage"
            alt="lodingimage"
          />
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
        <Route path="/Forms">
          <Forms />
        </Route>
        <Route path="/SendsForm">
          <SendsForm />
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
