import React, { useState } from "react";

import { Menu, Select, Badge } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Contyner } from "../styelscomponents/menustild";
import { VscAccount } from "react-icons/vsc";
// import logo from "/images/sopergas.logo";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const HaderMenu = (props) => {
  let history = useHistory();
  const [current, setcurrent] = useState(`mail`);
  let status = props.LoginScreen;
  const handleClick = (e) => {
    setcurrent(e.key);
  };

  const { Option } = Select;

  const fackearry = [
    { id: 1, type: "פנייה" },
    { id: 2, type: "הליכה אחרוה" },
  ];
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  let data = { chors: 10 };
  return (
    <Contyner>
      {status ? (
        <Menu
          onClick={handleClick}
          selectedKeys={current}
          mode="horizontal"
          triggerSubMenuAction="click"
        >
          <Menu.Item key="new_complain">
            <img
              src="/images/logo_dormi.png"
              alt="Image"
              className="imagelogo"
            />
          </Menu.Item>
        </Menu>
      ) : (
        <Menu
          onClick={handleClick}
          selectedKeys={current}
          mode="horizontal"
          triggerSubMenuAction="click"
        >
          <Menu.Item key="new_complain">
            <img
              src="/images/logo_dormi.png"
              alt="Image"
              className="imagelogo"
            />
          </Menu.Item>
          <SubMenu key="sub1-2" title="תפריט">
            <Menu.Item key="5">תפריט</Menu.Item>
            <Menu.Item key="6">טפסים שנשלחו</Menu.Item>
          </SubMenu>

          <Menu.Item key="new_complain">
            <Link to="/"> פתיחת פנייה חדשה</Link>
          </Menu.Item>
          <Menu.Item key="Repeatedtask">
            <Link to="/Repeatedtask">מטלות מתוזמנות </Link>
          </Menu.Item>
          <Menu.Item key="new_chors">
            <Link to="/ListOfreq">
              {" "}
              <Badge dir="tlr" count={data.chors}>
                רשימת פניות
              </Badge>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1-3" title="הגדרות">
            <Menu.Item key="5">
              <Link to="list_users">משתמשים </Link>
            </Menu.Item>
            <Menu.Item key="6">
              {" "}
              <Link to="location">מיקום </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="categoris">קטגוריות </Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="setings">הגדרות</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="statisic">סטטיסטיקות</Menu.Item>

          <SubMenu key="sub1-4" icon={<VscAccount />}>
            <Menu.Item key="5">
              {" "}
              <Link to="/Users"> הפרופיל שלי</Link>
            </Menu.Item>
            <Menu.Item key="6">יציאה</Menu.Item>
          </SubMenu>
        </Menu>
      )}
    </Contyner>
  );
};

export default HaderMenu;
