import React, { useState, useEffect } from "react";

import "./App.css";
import Login from "./components/login";
import ContrulScreen from "./components/ContrulScreen";
import { Language } from "./styelscomponents/Language";

import Menu from "./components/Menu";
import { DataProvider } from "./DataContext";
import { PostToServer } from "./serveses";
import Cookies from "universal-cookie";

function App() {
  // context DataProvider
  const [data, setdata] = useState();
  const [lang, setlang] = useState();
  const [loginstatus, setloginstatus] = useState();
  const [masof, setmasof] = useState();

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
  };
  const [cookiesdata, setcookiesdata] = useState();
  const cookies = new Cookies();
  useEffect(async () => {
    let ruter = "lang";
    let value = { lang: 1 };
    let res = await PostToServer(ruter, value);

    let logde = { logde: false };
    setloginstatus(logde);

    let obj = { lang: res, langid: 1 };
    setlang(obj);
  }, []);

  // setdata({ userid: "12345" });
  let user = {
    userid: "rtyui",
    firstname: "boaz",
    lastname: "katz",
    email: "fffff",
    phonenumner: "06060660",
    levelid: 1234,

    language: [{ 100: "hloo", 200: "dor" }],
    programname: "כפר סטודנטים",
  };

  // פתח פנייה
  let categorinamys = [
    {
      categorinamys: [
        {
          id: 31,
          maincategori: "חשמל",
          subcatgory: [
            { subcategoriid: 1, subname: "נורה" },
            { subcategoriid: 1, subname: "שקע" },
          ],
        },
        {
          id: 31,
          maincategori: "אינסטליצייה",
          subcatgory: [
            { id: 1, subname: "ברז" },
            { id: 1, subname: "ביוב" },
          ],
        },
      ],
      locations: {
        locationid: 1,
        locationname: "כפר סטודנטים",
        rooms: [
          { roomid: 1, room: "חדר1" },
          { roomid: 1, room: "חדר2" },
        ],
      },
    },
  ];

  let formreq = {
    userid: "12345",
    locationid: 1,
    roomid: 1234,
    subcategoriid: 1,
    urgencyid: 2,
    comments: "בלה בלה",
  };
  // let form1 =[{ location: [
  //   { id: 1, room: "חדר1" },
  //   { id: 2, room: 3 },

  // ]
  // const [Language, setLanguage] = useState("tlr");
  return (
    <div>
      <DataProvider value={providerOptions}>
        {!loginstatus?.logde ? (
          <div>
            <Language Language={"tlr"}>
              <Menu LoginScreen={true} />
              <Login cookiesdata={cookiesdata} />
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
