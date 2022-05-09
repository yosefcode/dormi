import React, { useState, useEffect } from "react";

import "./App.css";
import Login from "./screens/login";
import ContrulScreen from "./screens/ContrulScreen";
import { Language } from "./styelscomponents/Language";
import { ConfigProvider, message } from "antd";

import Menu from "./screens/Menu";
import { DataProvider } from "./DataContext";
import { PostToServer } from "./serveses";
import { Loginfunction } from "./components/Loginfanction";
import { onMessageListener } from "./firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Cookies from "universal-cookie";

function App() {
  const [data, setdata] = useState();
  const [lang, setlang] = useState();

  const [loginstatus, setloginstatus] = useState();
  const [masof, setmasof] = useState();
  const [ticketlist, setticketlist] = useState();
  const [ticketplanlist, setticketplanlist] = useState();
  const [dir, setsir] = useState("tlr");
  const [userlist, srtuserlist] = useState();
  const [filterserch, setfilterserch] = useState({
    categoris: false,
    location: false,
    user: false,
  });

  // console.log(ticketlist);
  const providerOptions = {
    filterserch,
    chanfefilter: (value) => {
      setfilterserch(value);
    },
    data,
    changdata: (value) => {
      setdata(value);
    },
    lang,
    changlang: (value) => {
      setlang(value);
    },
    loginstatus,
    changloginstatus: (value) => {
      setloginstatus(value);
    },
    masof,
    changmasof: (value) => {
      setmasof(value);
    },
    ticketlist,
    changeticketlist: (value) => {
      setticketlist(value);
    },
    ticketplanlist,
    changeticketplanlist: (value) => {
      setticketplanlist(value);
    },
    dir,
    changedir: (value) => {
      setsir(value);
    },
    userlist,
    changuserlist: (value) => {
      srtuserlist(value);
    },
  };

  const cookies = new Cookies();

  let getemailcookies = cookies.get("email");
  let getpascookies = cookies.get("pas");

  const defultlang = async () => {
    let ruter = "lang";
    let value = { lang: 1 };
    let res = await PostToServer(ruter, value);

    let logde = { logde: false };
    setloginstatus(logde);

    let obj = { lang: res, langid: 1 };
    setlang(obj);
  };

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

  const Logincheckstatus = async () => {
    if (cookies.get("aut") && getemailcookies) {
      setloginstatus({ logde: true });
      let values = {
        email: getemailcookies,
        pass: getpascookies,
      };

      let res = await Loginfunction(values);
      if (res.error === "1") {
        setloginstatus({ logde: false });
        defultlang();
      } else {
        let obj = {
          userid: res.changloginstatus.userid,
        };

        let ressult = await PostToServer("ticketlist", obj);

        setticketlist(ressult);
        let ressultticketplanlist = await PostToServer("ticketplanlist", obj);

        setticketplanlist(ressultticketplanlist);

        setloginstatus(res.changloginstatus);
        DirectionOfLang(res.changlang.langid);

        setlang(res.changlang);
        setmasof(res.changmasof);
        srtuserlist(res.changuserlist);
      }
    } else {
      defultlang();
    }
  };
  const [getmassege, setgetmassege] = useState();
  onMessageListener()
    .then((message) => {
      setgetmassege(message);
      message.success(message);
    })
    .catch((err) => console.log("failed: ", err));

  const Updetdata = async () => {
    // let obj = loginstatus;
    // debugger;
    let ressult = await PostToServer("ticketlist", {
      userid: loginstatus?.userid,
    });

    setticketlist(ressult);
    let ressultticketplanlist = await PostToServer("ticketplanlist", {
      userid: loginstatus?.userid,
    });

    setticketplanlist(ressultticketplanlist);
  };
  const [rebderfromlog, setrebderfromlog] = useState(false);
  const firstlogd = () => {
    setrebderfromlog(true);
  };
  useEffect(() => {
    if (!loginstatus) {
      Logincheckstatus();
    }
    Updetdata();
  }, [getmassege]);
  return (
    <div>
      <DataProvider value={providerOptions}>
        <Language Language={dir}>
          <Router>
            <ConfigProvider direction={dir}>
              {!loginstatus?.logde ? (
                <div>
                  {/* <Menu LoginScreen={true} /> */}
                  <Login firstlogd={firstlogd} />
                  {/* </Language> */}
                </div>
              ) : (
                <div>
                  <ContrulScreen dir={dir} rebderfromlog={rebderfromlog} />
                </div>
              )}
            </ConfigProvider>
          </Router>
        </Language>
      </DataProvider>
    </div>
  );
}

export default App;
