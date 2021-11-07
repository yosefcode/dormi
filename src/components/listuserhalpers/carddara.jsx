import React, { useContext } from "react";
import DataContext from "../../DataContext";
import { Badge } from "antd";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { BsLayers } from "react-icons/bs";

import { FaMapPin } from "react-icons/fa";

export const OpenSmallscreencard = ({ user }) => {
  const defoltlang = useContext(DataContext).lang;
  let lang = defoltlang.lang;
  let x = "tset git ";
  return (
    <div className="details">
      <p>
        <AiOutlineMail />

        <span
          className="Calltoaction"
          onClick={() => {
            window.location.href = `mailto:${user.email}`;
          }}
        >
          {user.email}
        </span>
      </p>
      <p>
        <AiFillPhone />

        <span
          className="Calltoaction"
          onClick={() => {
            window.open(`tel:${user.phone}`);
          }}
        >
          {user.phone}
        </span>
      </p>
      <p>
        <FaMapPin />
        <span className="bigcardparagraf">{user.roomname}</span>
      </p>
      <p>
        <BsLayers />
        <span className="bigcardparagraf">{user.academicyear}</span>
      </p>
      <Badge color={"#f50"} text={`${lang?.lang237} ${user.ticketcount} `} />
      {/* <Carddatabig el={el} /> */}
    </div>
  );
};
