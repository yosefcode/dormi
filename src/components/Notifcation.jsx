import React, { useEffect, useContext } from "react";
import { useState } from "react/cjs/react.development";
import { onMessageListener } from "../firebase";
import DataContext from "../DataContext";
import { PostToServer } from "../serveses";
const Notifcation = () => {
  const loginstatus = useContext(DataContext).loginstatus;
  const changeticketlist = useContext(DataContext).changeticketlist;
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

    changeticketlist(ressult);
  };
  useEffect(() => {
    Updetdata();
  }, [getmassege]);
  return <div></div>;
};

export default Notifcation;
