import React, { useState, useContext } from "react";

import { Menu, Badge } from "antd";

import { Contyner } from "../styelscomponents/menustild";
import { VscAccount } from "react-icons/vsc";

import { Link } from "react-router-dom";
import DataContext from "../DataContext";
import Cookies from "universal-cookie";

import { AiOutlineMenu } from "react-icons/ai";

const { SubMenu } = Menu;
const HaderMenu = (props) => {
  const defoltlang = useContext(DataContext).lang;
  const changloginstatus = useContext(DataContext).changloginstatus;
  const loginstatus = useContext(DataContext).loginstatus;
  const ticketlist = useContext(DataContext).ticketlist;

  const lang = defoltlang?.lang;

  const [current, setcurrent] = useState(`mail`);
  let status = props.LoginScreen;
  const handleClick = (e) => {
    setcurrent(e.key);
  };

  let chors;
  if (ticketlist?.length) {
    chors = { chors: ticketlist?.length };
  } else {
    chors = { chors: 0 };
  }
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
          overflowedIndicator={<AiOutlineMenu />}
        >
          <Menu.Item key="2">
            <img
              src="/images/logo_dormi.png"
              alt="Image"
              className="imagelogo"
            />
          </Menu.Item>
          {userlevelid === "10" ? (
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

          {/* {userlevelid === "10" || userlevelid === "5" || userlevelid === "13" ? ( */}
          <Menu.Item key="6">
            <Link to="/Repeatedtask">{lang?.lang285} </Link>
          </Menu.Item>
          {/* ) : null}  */}
          <Menu.Item key="7">
            {/*  "רשימת פניות" */}
            <Link to="/ListOfreq">
              {" "}
              <Badge overflowCount={999} count={chors.chors}>
                {lang?.lang196}
              </Badge>
            </Link>
          </Menu.Item>

          {/* "הגדרות" */}
          {/* {userlevelid === "10" || userlevelid === "5" || userlevelid === "13" ? ( */}
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
          {/* ) : null}  */}
          {/* סטטיסטיקות */}
          {/* {userlevelid === "10" || userlevelid === "13" ? ( */}
          <Menu.Item key="12">{lang?.lang105}</Menu.Item>
          {/* ) : null}  */}
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
