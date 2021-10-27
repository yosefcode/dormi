import React, { useState, useEffect, useContext, useRef } from "react";
import {
  Contener,
  Drawerstyle,
  Selectfilter,
  QuickcloDrawerstyle,
} from "../styelscomponents/Ticketliststyel";
import DataContext from "../DataContext";
import { FaFilter } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import Exelexport from "../components/lissofreqhelpers/Exelexport";
import { PostToServer } from "../serveses";
import Formtaskfromlist from "../components/Formtaskfromlist";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Ordercareguris,
  Orderlocation,
  OrderUser,
  Orderstatusname,
} from "../components/lissofreqhelpers/Orderdata";
import {
  FilterUrgency,
  FilterAllOpenCategoris,
  FilterAllusers,
  Filterlocation,
  Filterdelittask,
  FilterAllstatus,
} from "../components/lissofreqhelpers/FilteringFunction";
import {
  Apruchclose,
  Posteditofticket,
  Closetask,
  Switchurgency,
  Switcstatus,
} from "../components/lissofreqhelpers/Ticeteditmenu";
import {
  Carddatasmall,
  Carddatabig,
  Urgensy,
} from "../components/lissofreqhelpers/Carddata";
import { FiltersForsort } from "../components/lissofreqhelpers/FilterInputs";
import {
  SendmasegeTask,
  Sentostaf,
  Carddata,
  Quickclosebuuton,
} from "../components/lissofreqhelpers/Tasks";
import { ModalStyeld } from "../styelscomponents/modaldtyeld";

import { Card, Menu, Dropdown } from "antd";

const Ticketlis = ({ Repeatedtask }) => {
  const itemsRef = useRef([]);
  const checkboxref = useRef([]);

  // רוטר טיפול במשימות
  const ticketruter = "ticket";
  document.body.style.backgroundColor = "#e5e5e5";
  const loginstatus = useContext(DataContext).loginstatus;
  const ticketlist = useContext(DataContext).ticketlist;
  const defoltlang = useContext(DataContext).lang;
  const changeticketlist = useContext(DataContext).changeticketlist;
  const lang = defoltlang?.lang;
  let userlevelid = loginstatus?.levelid;
  let userid = loginstatus?.userid;

  // עדכון דאטא
  const [updaterefresh, setupdaterefresh] = useState(false);
  const Updatedata = async () => {
    let ruteruserid = "ticketlist";

    let ticketlis = await PostToServer(ruteruserid, { userid: userid });
    changeticketlist(ticketlis);

    setAllTikets(ticketlis);

    setarresticets(true);
    console.log("res", ticketlis);
    setupdaterefresh(!updaterefresh);
  };

  const [locallist, setlocallist] = useState();
  const [firstlode, setlfirstlode] = useState();
  //  הגדארות משתנות לפי גודל מסך
  const [screnphunesize, setscrenphunesize] = useState();
  const [fullcard, setfullcard] = useState(false);
  //  הגדרת מאפיין - משימות מתוזמנות או רגילות

  const [Drawervisible, setDrawervisible] = useState(false);
  const openfilter = () => {
    setDrawervisible(!Drawervisible);
  };

  /// סטייטס לכל הסינונים
  const [AllTikets, setAllTikets] = useState([]);

  const [filter, setfilter] = useState(false);
  const [filterarry, setfilterarry] = useState();
  const [AllOpenCategoris, setAllOpenCategoris] = useState();
  const [filterallUrgency, setfilterallUrgency] = useState();

  const [locationfilter, setlocationfilter] = useState();
  const [chingeurgency, setchingeurgency] = useState(false);
  const [filteruser, setfilteruser] = useState();
  const [selectedstatus, setselectedstatus] = useState();

  // רשימת חדרים ומיכומים

  // עדכון שינוי סטטוס דחיפות  פנייה
  function findChangeurgency(value) {
    let requst = ticketlist.findIndex((Item) => Item.ticketid === value[1]);
    ticketlist[requst].urgencyadmin = value[2];
    setchingeurgency(!chingeurgency);
    setlocallist(ticketlist);
  }
  // עדכון שינוי סטטוס טיפול פנייה

  function findChangstatus(value) {
    let requst = ticketlist.findIndex((Item) => Item.ticketid === value[1]);

    ticketlist[requst].statusname = value[2];

    setchingeurgency(!chingeurgency);
    setlocallist(ticketlist);
  }

  const [nolist, setnolist] = useState(false);

  const Checkstatuslist = (value) => {
    setnolist(value);
  };

  // רשימת פקודות לשיונוי כרטיס

  const [Sendmassege, setSendmassege] = useState(false);
  const [problemid, setproblemid] = useState();
  const onsendmassege = (value, id) => {
    setSendmassege(false);
    console.log(value, problemid);
  };

  const [Referraltostaff, setReferraltostaff] = useState(false);

  const onReferr = (value, id) => {
    setSendmassege(false);
    console.log(value, problemid);
  };

  const [openaptuchclosemodal, setopenaptuchclosemodal] = useState(false);
  const closeopenaptuchclosemoda = () => {
    setopenaptuchclosemodal(false);
  };
  // פעולה מהירה

  const [quickclose, setquickclose] = useState(false);
  const [visible, setvisible] = useState(false);

  const [arresticets, setarresticets] = useState(false);

  const [cunter, setcunter] = useState(0);

  const closeMenue = () => {
    setvisible(!visible);
  };
  // סוגר הכל
  const Opquickctaskoption = () => {
    // setvisible(false);

    if (quickclose) {
      setvisible(false);
      for (let i = 0; AllTikets.length > i; i++) {
        checkboxref.current[i].checked = false;
      }

      setcunter(0);
    }
    setquickclose(!quickclose);
  };

  //  מבטל סימונים
  const cancelClosep = (value) => {
    for (let i = 0; AllTikets.length > i; i++) {
      checkboxref.current[i].checked = false;
    }
    setvisible(false);
    setcunter(0);
  };
  const Tikettoquikeclose = (bulian, i) => {
    // debugger;
    checkboxref.current[i].checked = bulian;

    if (bulian) {
      let num = cunter + 1;
      setcunter(num);
    } else {
      let num = cunter - 1;
      setcunter(num);
    }
  };

  const Oqquickaction = async (type, value) => {
    let arrytecetsalltask = [];
    let currentref;
    // let x = checkboxref.current;
    // debugger;
    checkboxref.current.map((ref) => {
      if (ref.checked) {
        arrytecetsalltask.push({ ticketguid: ref.value });
        for (var i = 0; i < AllTikets.length; i++) {
          if (AllTikets[i].ticketguid === ref.value) {
            AllTikets.splice(i, 1);
          }
        }
        // currentref = locallist.filter((el) => el.ticketguid !== ref.value);
      }
    });
    Opquickctaskoption();

    let obj;
    let res;
    switch (type) {
      case "close":
        obj = {
          task: "close",
          userid: userid,
          tickets: arrytecetsalltask,
        };
        res = await PostToServer(ticketruter, obj);

        console.log("after", AllTikets);
        setAllTikets(AllTikets);
        break;
      case "pending":
        obj = {
          task: "pending",
          userid: userid,
          tickets: arrytecetsalltask,
        };
        break;
      case "open":
        obj = {
          task: "open",
          userid: userid,
          tickets: arrytecetsalltask,
        };
        break;
      case "forward":
        obj = {
          task: "forward",
          userid: userid,
          tickets: arrytecetsalltask,
          forwardtouser: value,
        };
        break;
      default:
        break;
    }

    let arr = [];
    for (let i = 0; i < AllTikets.length; i++) {
      if (checkboxref.current[i].value === AllTikets[i].ticketguid) {
        arr.push(checkboxref.current[i]);
      }
    }
    checkboxref.current = arr;
    // setarresticets(true);

    Updatedata();
    console.log(res);
  };

  const [Permission, setPermission] = useState();
  useEffect(() => {
    if (!firstlode) {
      // setfilteruser();
      let intViewportWidth = window.innerWidth;
      if (userlevelid === 10 || userlevelid === 5 || userlevelid === 13) {
        setPermission(true);
      } else {
        setPermission(false);
      }
      if (intViewportWidth > 600) {
        setscrenphunesize(false);
      } else {
        setscrenphunesize(true);
      }
      setlocallist(ticketlist);

      let breadcrumb = [];

      let locationName = [];
      let users = [];
      let statusname = [];

      for (let i = 0; ticketlist?.length > i; i++) {
        breadcrumb.push(ticketlist[i].breadcrumb);

        let user = ticketlist[i].firstname + " " + ticketlist[i].lastname;

        users.push({
          user: user,
          firstname: ticketlist[i].firstname,
          lastname: ticketlist[i].lastname,
        });
        locationName.push(ticketlist[i].locationName);
        statusname.push(ticketlist[i].statusname);
      }

      let resultcategoris = Ordercareguris(breadcrumb);
      let resultkocation = Orderlocation(locationName, ticketlist);
      let resultusers = OrderUser(users);
      let resultstatusname = Orderstatusname(statusname);

      let allcategoristofilter = {
        breadcrumb: resultcategoris,
        locationName: resultkocation,
        ticketlist: ticketlist,
        users: resultusers,
        statusname: resultstatusname,
      };

      setfilterarry(allcategoristofilter);
      setlfirstlode(true);

      setAllTikets(ticketlist);
    } else {
      let result = ticketlist;

      // let result = locallist;
      // פילטר לפי קטגוריות
      result = FilterAllOpenCategoris(result, AllOpenCategoris);
      // פילטר לפי דחיפות
      result = FilterUrgency(result, filterallUrgency);

      //פילטר לפי מיקום
      result = Filterlocation(result, locationfilter);
      // פילטר לפי משתמשים
      result = FilterAllusers(result, filteruser);

      // פילטר לפי סטטוס
      result = FilterAllstatus(result, selectedstatus);

      // result = Filterdelittask(result, arrytaskforclose);
      // if (arresticets) {
      //   for (let i = 0; AllTikets.length > i; i++) {
      //     checkboxref.current[i].checked = false;
      //   }
      //   debugger;
      //   setarresticets(false);
      // }

      // if (result.length >= 1) {
      //   Checkstatuslist(false);
      // } else {
      //   Checkstatuslist(true);
      // }

      setAllTikets(result);
    }
  }, [
    AllOpenCategoris,
    filterallUrgency,
    chingeurgency,
    nolist,
    arresticets,
    locationfilter,
    filteruser,
    selectedstatus,
    fullcard,
    updaterefresh,
  ]);

  const SelfOpenststus = (i) => {
    if (itemsRef.current[i].style.display === "inherit") {
      itemsRef.current[i].style.display = "none";
    } else {
      itemsRef.current[i].style.display = "inherit";
    }
  };
  const [opentikitatatus, setopentikitatatus] = useState(true);
  const AllOpenststus = () => {
    setopentikitatatus(!opentikitatatus);
    for (let i = 0; AllTikets.length > i; i++) {
      if (fullcard) {
        itemsRef.current[i].style.display = "none";

        setfullcard(false);
      } else {
        itemsRef.current[i].style.display = "inherit";

        setfullcard(true);
      }
    }
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <p className="Dropdown-item">הצג פניות פתוחות</p>
      </Menu.Item>

      <Menu.Item>
        <p className="Dropdown-item" onClick={AllOpenststus}>
          {opentikitatatus ? "הצג כל פרטי הפנייה" : "סגור כל פרטי הפנייה"}{" "}
        </p>
      </Menu.Item>
    </Menu>
  );
  const [edittask, setedittask] = useState(true);
  const [dataforedit, setdataforedit] = useState();
  const Goback = () => {
    setedittask(true);
  };
  const [claerapruchform, setclaerapruchform] = useState(false);
  console.log(AllTikets.length);
  return (
    <div>
      {edittask ? (
        <Contener Screnphunesize={screnphunesize}>
          <div className="Mangeroption">
            <button className="MangerButton" onClick={openfilter}>
              {lang?.lang196} <FaFilter />
            </button>

            <button className="MangerButton" onClick={Opquickctaskoption}>
              <img src="/images/multipulchuis.svg" /> בחירה
            </button>
            <button className="MangerButton shwobutton">
              הצג פניות פתוחות
            </button>
            <button className="MangerButton shwobutton" onClick={AllOpenststus}>
              הצג את כל פרטי הפנייה
            </button>
            <Exelexport data={AllTikets} />

            <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
              <button className="DropdownButton shwobuttondropdown">
                <BsThreeDotsVertical />
              </button>
            </Dropdown>
          </div>
          {Drawervisible && !screnphunesize ? (
            <Selectfilter>
              <FiltersForsort
                filterarry={filterarry}
                setingAllOpenCategoris={(value) => {
                  setAllOpenCategoris(value);
                }}
                setingfilterallUrgency={(value) => {
                  setfilterallUrgency(value);
                }}
                setlocationsort={(value) => {
                  setlocationfilter(value);
                }}
                setUserFilter={(value) => {
                  setfilteruser(value);
                }}
                selectedstatus={(value) => {
                  setselectedstatus(value);
                }}
              />
            </Selectfilter>
          ) : null}
          {/* כמה פניות יש */}
          <p id="discriptun">מציג {AllTikets.length} פניות : </p>
          {AllTikets.length > 0 ? (
            AllTikets.map((el, i) => {
              // משימות עריכה
              const setingmenu = (
                <Menu>
                  {/* שלח הודעה */}
                  <Menu.Item
                    onClick={() => {
                      setSendmassege(true);
                      setproblemid(el.ticketguid);
                    }}
                  >
                    {lang?.lang263}
                  </Menu.Item>
                  {/* הפנה לאיש צוות */}
                  <Menu.Item
                    onClick={() => {
                      setReferraltostaff(true);
                      setproblemid(el.ticketguid);
                    }}
                  >
                    {lang?.lang240}
                  </Menu.Item>

                  {/* סגירה מתקדמת */}
                  <Menu.Item
                    onClick={() => {
                      setopenaptuchclosemodal(true);

                      setproblemid(el.ticketguid);
                    }}
                  >
                    {lang?.lang208}
                  </Menu.Item>
                  {/* עריכה */}
                  <Menu.Item
                    onClick={() => {
                      setedittask(false);
                      setdataforedit(el);
                    }}
                  >
                    {lang?.lang243}
                  </Menu.Item>
                  {/* מחיקה */}
                  <Menu.Item
                  // onClick={() => Posteditofticket("Delet", el.ticketguid)}
                  >
                    {lang?.lang147}
                  </Menu.Item>
                </Menu>
              );

              /// הגדרת סטטוס בקשה ודחיפות לכל כרטיס
              let resulturgency = Switchurgency(
                el.urgencyadmin,
                lang?.lang122,
                lang?.lang121,
                lang?.lang120
              );

              let urgency = resulturgency?.urgency;
              let urgencytext = resulturgency?.urgencytext;

              let resultstatus = Switcstatus(
                el.statusname,
                lang?.lang162,
                lang?.lang174
              );

              let status = resultstatus?.status;
              let statustext = resultstatus?.statustext;

              return (
                <Card bordered={false} key={i}>
                  <div
                    onClick={() => {
                      if (quickclose) {
                        if (!checkboxref.current[i].checked) {
                          Tikettoquikeclose(true, i);
                        } else {
                          Tikettoquikeclose(false, i);

                          // checkboxref.current[i].checked = false;
                        }
                      } else {
                        SelfOpenststus(i);
                      }
                    }}
                  >
                    <p id="discriptun">
                      {el.categoryname} - {el.categoryname}
                    </p>
                    {/* <label for="horns">{lang?.lang145}</label> */}

                    <input
                      type="checkbox"
                      id="horns"
                      name="horns"
                      className="closecheckboox"
                      ref={(el) => (checkboxref.current[i] = el)}
                      // checked={false}
                      value={el.ticketguid}
                    />
                    <Carddatasmall
                      el={el}
                      i={i}
                      status={status}
                      statustext={statustext}
                      quickclose={quickclose}
                      Repeatedtask={Repeatedtask}
                    />
                    <div
                      ref={(el) => (itemsRef.current[i] = el)}
                      style={{
                        display: "none",
                        color: "#807e94",
                        marginTop: "20px",
                      }}
                    >
                      <hr />

                      <Carddatabig el={el} />
                    </div>
                    <div className="action">
                      <Urgensy
                        permission={Permission}
                        el={el}
                        urgency={urgency}
                        urgencytext={urgencytext}
                        findChangeurgency={findChangeurgency}
                      />
                    </div>

                    <Dropdown
                      overlay={setingmenu}
                      placement="bottomLeft"
                      trigger={["click"]}
                      className="cardbutton"
                    >
                      <button>
                        <BsThreeDotsVertical />
                      </button>
                    </Dropdown>
                  </div>
                </Card>
              );
            })
          ) : (
            <div>{lang?.lang181}</div>
          )}
          {/* פתיחת מגירה לפלאפון */}
          {screnphunesize ? (
            <Drawerstyle
              title="סינון"
              placement={"bottom"}
              // closable={false}
              onClose={() => {
                setDrawervisible(false);
              }}
              visible={Drawervisible}
              key={"bottom"}
              footer={
                <button
                  className="ok"
                  onClick={() => {
                    setDrawervisible(false);
                  }}
                >
                  אישור
                  <FaFilter />
                </button>
              }
              height={450}
              bodyStyle={{
                textalign: "center",
              }}
            >
              <FiltersForsort
                filterarry={filterarry}
                setingAllOpenCategoris={(value) => {
                  setAllOpenCategoris(value);
                }}
                setingfilterallUrgency={(value) => {
                  setfilterallUrgency(value);
                }}
                setlocationsort={(value) => {
                  setlocationfilter(value);
                }}
                setUserFilter={(value) => {
                  setfilteruser(value);
                }}
                selectedstatus={(value) => {
                  setselectedstatus(value);
                }}
              />
            </Drawerstyle>
          ) : null}
          <QuickcloDrawerstyle
            placement={"bottom"}
            onClose={closeMenue}
            // mask={false}
            visible={visible}
            contentWrapperStyle={{
              backgroundColor: "transparent",
            }}
            bodyStyle={{
              backgroundColor: "transparent",
            }}
            height={450}
            footer={
              <div>
                {quickclose ? (
                  <Closetask
                    data={cunter}
                    cancelClosep={cancelClosep}
                    opendrwor={closeMenue}
                  />
                ) : null}
              </div>
            }
            // zIndex={-1}
          >
            <Quickclosebuuton action={Oqquickaction} />
          </QuickcloDrawerstyle>
          {quickclose ? (
            // פופ אפ למחיקות מרובה של כרטיסים

            <Closetask
              data={cunter}
              cancelClosep={cancelClosep}
              opendrwor={closeMenue}
            />
          ) : null}
          {/* מודלוים משימות כרטיס */}
          {/* סגריה מתקדמת */}
          <ModalStyeld
            title={`${lang?.lang208} - ${problemid}`}
            visible={openaptuchclosemodal}
            onCancel={() => {
              setopenaptuchclosemodal(false);
              setclaerapruchform(true);
            }}
            footer={false}
          >
            <Apruchclose
              ticketguid={problemid}
              Closemodal={closeopenaptuchclosemoda}
              Clearform={claerapruchform}
            />
          </ModalStyeld>
          {/* שלח הודעה */}
          <ModalStyeld
            title={lang?.lang263}
            visible={Sendmassege}
            onCancel={() => {
              setSendmassege(false);
            }}
            footer={false}
          >
            <SendmasegeTask onsendmassege={onsendmassege} />
          </ModalStyeld>
          {/* שלח לאיש צוות */}
          <ModalStyeld
            title={lang?.lang240}
            visible={Referraltostaff}
            onCancel={() => {
              setReferraltostaff(false);
            }}
            footer={false}
          >
            <Sentostaf onReferr={onReferr} />
          </ModalStyeld>
        </Contener>
      ) : (
        <Formtaskfromlist Goback={Goback} data={dataforedit} />
      )}
    </div>
  );
};

export default Ticketlis;
