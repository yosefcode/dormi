import React, { useState, useContext } from "react";

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

const { SubMenu } = Menu;
const HaderMenu = (props) => {
  const data = useContext(DataContext);
  const changdata = useContext(DataContext).changdata;
  const defoltlang = useContext(DataContext).lang;
  const lang = defoltlang?.lang;

  const [current, setcurrent] = useState(`mail`);
  let status = props.LoginScreen;
  const handleClick = (e) => {
    setcurrent(e.key);
  };

  let chors = { chors: 10 };
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
            <Link to="/"> {lang?.lang100}</Link>
          </Menu.Item>
          <Menu.Item key="Repeatedtask">
            <Link to="/Repeatedtask">{lang?.lang285} </Link>
          </Menu.Item>
          <Menu.Item key="new_chors">
            <Link to="/ListOfreq">
              {" "}
              <Badge dir="tlr" count={chors.chors}>
                {lang?.lang196}
              </Badge>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1-3" title={lang?.lang167}>
            <Menu.Item key="5">
              <Link to="list_users">{lang?.lang102} </Link>
            </Menu.Item>
            <Menu.Item key="6">
              {" "}
              <Link to="location">{lang?.lang333} </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="categoris">{lang?.lang104} </Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="setings">{lang?.lang167}</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="statisic">{lang?.lang105}</Menu.Item>

          <SubMenu key="sub1-4" icon={<VscAccount />}>
            <Menu.Item key="5">
              {" "}
              <Link to="/Users"> {lang?.lang289}</Link>
            </Menu.Item>
            <Menu.Item key="6">{lang?.lang107}</Menu.Item>
          </SubMenu>
        </Menu>
      )}
    </Contyner>
  );
};

export default HaderMenu;
