import React, { useState, useEffect } from "react";

import "./App.css";
import Login from "./components/login";
import ContrulScreen from "./components/ContrulScreen";
import { Language } from "./styelscomponents/Language";

import Menu from "./components/Menu";
import { DataProvider } from "./DataContext";
import { PostToServer } from "./serveses";
import { Loginfunction } from "./components/Loginfanction";

import Cookies from "universal-cookie";

function App() {
  // context DataProvider
  const [data, setdata] = useState();
  const [lang, setlang] = useState();
  const [loginstatus, setloginstatus] = useState();
  const [masof, setmasof] = useState();
  const [ticketlist, setticketlist] = useState();
  const providerOptions = {
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
  };
  const cookies = new Cookies();
  console.log({ masof: masof, loginstatus: loginstatus, data: data });
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

  useEffect(async () => {
    if (cookies.get("aut")) {
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

        setloginstatus(res.changloginstatus);
        setlang(res.changlang);
        setmasof(res.changmasof);
      }
    } else {
      defultlang();
    }
  }, []);

  return (
    <div>
      <DataProvider value={providerOptions}>
        {!loginstatus?.logde ? (
          <div>
            <Language Language={"tlr"}>
              <Menu LoginScreen={true} />
              <Login />
            </Language>
          </div>
        ) : (
          <div>
            <ContrulScreen />
          </div>
        )}
      </DataProvider>
    </div>
  );
}

export default App;
