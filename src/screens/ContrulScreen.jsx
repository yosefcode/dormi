import React, { useContext, useRef } from "react";

import ReactToPrint from "react-to-print";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkform from "../components/checkform";
import Nwerequest from "../screens/new_request";
import User from "./user";
import Menu from "./Menu";

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
import Dasktopmenu from "./Dasktopmenu";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const ContrulScreen = ({ dir, rebderfromlog }) => {
  const defullang = useContext(DataContext).lang;
  const ticketlist = useContext(DataContext).ticketlist;
  const masof = useContext(DataContext).masof;
  const userlist = useContext(DataContext).userlist;
  const loginstatus = useContext(DataContext).loginstatus;
  let history = useHistory();

  const componentRef = useRef();

  return (
    <Router>
      <div className="controlscreendiv">
        <Menu dir={dir} />
        <div className="haderdesktop">
          <div className="avatar">
            <div className="userdata">
              <p id="usename">
                {loginstatus.firstname + " " + loginstatus.lastname}{" "}
              </p>
              <p>שם תוכנית </p>
            </div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="#EFF0F2" />
              <path
                d="M20.0001 9.58325C17.1328 9.58325 14.7917 11.9244 14.7917 14.7916C14.7917 17.6588 17.1328 19.9999 20.0001 19.9999C22.8673 19.9999 25.2084 17.6588 25.2084 14.7916C25.2084 11.9244 22.8673 9.58325 20.0001 9.58325ZM20.0001 11.1458C22.0229 11.1458 23.6459 12.7688 23.6459 14.7916C23.6459 16.8144 22.0229 18.4374 20.0001 18.4374C17.9773 18.4374 16.3542 16.8144 16.3542 14.7916C16.3542 12.7688 17.9773 11.1458 20.0001 11.1458ZM13.7389 22.0832C12.6036 22.0832 11.6667 23.0201 11.6667 24.1554V24.9478C11.6667 26.825 12.8539 28.2771 14.4306 29.147C16.0074 30.017 18.0043 30.4166 20.0001 30.4166C21.9959 30.4166 23.9928 30.017 25.5695 29.147C26.9139 28.4053 27.9258 27.22 28.2093 25.7291H28.3344V24.1554C28.3344 23.0201 27.3966 22.0832 26.2613 22.0832H13.7389ZM13.7389 23.6457H26.2613C26.552 23.6457 26.7719 23.8647 26.7719 24.1554V24.1666H26.7709V24.9478C26.7709 26.1957 26.07 27.0873 24.8147 27.7799C23.5595 28.4724 21.7803 28.8541 20.0001 28.8541C18.2198 28.8541 16.4407 28.4724 15.1854 27.7799C13.9301 27.0873 13.2292 26.1957 13.2292 24.9478V24.1554C13.2292 23.8647 13.4482 23.6457 13.7389 23.6457Z"
                fill="#1C1547"
                // fill-opacity="0.47"
                fillOpacity="0.47"
              />
            </svg>
          </div>
        </div>

        <div className="nav">
          <Dasktopmenu dir={dir} />
        </div>

        <div className="continer">
          <Switch>
            <Route path="/Users">
              {ticketlist && defullang && userlist ? (
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
              <div className="loginphone">
                <Nwerequest />
              </div>
              <div className="logidesktop">
                <Ticketlis Repeatedtask={false} />
              </div>
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
              {ticketlist && defullang ? (
                <Location />
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
            <Route path="/list_users">
              {defullang && userlist ? (
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
                {ticketlist && defullang ? (
                  <Categoris />
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
        </div>
      </div>
    </Router>
  );
};

export default ContrulScreen;
