import React, { useState, useContext, useEffect } from "react";

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
import DataContext from "../DataContext";
import Cookies from "universal-cookie";

const { SubMenu } = Menu;
const HaderMenu = (props) => {
  const data = useContext(DataContext);
  const changdata = useContext(DataContext).changdata;
  const defoltlang = useContext(DataContext).lang;
  const changloginstatus = useContext(DataContext).changloginstatus;
  const loginstatus = useContext(DataContext).loginstatus;

  const lang = defoltlang?.lang;

  const [current, setcurrent] = useState(`mail`);
  let status = props.LoginScreen;
  const handleClick = (e) => {
    setcurrent(e.key);
  };

  let chors = { chors: 10 };
  const exit = () => {
    const cookies = new Cookies();
    cookies.remove("aut");

    let logde = { logde: false };

    changloginstatus(logde);
  };
  let userlevelid = loginstatus?.levelid;

  return (
    <Contyner>
      {status ? (
        <Menu
          onClick={handleClick}
          selectedKeys={current}
          mode="horizontal"
          triggerSubMenuAction="click"
        >
          <Menu.Item key="1">
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
          <Menu.Item key="2">
            <img
              src="/images/logo_dormi.png"
              alt="Image"
              className="imagelogo"
            />
          </Menu.Item>
          {userlevelid === 10 ? (
            <SubMenu key="sub1-2" title="תפריט">
              <Menu.Item key="3">תפריט</Menu.Item>
              <Menu.Item key="4">טפסים שנשלחו</Menu.Item>
            </SubMenu>
          ) : null}

          {/* "פתח פנייה חדשה" */}
          <Menu.Item key="5">
            <Link to="/"> {lang?.lang100}</Link>
          </Menu.Item>

          {/*  "מטלות מתוזמנות" */}

          {userlevelid === 10 || userlevelid === 5 || userlevelid === 13 ? (
            <Menu.Item key="6">
              <Link to="/Repeatedtask">{lang?.lang285} </Link>
            </Menu.Item>
          ) : null}
          <Menu.Item key="7">
            {/*  "רשימת פניות" */}
            <Link to="/ListOfreq">
              {" "}
              <Badge dir="tlr" count={chors.chors}>
                {lang?.lang196}
              </Badge>
            </Link>
          </Menu.Item>

          {/* "הגדרות" */}
          {userlevelid === 10 || userlevelid === 5 || userlevelid === 13 ? (
            <SubMenu key="sub1-3" title={lang?.lang167}>
              <Menu.Item key="8">
                {/* "משתמשים" */}
                <Link to="list_users">{lang?.lang102} </Link>
              </Menu.Item>
              <Menu.Item key="9">
                {" "}
                {/* מיקום */}
                <Link to="location">{lang?.lang333} </Link>
              </Menu.Item>
              <Menu.Item key="10">
                {/* קטגוריות */}
                <Link to="categoris">{lang?.lang104} </Link>
              </Menu.Item>
              <Menu.Item key="11">
                {/* הגדרות */}
                <Link to="setings">{lang?.lang167}</Link>
              </Menu.Item>
            </SubMenu>
          ) : null}
          {/* סטטיסטיקות */}
          {userlevelid === 10 || userlevelid === 13 ? (
            <Menu.Item key="12">{lang?.lang105}</Menu.Item>
          ) : null}
          <SubMenu key="sub1-4" icon={<VscAccount />}>
            <Menu.Item key="13">
              {" "}
              {/* הפרופיל שלי */}
              <Link to="/Users"> {lang?.lang289}</Link>
            </Menu.Item>
            <Menu.Item key="14" onClick={exit}>
              {lang?.lang107}
            </Menu.Item>
          </SubMenu>
        </Menu>
      )}
    </Contyner>
  );
};

export default HaderMenu;
