import React, { useContext } from "react";
import DataContext from "../../DataContext";
import { Badge } from "antd";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { BsLayers } from "react-icons/bs";

import { FaMapPin } from "react-icons/fa";

export const OpenSmallscreencard = ({ user }) => {
  const defoltlang = useContext(DataContext).lang;
  let lang = defoltlang.lang;

  return (
    <div className="details">
      <div>
        <AiOutlineMail  style={{marginLeft:"10px", marginBottom:"-3px", fontSize:"1.5rem", }}/>

        <span
          className="Calltoaction"
          onClick={() => {
            window.location.href = `mailto:${user.email}`;
          }}
        >
          {user.email}
        </span>
      </div>
      <div>
        <AiFillPhone style={{marginLeft:"10px", marginBottom:"-3px", fontSize:"1.5rem", }}/>

        <span
          className="Calltoaction"
          onClick={() => {
            window.open(`tel:${user.phone}`);
          }}
        >
          {user.phone}
        </span>
      </div>
      <div>
        <FaMapPin style={{marginLeft:"10px", marginBottom:"-3px", fontSize:"1.5rem", }}/>
        <span className="bigcardparagraf">{user.roomname}</span>
      </div>
      <div>
        <BsLayers style={{marginLeft:"10px", marginBottom:"-3px", fontSize:"1.5rem", }}/>
        <span className="bigcardparagraf">{user.academicyear}</span>
      </div>
      <div>
        <Badge color={"#f50"} style={{marginLeft:"1px", marginBottom:"-2px", fontSize:"1.5rem", }}/>
        <span className="bigcardparagraf">{`${lang?.lang237} - ${user.ticketcount} `}</span>
      </div>
      {/* <Badge color={"#f50"} text={`${lang?.lang237} ${user.ticketcount} `} /> */}
      {/* <Carddatabig el={el} /> */}
    </div>
  );
};
