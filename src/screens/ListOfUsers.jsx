import React, { useContext, useEffect, useRef, useState } from "react";
import { Contener } from "../styelscomponents/UsersStyeld";
import { Input, Card, Avatar, Badge, Dropdown, Menu, Select } from "antd";
import DataContext from "../DataContext";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { FaFilter, FaMapPin } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Closetask } from "../components/listuserhalpers/closetask";
import { AiOutlineMail, AiOutlineEdit } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsTrash, BsThreeDotsVertical } from "react-icons/bs";
const { Option } = Select;

const fullname = "שם";
const userlevel = "תפקיד";
const Email = "מייל";
const phonnumber = "טלפון";
const location = "מיקום";
const Numberoftasks = "מספר פניות ";
const delet = "מחיקה";

function Users() {
  document.body.style.backgroundColor = "white";
  const defoltlang = useContext(DataContext).lang;
  const userlist = useContext(DataContext).userlist;
  const ticketlist = useContext(DataContext).ticketlist;

  const itemsRef = useRef([]);
  const checkboxref = useRef([]);
  const lang = defoltlang?.lang;

  document.body.style.backgroundColor = "white";
  const onSearch = (e) => console.log(e.target.value);
  const [screnphunesize, setscrenphunesize] = useState();
  const [firstlode, setfirstlode] = useState(false);
  const [Alluserarry, setAlluserarry] = useState();
  const [userfilter, setuserfilter] = useState();
  let history = useHistory();
  const filterserch = useContext(DataContext).filterserch;
  const chanfefilter = useContext(DataContext).chanfefilter;
  function FilterAllusers(arry, user) {
    if (user) {
      return arry.filter((el) => {
        return el.fullname === user;
      });
    } else {
      return arry;
    }
  }

  const fackarry = [
    {
      fullname: "boaz",
      userlevel: 1,
      email: "aess@gmaul.com",
      phone: "0526371073",
      Numberoftasks: 4,
      locationName: "ffff",
      roomName: "dddd",
    },
    {
      fullname: "moshe",
      userlevel: 2,
      email: "aess@gmaul.com",
      phone: "0526371073",
      Numberoftasks: 5,
      locationName: "ffff",
      roomName: "dddd",
    },
  ];

  useEffect(() => {
    if (!firstlode) {
      let intViewportWidth = window.innerWidth;
      if (intViewportWidth > 600) {
        setscrenphunesize(false);
      } else {
        setscrenphunesize(true);
      }
      setAlluserarry(userlist);
      setfirstlode(true);
    } else {
      let res = FilterAllusers(userlist, userfilter);
      setAlluserarry(res);
    }
  }, [userfilter, Alluserarry]);

  const SelfOpenststus = (i) => {
    if (itemsRef.current[i].style.display === "inherit") {
      itemsRef.current[i].style.display = "none";
    } else {
      itemsRef.current[i].style.display = "inherit";
    }
  };

  const [fullcard, setfullcard] = useState(false);
  const [opentikitatatus, setopentikitatatus] = useState(true);

  const AllOpenststus = () => {
    setopentikitatatus(!opentikitatatus);

    for (let i = 0; fackarry.length > i; i++) {
      if (fullcard) {
        itemsRef.current[i].style.display = "none";

        setfullcard(false);
      } else {
        itemsRef.current[i].style.display = "inherit";

        setfullcard(true);
      }
    }
  };
  const [Drawervisible, setDrawervisible] = useState(false);

  const openfilter = () => {
    setDrawervisible(!Drawervisible);
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/Adduser">{lang?.lang244} </Link>
      </Menu.Item>

      <Menu.Item>
        <p className="Dropdown-item" onClick={AllOpenststus}>
          {opentikitatatus ? "הצג כל פרטי המשתמש" : "סגור כל פרטי המשתמש"}{" "}
        </p>
      </Menu.Item>
    </Menu>
  );
  const gotolistoftask = (value) => {
    filterserch.user = value;

    chanfefilter(filterserch);
    history.push("/ListOfreq");
  };
  const [visible, setvisible] = useState(false);
  const [cunter, setcunter] = useState(0);
  const [quickclose, setquickclose] = useState(false);
  const closepupup = () => {
    setquickclose(!quickclose);
  };
  const Opquickctaskoption = () => {
    setvisible(false);

    if (quickclose) {
      for (let i = 0; Alluserarry.length > i; i++) {
        checkboxref.current[i].checked = false;
      }
      setcunter(0);

      closepupup();
    } else {
      closepupup();
    }
  };
  const chuseallusers = () => {
    for (let i = 0; Alluserarry.length > i; i++) {
      checkboxref.current[i].checked = true;
    }
  };
  const clerallusers = () => {
    for (let i = 0; Alluserarry.length > i; i++) {
      checkboxref.current[i].checked = false;
    }
  };
  return (
    <Contener Screnphunesize={screnphunesize}>
      <div className="Mangeroption">
        <button className="MangerButton" onClick={openfilter}>
          {lang?.lang248} <FaFilter />
        </button>
        <button className="MangerButton" onClick={Opquickctaskoption}>
          <img src="/images/multipulchuis.svg" /> בחירה
        </button>
        <button className="MangerButton">
          <Link to="/SendMassege">שליחת הזמנה למשתמשים</Link>
        </button>
        <button className="MangerButton shwobutton">
          <Link to="/Adduser">{lang?.lang244} </Link>
        </button>
        <button className="MangerButton shwobutton" onClick={AllOpenststus}>
          <p>
            {opentikitatatus ? "הצג כל פרטי המשתמש" : "סגור כל פרטי המשתמש"}{" "}
          </p>
        </button>

        <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
          <button className="DropdownButton shwobuttondropdown">
            <BsThreeDotsVertical />
          </button>
        </Dropdown>
      </div>
      <div className="haderflex">
        {Drawervisible ? (
          <Select
            showSearch
            placeholder={lang?.lang352}
            onChange={(value) => {
              setuserfilter(value);
            }}
          >
            <Option value={false}>{lang.lang352}</Option>

            {fackarry
              ? fackarry.map((el) => (
                  <Option value={el.fullname}>{el.fullname}</Option>
                ))
              : null}
          </Select>
        ) : null}

        <h2>{lang?.lang102}</h2>

        {Alluserarry
          ? Alluserarry.map((user, i) => {
              // debugger;
              let levelname;
              let levelscolor;
              switch (user.langid) {
                // משתמש
                case 1:
                  levelscolor = "purple";
                  levelname = lang?.lang238;

                  break;
                case 2:
                  levelscolor = "green";
                  levelname = "מנהל";

                  break;
                default:
                  break;
              }
              let cunter = 0;

              ticketlist.map((tiket) => {
                if (
                  tiket.firstname === user.firstname &&
                  tiket.lastname === user.lastname
                ) {
                  cunter = cunter + 1;
                }
              });

              return (
                <Card bordered={false} key={i}>
                  <div
                    onClick={() => {
                      SelfOpenststus(i);
                    }}
                    className="titelcard"
                  >
                    <p>
                      <Avatar size={42} icon={<UserOutlined />} />{" "}
                      {user.firstname} {user.lastname}
                    </p>

                    <p>
                      <Badge color={levelscolor} text={levelname} />
                    </p>
                    <div>
                      {cunter > 0 ? (
                        <div>
                          <Badge
                            dir="tlr"
                            overflowCount={999}
                            count={cunter}
                            style={{
                              backgroundColor: "#EBBE74",
                              color: "black",
                              fontsize: "16px",
                            }}
                            onClick={() => {
                              gotolistoftask([
                                user.firstname + " " + user.lastname,
                                user.firstname,
                                user.lastname,
                              ]);
                            }}
                          />
                          <p>פניות פתוחות</p>
                        </div>
                      ) : null}
                    </div>
                    <input
                      type="checkbox"
                      id="horns"
                      name="horns"
                      className="closecheckboox"
                      // checked={true}
                      ref={(el) => (checkboxref.current[i] = el)}
                      value={user.ticketguid}
                    />
                  </div>

                  <div
                    ref={(el) => (itemsRef.current[i] = el)}
                    style={{
                      display: "none",
                      color: "#807e94",
                      marginTop: "20px",
                    }}
                  >
                    <hr />

                    <div
                      onClick={() => {
                        SelfOpenststus(i);
                      }}
                    >
                      <Badge
                        color={"#f50"}
                        text={`${lang?.lang237} ${user.ticketcount} `}
                      />
                      <p>
                        <FaMapPin />
                        {user.roomname}
                      </p>
                      <p>
                        <span
                          className="Calltoaction"
                          onClick={() => {
                            window.open(`tel:${user?.phone}`);
                          }}
                        >
                          <BiPhoneCall />

                          {user.phone}
                        </span>
                        <p className="Calltoaction">
                          <AiOutlineMail />
                          {user?.email}
                        </p>
                      </p>
                    </div>
                  </div>
                  <div className="action">
                    <button className="cardbutton">
                      <BsTrash />
                    </button>
                    <AiOutlineEdit />
                  </div>
                </Card>
              );
            })
          : null}
        {quickclose ? (
          <Closetask
            data={cunter}
            chuseallusers={chuseallusers}
            clerallusers={clerallusers}
            // cancelClosep={cancelClosep}
            // opendrwor={closeMenue}
            // cancelquickfunc={cancelquickfunc}
            // canceloperition={canceling}
          />
        ) : null}
      </div>
    </Contener>
  );
}

export default Users;
