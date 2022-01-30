import React, { useState, useContext, useEffect } from "react";

import { Menu, Badge, Avatar } from "antd";

import { Contyner, MenuStyel } from "../styelscomponents/menustild";
import { ModalStyeldnewreq } from "../styelscomponents/modaldtyeld";
import logo from "../assets/logo.png";

import { VscAccount } from "react-icons/vsc";
import Desktnewreq from "../components/Desktnewreq";
import { Link } from "react-router-dom";
import DataContext from "../DataContext";
import Cookies from "universal-cookie";

import { AiOutlineMenu } from "react-icons/ai";

const { SubMenu } = Menu;
const Dasktopmenu = ({ LoginScreen, dir }) => {
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
    setvisible(false);
  };

  const [desktop, setdesktop] = useState(false);

  useEffect(() => {
    let intViewportWidth = window.innerWidth;
    if (intViewportWidth > 600) {
      setdesktop(true);
    }
  }, []);
  const Opentask = () => {
    setvisible(true);
  };
  const Cancelmodalreq = () => {
    setvisible(false);
  };
  return (
    <Contyner>
      <div>
        <div className="hderdesktop">
          {/* <AiOutlineMenu onClick={closeMenue} /> */}
          <div className="desktoplogo">
            <div className="desktopicon"><img src={logo} alt="" width="60%" /></div>
            <svg
              width="70"
              height="17"
              viewBox="0 0 70 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.22765 0.351999L6.29765 0.373999C8.42432 0.373999 10.2943 1.144 11.9076 2.684C13.521 4.20933 14.3276 6.094 14.3276 8.338C14.3276 10.5673 13.5356 12.4813 11.9516 14.08C10.3823 15.6787 8.47565 16.478 6.23165 16.478H2.20565C1.31098 16.478 0.753648 16.2947 0.533648 15.928C0.357648 15.62 0.269648 15.1507 0.269648 14.52V2.288C0.269648 1.936 0.276982 1.67933 0.291648 1.518C0.320982 1.35667 0.394315 1.166 0.511648 0.946C0.716982 0.549999 1.28898 0.351999 2.22765 0.351999ZM6.29765 12.584C7.35365 12.584 8.30698 12.1953 9.15765 11.418C10.0083 10.626 10.4336 9.636 10.4336 8.448C10.4336 7.26 10.0156 6.27 9.17965 5.478C8.35832 4.67133 7.39032 4.268 6.27565 4.268H4.16365V12.584H6.29765ZM23.3279 0.175999C25.4985 0.175999 27.3832 0.960666 28.9819 2.53C30.5806 4.09933 31.3799 6.05 31.3799 8.382C31.3799 10.6993 30.6172 12.6793 29.0919 14.322C27.5666 15.95 25.6892 16.764 23.4599 16.764C21.2305 16.764 19.3312 15.9573 17.7619 14.344C16.2072 12.7307 15.4299 10.8093 15.4299 8.58C15.4299 7.36267 15.6499 6.226 16.0899 5.17C16.5299 4.09933 17.1165 3.20467 17.8499 2.486C18.5832 1.76733 19.4265 1.20267 20.3799 0.791999C21.3332 0.381332 22.3159 0.175999 23.3279 0.175999ZM19.3239 8.47C19.3239 9.77533 19.7419 10.8387 20.5779 11.66C21.4285 12.4667 22.3745 12.87 23.4159 12.87C24.4572 12.87 25.3959 12.474 26.2319 11.682C27.0679 10.89 27.4859 9.82667 27.4859 8.492C27.4859 7.15733 27.0606 6.08667 26.2099 5.28C25.3739 4.47333 24.4352 4.07 23.3939 4.07C22.3525 4.07 21.4139 4.48067 20.5779 5.302C19.7419 6.10867 19.3239 7.16467 19.3239 8.47ZM45.1605 13.772C45.3805 14.3 45.4905 14.6813 45.4905 14.916C45.4905 15.4733 45.0358 15.9427 44.1265 16.324C43.6571 16.5293 43.2758 16.632 42.9825 16.632C42.7038 16.632 42.4691 16.566 42.2785 16.434C42.1025 16.2873 41.9705 16.1407 41.8825 15.994C41.7358 15.7153 41.1638 14.388 40.1665 12.012L39.4845 12.056H36.7125V14.542C36.7125 14.8793 36.6978 15.136 36.6685 15.312C36.6538 15.4733 36.5878 15.664 36.4705 15.884C36.2651 16.28 35.6931 16.478 34.7545 16.478C33.7278 16.478 33.1265 16.2067 32.9505 15.664C32.8625 15.4147 32.8185 15.0333 32.8185 14.52V2.31C32.8185 1.97267 32.8258 1.72333 32.8405 1.562C32.8698 1.386 32.9431 1.188 33.0605 0.967999C33.2658 0.571999 33.8378 0.373999 34.7765 0.373999H39.5285C40.8191 0.373999 42.0731 0.843333 43.2905 1.782C43.8771 2.23667 44.3611 2.85267 44.7425 3.63C45.1238 4.40733 45.3145 5.27267 45.3145 6.226C45.3145 7.88333 44.7645 9.24733 43.6645 10.318C43.9871 11.0953 44.4858 12.2467 45.1605 13.772ZM36.7125 8.162H39.5285C39.9538 8.162 40.3791 8.00067 40.8045 7.678C41.2298 7.35533 41.4425 6.87133 41.4425 6.226C41.4425 5.58067 41.2298 5.09667 40.8045 4.774C40.3791 4.43667 39.9391 4.268 39.4845 4.268H36.7125V8.162ZM63.8354 0.989999C63.9527 1.21 64.0187 1.408 64.0334 1.584C64.0627 1.76 64.0774 2.01667 64.0774 2.354V14.564C64.0774 15.576 63.7987 16.17 63.2414 16.346C62.9627 16.434 62.6107 16.478 62.1854 16.478C61.7601 16.478 61.4227 16.4413 61.1734 16.368C60.9241 16.2947 60.7334 16.2067 60.6014 16.104C60.4694 16.0013 60.3667 15.8547 60.2934 15.664C60.2201 15.4147 60.1834 15.0333 60.1834 14.52V7.15C59.8167 7.60467 59.2814 8.33067 58.5774 9.328C57.8734 10.3107 57.426 10.9267 57.2354 11.176C57.0447 11.4253 56.9127 11.6013 56.8394 11.704C56.7661 11.792 56.5827 11.924 56.2894 12.1C56.0107 12.2613 55.7027 12.342 55.3654 12.342C55.0427 12.342 54.742 12.2687 54.4634 12.122C54.1994 11.9607 54.0087 11.8067 53.8914 11.66L53.7154 11.418C53.422 11.0513 52.8427 10.274 51.9774 9.086C51.112 7.88333 50.6427 7.238 50.5694 7.15V14.564C50.5694 14.9013 50.5547 15.158 50.5254 15.334C50.5107 15.4953 50.4447 15.6787 50.3274 15.884C50.1074 16.28 49.5354 16.478 48.6114 16.478C47.7167 16.478 47.1594 16.28 46.9394 15.884C46.822 15.6787 46.7487 15.488 46.7194 15.312C46.7047 15.136 46.6974 14.872 46.6974 14.52V2.31C46.6974 1.97267 46.7047 1.72333 46.7194 1.562C46.7487 1.386 46.822 1.188 46.9394 0.967999C47.1594 0.586666 47.7314 0.395999 48.6554 0.395999C49.0514 0.395999 49.3887 0.447332 49.6674 0.549999C49.9607 0.637999 50.1514 0.733333 50.2394 0.836L50.3714 0.967999L55.3654 7.524C57.8587 4.224 59.5234 2.046 60.3594 0.989999C60.6087 0.593999 61.1954 0.395999 62.1194 0.395999C63.0581 0.395999 63.6301 0.593999 63.8354 0.989999ZM65.84 2.31C65.84 1.97267 65.8473 1.72333 65.862 1.562C65.8913 1.386 65.9646 1.188 66.082 0.967999C66.2873 0.571999 66.8593 0.373999 67.798 0.373999C68.8246 0.373999 69.4333 0.645332 69.624 1.188C69.6973 1.43733 69.734 1.81867 69.734 2.332V14.564C69.734 14.916 69.7193 15.1727 69.69 15.334C69.6753 15.4953 69.6093 15.686 69.492 15.906C69.2866 16.302 68.7146 16.5 67.776 16.5C66.7493 16.5 66.148 16.2213 65.972 15.664C65.884 15.4293 65.84 15.0553 65.84 14.542V2.31Z"
                fill="#E4EDED"
              />
            </svg>
          </div>
          {/* <img
              src="/images/lighitning_hader.svg"
              alt="Image"
              className="imagelogo"
            /> */}
            <div className="Drawercontennet">
              {/* פתח פנייה חדשה */}
              <button className="desktopbutton" onClick={Opentask}>
                {lang?.lang100}
              </button>
              <hr style={{borderTop: "1px solid #2C2A51", margin:"24px 0"}}/>

              {/*  "רשימת פניות" */}

              <Link to="/ListOfreq">
                <div className="ListOfreqmenue">
                  {lang?.lang196}
                  <div className="count_inquiries">{chors.chors}</div>
                  {/* <Badge 
                    style={{
                      display: "flex",
justifyContent: "center",
alignItems: "center",
                      width: "32px",
height: "18px",
                      backgroundColor: "rgba(255, 255, 255, 0.26)",
                      color: "#FFFFFF",
                      fontsize: "1.4rem",
                      boxShadow: "rgb(255 255 255 / 26%) 0px 0px 0px 14px inset",
                      marginBottom:"-5px"
                    }}
                    overflowCount={999}
                    count={chors.chors}
                  ></Badge> */}
                </div>
              </Link>

              {/*  "מטלות מתוזמנות" */}
              {userlevelid === 10 || userlevelid === 5 || userlevelid === 13 ? (
                <p onClick={closeMenue}>
                  <Link className="ListOfreqmenue" to="/Repeatedtask">{lang?.lang285} </Link>
                </p>
              ) : null}

<hr style={{borderTop: "1px solid #2C2A51", margin:"24px 0"}}/>
<div className="div_dropdown_menu">

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
                    <Menu.Item key="8"                   
>
                      {/* "משתמשים" */}

                      <Link to="list_users"  style={{fontSize: "1.3rem"}}>{lang?.lang102} </Link>
                    </Menu.Item>
                    <hr />
                    <Menu.Item key="9">
                      {/* מיקום */}
                      <Link to="location"style={{fontSize: "1.3rem"}}>{lang?.lang333} </Link>
                    </Menu.Item>
                    <hr />
                    <Menu.Item key="10">
                      {/* קטגוריות */}
                      <Link to="categoris"style={{fontSize: "1.3rem"}}>{lang?.lang104} </Link>
                    </Menu.Item>
                    <hr />
                    <Menu.Item key="11">
                      {" "}
                      {/* הגדרות */}
                      <Link to="setings"style={{fontSize: "1.3rem"}}>{lang?.lang167}</Link>
                    </Menu.Item>
                  </SubMenu>
                </MenuStyel>
              ) : null}

              {/* סטטיסטיקה */}
              {userlevelid === 10 || userlevelid === 13 ? (

                <Link to="/Statistics" ><div dir="rtl" className="btn_Statistics">{lang?.lang105}</div></Link>
              ) : null}

              {userlevelid === 10 ? (
                <MenuStyel
                  onClick={closeMenue}
                  mode="inline"
                  style={{ background: "#1c1547", border: "#1c1547" }}
                >
                  <SubMenu key="sub1-2" title="טפסים">
                    <Menu.Item key="3">
                      {" "}
                      <Link to="/Forms"style={{fontSize: "1.3rem"}}> טפסים</Link>
                    </Menu.Item>
                    <hr />

                    <Menu.Item key="4">
                      {" "}
                      <Link to="/SendsForm"style={{fontSize: "1.3rem"}}> טפסים שנשלחו</Link>
                    </Menu.Item>
                  </SubMenu>
                </MenuStyel>
              ) : null}
              {/* הפרופיל שלי */}
              <MenuStyel
                mode="inline"
                style={{ background: "#1c1547", border: "#1c1547" }}
                onClick={closeMenue}
              >
                <SubMenu
                  key="sub1-4"
                  icon={
                    <div style={{ marginInlineStart: "-24px" }} className="btn_profile">
                      <VscAccount />
                     </div>
                  }
                >
                  <Menu.Item key="13">
                    <Link to="/Users" style={{fontSize: "1.3rem"}}> {lang?.lang289}</Link>
                  </Menu.Item>                    <hr />

                  <Menu.Item key="14" onClick={exit} >
                    {lang?.lang107}
                  </Menu.Item>
                </SubMenu>
              </MenuStyel>
            </div>
            </div>
          <ModalStyeldnewreq
            // title={lang?.lang100}
            visible={visible}
            onCancel={Cancelmodalreq}
            footer={false}
            width={"100%"}
            // bodyStyle={{ wordBreak: "break-word", background: "red" }}
          >
            <Desktnewreq setvisual={Cancelmodalreq} />
          </ModalStyeldnewreq>
        </div>
      </div>
    </Contyner>
  );
};

export default Dasktopmenu;
