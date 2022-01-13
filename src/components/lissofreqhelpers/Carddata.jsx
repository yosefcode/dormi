import React, { useContext, useState } from "react";
import DataContext from "../../DataContext";

import { StyeldSelect } from "../../styelscomponents/Ticketliststyel";
import { ModalStyeld } from "../../styelscomponents/modaldtyeld";
import { AiOutlineClockCircle, AiOutlineCamera } from "react-icons/ai";
import { FaMapPin } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Badge, Card, Menu, Dropdown, Select, Tooltip } from "antd";

const { REACT_APP_URL_UPLOADS } = process.env;
const imegeruter = REACT_APP_URL_UPLOADS;
const { Option } = Select;

export function Carddatabig({ el }) {
  const [imegvesebule, setimegvesebule] = useState(false);

  return (
    <div className="details">
      <p>
        <FaMapPin />
        {el.locationName ? el.locationName : null}-
        {el.roomName ? el.roomName : null}
      </p>
      <p>
        <BsFillPersonFill /> {el.firstname ? el.firstname : null}{" "}
        {el.lastname ? el.lastname : null}
        <span
          className="Calltoaction"
          onClick={() => {
            window.open(`tel:${el?.phone}`);
          }}
        >
          {el.phone ? el.phone : null}
        </span>
      </p>
      <p>
        <AiOutlineCamera />
        <span
          className="Calltoaction"
          onClick={() => {
            setimegvesebule(true);
          }}
        >
          תמונה
        </span>
      </p>
      <p>
        {el.dateopened ? el.dateopened : null}
        {/* <span id="displyid">{el.ticketid}</span> */}
      </p>
      <ModalStyeld
        visible={imegvesebule}
        onCancel={() => {
          setimegvesebule(false);
        }}
        footer={false}
      >
        <img
          src={`${imegeruter}/${el.openimage}`}
          alt="no img"
          style={{ width: "100px", height: "100px" }}
        />
      </ModalStyeld>
    </div>
  );
}
export function Urgensy({
  el,
  urgency,
  urgencytext,
  findChangeurgency,
  permission,
}) {
  const defoltlang = useContext(DataContext).lang;
  const lang = defoltlang?.lang;

  const onChinge = (value) => {
    findChangeurgency(value);
  };
  return (
    <div>
      <StyeldSelect
        primary={urgency}
        defaultValue={urgencytext}
        showArrow={false}
        value={
          <div className="valueBadge">
            <Badge
              color={urgency}
              style={{
                insetinlinestart: "4%",
              }}
            ></Badge>
            {urgencytext}
          </div>
        }
        onChange={onChinge}
        dropdownClassName="dropdownClassName"
        permission={permission}
      >
        <Option value={[lang?.lang122, el.ticketguid, "1"]}>
          {" "}
          <Badge color="#22E7B7"></Badge>
          {lang?.lang122}
        </Option>
        <Option value={[lang?.lang121, el.ticketguid, "2"]}>
          {" "}
          <Badge color="orange"></Badge>
          {lang?.lang121}
        </Option>
        <Option value={[lang?.lang120, el.ticketguid, "3"]}>
          {" "}
          <Badge color="#D91D61"></Badge>
          {lang?.lang120}
        </Option>
      </StyeldSelect>
    </div>
  );
}
