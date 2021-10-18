import React, { useState, useEffect } from "react";

import "./App.css";
import Login from "./screens/login";
import ContrulScreen from "./screens/ContrulScreen";
import { Language } from "./styelscomponents/Language";
import { ConfigProvider } from "antd";
import Menu from "./screens/Menu";
import { DataProvider } from "./DataContext";
import { PostToServer } from "./serveses";
import { Loginfunction } from "./components/Loginfanction";
import { onMessageListener } from "./firebase";

import Cookies from "universal-cookie";

function App() {
  const [data, setdata] = useState();
  const [lang, setlang] = useState();

  const [loginstatus, setloginstatus] = useState();
  const [masof, setmasof] = useState();
  const [ticketlist, setticketlist] = useState();
  const [dir, setsir] = useState("tlr");
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
    dir,
    changedir: (value) => {
      setsir(value);
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

        setloginstatus(res.changloginstatus);
        DirectionOfLang(res.changlang.langid);

        setlang(res.changlang);
        setmasof(res.changmasof);
      }
    } else {
      defultlang();
    }
  };
  const [getmassege, setgetmassege] = useState();
  onMessageListener()
    .then((message) => {
      setgetmassege(message);
      console.log("notification masege", message);
    })
    .catch((err) => console.log("failed: ", err));

  const Updetdata = async () => {
    // let obj = loginstatus;
    // debugger;
    let ressult = await PostToServer("ticketlist", {
      userid: loginstatus?.userid,
    });

    setticketlist(ressult);
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
          <ConfigProvider direction={dir}>
            {!loginstatus?.logde ? (
              <div>
                <Menu LoginScreen={true} />
                <Login />
                {/* </Language> */}
              </div>
            ) : (
              <div>
                <ContrulScreen dir={dir} />
              </div>
            )}
          </ConfigProvider>
        </Language>
      </DataProvider>
    </div>
  );
}

export default App;
