import React, { useContext } from "react";
import {
  Contener,
  Tablestyel,
  Cardstyeld,
} from "../styelscomponents/UsersStyeld";
import { Input, Table, Space } from "antd";
import DataContext from "../DataContext";
import { Link } from "react-router-dom";

import { BsTrash } from "react-icons/bs";

const fullname = "שם";
const userlevel = "תפקיד";
const Email = "מייל";
const phonnumber = "טלפון";
const location = "מיקום";
const Numberoftasks = "מספר פניות ";
const delet = "מחיקה";
const columns = [
  {
    title: fullname,
    dataIndex: "fullname",
    key: "fullname",
  },
  {
    title: userlevel,
    dataIndex: "userlevel",
    key: "userlevel",
    render: (text, record) => {
      // debugger;
      if (text === 1) {
        return <div>מנהל</div>;
      } else {
        return <div>סטודנט</div>;
      }
    },
  },
  {
    title: Email,
    dataIndex: "Email",
    key: "Email",
  },
  {
    title: phonnumber,
    dataIndex: "phonnumber",
    key: "phonnumber",
  },
  {
    title: location,
    dataIndex: "location",
    key: "location",
  },
  {
    title: Numberoftasks,
    dataIndex: "Numberoftasks",
    key: "Numberoftasks",
  },
  {
    title: delet,
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        {/* <a>Invite {record.fullname}</a> */}
        <BsTrash
          onClick={() => {
            console.log("onClick", record);
          }}
        />
      </Space>
    ),
  },
];
function Users() {
  const defoltlang = useContext(DataContext).lang;

  const lang = defoltlang?.lang;

  document.body.style.backgroundColor = "white";
  const onSearch = (e) => console.log(e.target.value);

  const fackarry = [
    {
      fullname: "boaz",
      userlevel: 1,
      Email: "aess@gmaul.com",
      phonnumber: "0526371073",
      location: "חדר אוכל",
      Numberoftasks: 4,
    },
    {
      fullname: "moshe",
      userlevel: 2,
      Email: "aess@gmaul.com",
      phonnumber: "0526371073",
      location: "",
      Numberoftasks: 5,
    },
  ];

  return (
    <Contener>
      <div className="haderflex">
        {/* <span className="span_buttons"> */}
        <h2>{lang?.lang102}</h2>
        <Input
          placeholder={lang?.lang248}
          onChange={onSearch}
          className="serch"
        />

        <Link className="sendmail" to="/SendMassege">
          שליחת הזמנה למשתמשים
        </Link>

        <Link className="adduser" to="/Adduser">
          {lang?.lang244}{" "}
        </Link>
        {/* <Tablestyel
        dataSource={fackarry}
        columns={columns}
        pagination={false}
        scroll={{ x: 1000 }}
        // size={"small"}
      /> */}
        {fackarry.map((user) => {
          return (
            <Cardstyeld type="inner">
              <span>{user.Numberoftasks}</span>
              <span>{user.location}</span>
              <span>{user.phonnumber}</span>
              <span>{user.email}</span>
              <span>{user.userlevel}</span>
              <span>{user.name}</span>
              <BsTrash
                onClick={() => {
                  console.log("BsTrash");
                }}
              />
            </Cardstyeld>
          );
        })}
      </div>
    </Contener>
  );
}

export default Users;
