import React, { useState, useContext, useEffect } from "react";

import { Menu, Badge, Avatar } from "antd";

import { UserOutlined, CloseOutlined } from "@ant-design/icons";
import {
  Contyner,
  Avaterdrwor,
  Drawerstyle,
  MenuStyel,
} from "../styelscomponents/menustild";
import { VscAccount } from "react-icons/vsc";

import { Link } from "react-router-dom";
import DataContext from "../DataContext";
import Cookies from "universal-cookie";

import { AiOutlineMenu } from "react-icons/ai";

const { SubMenu } = Menu;
const HaderMenu = ({ LoginScreen, dir }) => {
  const defoltlang = useContext(DataContext).lang;
  const changloginstatus = useContext(DataContext).changloginstatus;
  const loginstatus = useContext(DataContext).loginstatus;
  const ticketlist = useContext(DataContext).ticketlist;

  const lang = defoltlang?.lang;

  let status = LoginScreen;

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
  const [visible, setvisible] = useState(false);

  const closeMenue = () => {
    setvisible(!visible);
  };
  const Dormilogo = () => {
    return (
      <Avaterdrwor>
        <Avatar size={64} icon={<UserOutlined />} />
        <p>{loginstatus.firstname + " " + loginstatus.lastname} </p>
      </Avaterdrwor>
    );
  };
  const [placement, setplacement] = useState("top");
  useEffect(() => {
    let intViewportWidth = window.innerWidth;
    if (intViewportWidth > 600) {
      if (dir === "rtl") {
        setplacement("right");
      } else {
        setplacement("left");
      }
    }
  }, []);

  return (
    <Contyner>
      {status ? (
        <div className="haeder">
          <img src="/images/logo_dormi.png" alt="Image" className="imagelogo" />
        </div>
      ) : (
        <div className="haeder">
          <AiOutlineMenu onClick={closeMenue} />

          <img src="/images/logo_dormi.png" alt="Image" className="imagelogo" />
          <Drawerstyle
            title={<Dormilogo />}
            placement={placement}
            onClose={closeMenue}
            visible={visible}
            height={500}
            closeIcon={<CloseOutlined style={{ color: "#e5e5e5" }} />}
          >
            <div className="Drawercontennet">
              {/* פתח פנייה חדשה */}
              <hr />

              <p onClick={closeMenue}>
                <Link to="/"> {lang?.lang100}</Link>
              </p>
              {/*  "מטלות מתוזמנות" */}
              {userlevelid === 10 || userlevelid === 5 || userlevelid === 13 ? (
                <p onClick={closeMenue}>
                  <Link to="/Repeatedtask">{lang?.lang285} </Link>
                </p>
              ) : null}
              {/*  "רשימת פניות" */}
              <p onClick={closeMenue}>
                <Link to="/ListOfreq">
                  <Badge
                    style={{
                      backgroundColor: "#EBBE74",
                      color: "black",
                      fontsize: "16px",
                    }}
                    overflowCount={999}
                    count={chors.chors}
                  >
                    {lang?.lang196}
                  </Badge>
                </Link>
              </p>
              {userlevelid === 10 || userlevelid === 5 || userlevelid === 13 ? (
                <MenuStyel
                  style={{ background: "#1c1547", border: "#1c1547" }}
                  // defaultSelectedKeys={["1"]}
                  // defaultOpenKeys={["sub1"]}

                  onClick={closeMenue}
                  mode="inline"
                >
                  <SubMenu
                    key="sub1-3"
                    title={lang?.lang167}
                    style={{ border: "none" }}
                  >
                    <Menu.Item key="8">
                      {/* "משתמשים" */}

                      <Link to="list_users">{lang?.lang102} </Link>
                    </Menu.Item>
                    <hr />
                    <Menu.Item key="9">
                      {/* מיקום */}
                      <Link to="location">{lang?.lang333} </Link>
                    </Menu.Item>
                    <hr />
                    <Menu.Item key="10">
                      {/* קטגוריות */}
                      <Link to="categoris">{lang?.lang104} </Link>
                    </Menu.Item>
                    <hr />
                    <Menu.Item key="11">
                      {" "}
                      {/* הגדרות */}
                      <Link to="setings">{lang?.lang167}</Link>
                    </Menu.Item>
                  </SubMenu>
                </MenuStyel>
              ) : null}

              {/* סטטיסטיקה */}
              {userlevelid === 10 || userlevelid === 13 ? (
                <Link to="/Statistics">{lang?.lang105}</Link>
              ) : null}
              {/* הפרופיל שלי */}
              <MenuStyel
                mode="inline"
                style={{ background: "#1c1547", border: "#1c1547" }}
                onClick={closeMenue}
              >
                <SubMenu key="sub1-4" icon={<VscAccount />}>
                  <Menu.Item key="13">
                    <Link to="/Users"> {lang?.lang289}</Link>
                  </Menu.Item>
                  <Menu.Item key="14" onClick={exit}>
                    {lang?.lang107}
                  </Menu.Item>
                </SubMenu>
              </MenuStyel>
              {userlevelid === 10 ? (
                <MenuStyel
                  onClick={closeMenue}
                  mode="inline"
                  style={{ background: "#1c1547", border: "#1c1547" }}
                >
                  <SubMenu key="sub1-2" title="טפסים">
                    <Menu.Item key="3">
                      {" "}
                      <Link to="/Forms"> טפסים</Link>
                    </Menu.Item>

                    <Menu.Item key="4">
                      {" "}
                      <Link to="/SendsForm"> טפסים שנשלחו</Link>
                    </Menu.Item>
                  </SubMenu>
                </MenuStyel>
              ) : null}
            </div>
          </Drawerstyle>
        </div>
      )}
    </Contyner>
  );
};

export default HaderMenu;
