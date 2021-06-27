import React, { useState, useEffect } from "react";

import "./App.css";
import Login from "./components/login";
import ContrulScreen from "./components/ContrulScreen";
import { Language } from "./styelscomponents/Language";

import Menu from "./components/Menu";
import { DataProvider } from "./DataContext";
import { GettLangfromServer } from "./serveses";
function App() {
  const [loginstatus, setloginstatus] = useState(true);
  let x = "rtl";
  // let x = "ltr";

  // context DataProvider
  const [data, setdata] = useState();
  const providerOptions = {
    data,
    changdata: (value) => {
      setdata(value);
    },
  };
  useEffect(async () => {
    let res = await GettLangfromServer(2);

    setdata({ lang: res });
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
        {!loginstatus ? (
          <div>
            <Language Language={"rtl"}>
              <Menu LoginScreen={true} />
              <Login />
            </Language>
          </div>
        ) : (
          <div>
            <Language Language={x}>
              <ContrulScreen />
            </Language>
          </div>
        )}
      </DataProvider>
    </div>
  );
}

export default App;
