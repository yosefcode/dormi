import React, { useContext, useState } from "react";
import DataContext from "../../DataContext";

import { StyeldSelect } from "../../styelscomponents/Ticketliststyel";
import { ModalStyeld } from "../../styelscomponents/modaldtyeld";
import { AiOutlineClockCircle, AiOutlineCamera } from "react-icons/ai";
import { FaMapPin } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

import { Badge, Card, Menu, Dropdown, Select, Tooltip } from "antd";

const { Option } = Select;
export function Carddatasmall({
  el,
  i,
  status,
  statustext,
  SelfOpenststus,
  Repeatedtask,
}) {
  // {Repeatedtask ? (

  return (
    <div
      onClick={() => {
        SelfOpenststus(i);
      }}
    >
      <div className="Smallcard">
        {/* <p id="discriptun">
          {el.categoryname} - {el.categoryname}
        </p> */}

        <p id="cooment"> {el.comments}</p>
        {Repeatedtask ? (
          <p>
            <AiOutlineClockCircle />
            מטלה מתוזמנת
          </p>
        ) : (
          <Badge id="status" color={status} text={statustext} />
        )}
      </div>
    </div>
  );
}
export function Carddatabig({ el }) {
  const [imegvesebule, setimegvesebule] = useState(false);

  return (
    <div>
      <p>
        <FaMapPin />
        {el.locationName}-{el.roomName}
      </p>
      <p>
        <BsFillPersonFill /> {el.firstname} {el.lastname}
        <span
          className="Calltoaction"
          onClick={() => {
            window.open(`tel:${el?.phone}`);
          }}
        >
          {el.phone}
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
        {el.dateopened}
        <span id="displyid">{el.ticketid}</span>
      </p>
      <ModalStyeld
        visible={imegvesebule}
        onCancel={() => {
          setimegvesebule(false);
        }}
        footer={false}
      >
        <p>תמונה</p>

        <p>תמונה</p>

        <p>תמונה</p>

        <p>תמונה</p>

        <p>תמונה</p>

        <p>תמונה</p>
      </ModalStyeld>
    </div>
  );
}
export function Urgensy({
  el,
  urgency,
  urgencytext,
  findChangeurgency,
  Permission,
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
        Permission={Permission}
      >
        <Option value={[lang?.lang122, el.ticketid, "1"]}>
          {" "}
          <Badge color="#22E7B7"></Badge>
          {lang?.lang122}
        </Option>
        <Option value={[lang?.lang121, el.ticketid, "2"]}>
          {" "}
          <Badge color="orange"></Badge>
          {lang?.lang121}
        </Option>
        <Option value={[lang?.lang120, el.ticketid, "3"]}>
          {" "}
          <Badge color="#D91D61"></Badge>
          {lang?.lang120}
        </Option>
      </StyeldSelect>
    </div>
  );
}
