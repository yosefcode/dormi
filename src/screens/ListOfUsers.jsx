import React, { useContext, useEffect, useRef, useState } from "react";
import { Contener } from "../styelscomponents/UsersStyeld";
import { Input, Card, Avatar, Badge, Dropdown, Menu, Select } from "antd";
import DataContext from "../DataContext";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { FaFilter, FaMapPin } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import {
  Closetask,
  ListtaskforEdit,
  ListtaskforEditquik,
} from "../components/listuserhalpers/closetask";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { OpenSmallscreencard } from "../components/listuserhalpers/carddara";
import { BiPhoneCall } from "react-icons/bi";
import { BsTrash, BsThreeDotsVertical, BsLayers } from "react-icons/bs";
import { Buttonmuneu } from "../styelscomponents/Buttonmuneu";
import { Style_users } from "../styelscomponents/Styelsuser";

import {
  QuickcloDrawerstyle,
  Quickclomodaltyle,
  Selectfilter
} from "../styelscomponents/Ticketliststyel";

const { Option } = Select;

const fullname = "שם";
const userlevel = "תפקיד";
const Email = "מייל";
const phonnumber = "טלפון";
const location = "מיקום";
const Numberoftasks = "מספר פניות ";
const delet = "מחיקה";

function Users() {
  // document.body.style.backgroundColor = "white";
  const defoltlang = useContext(DataContext).lang;
  const userlist = useContext(DataContext).userlist;
  const ticketlist = useContext(DataContext).ticketlist;

  const itemsRef = useRef([]);
  const checkboxref = useRef([]);
  const lang = defoltlang?.lang;

  // document.body.style.backgroundColor = "white";

  const [screnphunesize, setscrenphunesize] = useState();
  const [firstlode, setfirstlode] = useState(false);
  const [Alluserarry, setAlluserarry] = useState();
  const [userfilter, setuserfilter] = useState();
  const [program, setprogram] = useState(false);
  const [locallist, setlocallist] = useState();
  const [rerender, setrerender] = useState(false);
  const [useridfortask, setuseridfortask] = useState();
  const [visibletaskDrawer, setvisibletaskDrawer] = useState(false);

  let history = useHistory();
  const filterserch = useContext(DataContext).filterserch;
  const chanfefilter = useContext(DataContext).chanfefilter;
  const OrderProgram = (data) => {
    let arryofprojects = [];
    const arryfulluser = data.map((el) => {
      return el;
    });

    const uniqueArray = arryfulluser.filter((item, index) => {
      return arryfulluser.indexOf(item) === index;
    });

    for (let i = 0; i < uniqueArray.length; i++) {
      const program = data.filter((item) => item === uniqueArray[i]);
      arryofprojects.push({ program });
    }

    return arryofprojects;
  };
  function FilterAllusers(arry, user) {
    if (user) {
      return arry.filter((el) => {
        return el.firstname === user[0] && el.lastname === user[1];
      });
    } else {
      return arry;
    }
  }
  function Filterprogram(arry, program) {
    if (program) {
      return arry.filter((el) => {
        return el.academicyear === program[0];
      });
    } else {
      return arry;
    }
  }
  const [listofprogram, setlistofprogram] = useState();
  const [filtercunter, setfiltercunter] = useState(0);
  const Taskeditfunc = async (type, value) => {
    // setChusenrikit(null);
    // Drawerforalltask();

    switch (type) {
      case "close":
        break;
      case "pending":
        break;
      case "open":
        break;
      case "forward":
        break;
      case "message":
        break;
      case "cost":
        break;
      case "edit":
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (!firstlode) {
      let intViewportWidth = window.innerWidth;
      if (intViewportWidth > 600) {
        setscrenphunesize(false);
      } else {
        setscrenphunesize(true);
      }
      let program = [];
      for (let i = 0; userlist?.length > i; i++) {
        if (userlist[i].academicyear) {
          program.push(userlist[i].academicyear);
        }
      }

      let resorginizprogram = OrderProgram(program, userlist);
      setlistofprogram(resorginizprogram);
      setAlluserarry(userlist);
      setlocallist(userlist);
      setfirstlode(true);
    } else {
      let cunter_num_of_filter = [false, false, false, false, false, false];

      let result = locallist;

      result = FilterAllusers(result, userfilter);
      if (userfilter) {
        cunter_num_of_filter[0] = true;
      } else {
        cunter_num_of_filter[0] = false;
      }
      result = Filterprogram(result, program);
      if (program) {
        cunter_num_of_filter[1] = true;
      } else {
        cunter_num_of_filter[1] = false;
      }
      let cunter = 0;
      cunter_num_of_filter.map((el) => {
        if (el) {
          cunter = cunter + 1;
        }
      });
      setfiltercunter(cunter);

      setAlluserarry(result);
    }
  }, [rerender]);

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

    for (let i = 0; userlist.length > i; i++) {
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
    setcunter(Alluserarry.length);
  };
  const clerallusers = () => {
    for (let i = 0; Alluserarry.length > i; i++) {
      checkboxref.current[i].checked = false;
    }
    setcunter(0);
  };
  const Tikettoquikeclose = (bulian, i) => {
    checkboxref.current[i].checked = bulian;

    if (bulian) {
      let num = cunter + 1;
      setcunter(num);
    } else {
      let num = cunter - 1;
      setcunter(num);
    }
  };
  const [presd, setpresd] = useState(false);
  const [filterpresd, setfilterpresd] = useState(false);

  return (
    <Contener Screnphunesize={screnphunesize}>
      <div className="Mangeroption_users">
      {lang?.lang102}
      <div className="div_MangerButton_users">
        <Buttonmuneu
        className="MangerButton"
          presd={filterpresd}
          onClick={() => {
            openfilter();
            setfilterpresd(!filterpresd);
          }}
        >
         <FaFilter style={{marginInlineEnd:"7px", marginTop:"-4px"}}/>  {lang?.lang248}
        </Buttonmuneu>
        {/* {filtercunter > 0 ? (
          <div> */}
        {/* <Badge
                dir="tlr"
                overflowCount={999}
                count={filtercunter}
                style={{
                  backgroundColor: "#EBBE74",
                  color: "black",
                  fontsize: "16px",
                  right: "13px",
                  // bottom: "18px",
                }}
              /> */}
        {/* </div>
        ) : null} */}
        <Buttonmuneu
        className="MangerButton"
          presd={presd}
          id="chusingbutoon"
          onClick={() => {
            Opquickctaskoption();
            setpresd(!presd);
          }}
        >
          <img src="/images/multipulchuis.svg" alt="" style={{marginInlineEnd:"7px", marginTop:"-4px"}}/> בחירה
        </Buttonmuneu>
        {/* <button className="MangerButton">
          <Link to="/SendMassege">שליחת הזמנה למשתמשים</Link>
        </button> */}
        <Buttonmuneu className="MangerButton shwobutton">
          <Link to="/Adduser" style={{color: ' #0f0743'}}>{lang?.lang244}</Link>
        </Buttonmuneu>
        {/* <button className="MangerButton shwobutton" onClick={AllOpenststus}>
          <p>
          {opentikitatatus ? "הצג כל פרטי המשתמש" : "סגור כל פרטי המשתמש"}{" "}
          </p>
        </button> */}

        <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}                    
>
          <button className="DropdownButton shwobuttondropdown">
            <BsThreeDotsVertical style={{width:"50px !important"}}/>
          </button>
        </Dropdown>
        </div>
      </div>
      <div className="haderflex">
        {Drawervisible ? (
          <Selectfilter>
            <div className="div_filter_users">
            <div className="div_Select_users">

            <Select
              showSearch
              placeholder={lang?.lang352}
              onChange={(value) => {
                setuserfilter(value);
                setrerender(!rerender);
              }}
            >
              <Option value={false}>{lang.lang352}</Option>

              {userlist
                ? userlist.map((el) => {
                    let fuulname = el.firstname + " " + el.lastname;
                    return (
                      <Option value={[el.firstname, el.lastname]}>
                        {fuulname}
                      </Option>
                    );
                  })
                : null}
            </Select>
            </div>
            <div className="div_Select_users">

            <Select
              showSearch
              placeholder={"כל התוכניות"}
              onChange={(value) => {
                setprogram(value);
                setrerender(!rerender);
              }}
            >
              <Option value={false}>כל התוכניות</Option>

              {listofprogram
                ? listofprogram.map((el, i) => {
                    return (
                      <Option key={i} value={[el.program[0]]}>
     <div style={{ width: "90%",display: "flex",justifyContent: "space-between", alignItems: "center"}}>

                        {el.program[0]}

                        <Badge
                          dir="tlr"
                          overflowCount={999}
                          count={el?.program?.length}
                          style={{
                            backgroundColor: "#EBBE74",
                            color: "black",
                            fontsize: "16px",
                          }}
                          /></div>
                          </Option>
                    );
                  })
                : null}
            </Select>
            </div>

            </div>
          </Selectfilter>

        ) : null}


        {Alluserarry
          ? Alluserarry.map((user, i) => {
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
              let taskforecheccard = (
                <Menu>
                  {/* עריכה */}
                  <Menu.Item
                    onClick={() => {
                      setuseridfortask(user.userguid);
                    }}
                  >
                    <img src="/images/pen.svg" alt="icon" /> {lang?.lang243}
                  </Menu.Item>
                  {/* שלח הודעה  */}
                  <Menu.Item>
                    <img src="/images/bubble.svg" alt="icon" /> {lang?.lang263}
                  </Menu.Item>
                  {/* מחיקה */}
                  <Menu.Item
                    onClick={() => {
                      setuseridfortask(user.userguid);
                    }}
                  >
                    <img src="/images/trash.svg" alt="icon" /> {lang?.lang147}
                  </Menu.Item>
                </Menu>
              );
              return (
                <Card
                className={quickclose && checkboxref.current[i].checked ?
                  "card_checked_border":quickclose?"card_checked_pointer": null}

                  bordered={false}
                  key={`${user}${i}`}
                  onClick={() => {
                    if (quickclose) {
                      if (!checkboxref.current[i].checked) {
                        Tikettoquikeclose(true, i);
                      } else {
                        Tikettoquikeclose(false, i);
                        checkboxref.current[i].checked = false;
                      }
                    } else {
                      SelfOpenststus(i);
                    }
                  }}
                >
                  <div>
                    <div className="yuser_name">
                      <div>
                        <Avatar size={38} icon={<UserOutlined />} style={{marginInlineEnd:"7px", marginTop:"-4px"}}/>{" "}
                        <span id="yuser_name">
   {user.firstname} {user.lastname}</span>
                      </div>
                      <div className="status_yuser_name">
                      <div className="level_neme">
            <Badge
              color={levelscolor}
            ></Badge>
            {levelname}
          </div>

                      {/* {cunter > 0 ? ( */}
                      <div className="open_inquiries"
                          onClick={() => {
                            gotolistoftask([
                              user.firstname + " " + user.lastname,
                              user.firstname,
                              user.lastname,
                            ]);
                          }}
                        >פניות פתוחות
                          <div className="count_open_inquiries"
                            // overflowCount={ 999}
                            // count={cunter === 0 ?"0":cunter}
                          >
                           {cunter}
                          </div> 
                          </div>
                      {/* ) : (
                        <div></div>
                        )} */}
                        <Dropdown
                      overlay={taskforecheccard}
                      className="action_yuser_name"
                      trigger={["click"]}
                    >
                      <BsThreeDotsVertical />
                    </Dropdown>

                    </div>
                    </div>

                    <input
                      type="checkbox"
                      id="horns"
                      name="horns"
                      className="closecheckboox"
                      ref={(el) => (checkboxref.current[i] = el)}
                      // value={el.ticketguid}
                    />
                    <div className="smallscreen">
                      <div
                        ref={(el) => (itemsRef.current[i] = el)}
                        style={{
                          display: "none",
                          color: "#807e94",
                          marginTop: "20px",
                        }}
                      >
                      <hr style={{borderTop: "1px solid #E9F0F8"}}/>
                        <OpenSmallscreencard user={user} />
                      </div>
                      <button
                        className="action_inquir_mobile"
                        onClick={() => {
                          setvisibletaskDrawer(!visibletaskDrawer);
                          setuseridfortask(user.userguid);
                        }}
                      >
                        <BsThreeDotsVertical />
                      </button>
                    </div>

                    <div className="fullscreen">
                      <OpenSmallscreencard user={user} />
                    </div>
                  </div>
                </Card>
              );
            })
          : null}
        {/* משימות לגל כרטיס בנפד */}

        <QuickcloDrawerstyle
          placement={"bottom"}
          onClose={() => {
            setvisibletaskDrawer(!visibletaskDrawer);
          }}
          visible={visibletaskDrawer}
          height={400}
        >
          <ListtaskforEdit
            action={Taskeditfunc}
            close={() => {
              setvisibletaskDrawer(!visibletaskDrawer);
            }}
          />
        </QuickcloDrawerstyle>
        {/* <ListtaskforEditquik
          action={Taskeditfunc}
          close={() => {
            setvisibletaskDrawer(!visibletaskDrawer);
          }}
        /> */}
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
