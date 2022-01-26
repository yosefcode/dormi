import React, { useState, useEffect, useContext, useRef } from "react";
import {
  Contener,
  Drawerstyle,
  Selectfilter,
  QuickcloDrawerstyle,
  Quickclomodaltyle,
} from "../styelscomponents/Ticketliststyel";
import DataContext from "../DataContext";
import { FaFilter } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import Exelexport from "../components/lissofreqhelpers/Exelexport";
import { PostToServer } from "../serveses";
import Formtaskfromlist from "../components/Formtaskfromlist";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Buttonmuneu } from "../styelscomponents/Buttonmuneu";

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
import { Carddatabig, Urgensy } from "../components/lissofreqhelpers/Carddata";
import { FiltersForsort } from "../components/lissofreqhelpers/FilterInputs";
import {
  SendmasegeTask,
  Sentostaf,
  Carddata,
  Quickclosebuuton,
  ListtaskforEdit,
} from "../components/lissofreqhelpers/Tasks";
import { ModalStyeld } from "../styelscomponents/modaldtyeld";

import { Card, Menu, Dropdown, Badge } from "antd";

const Ticketlis = ({ Repeatedtask, filtervalue }) => {
  const itemsRef = useRef([]);
  const checkboxref = useRef([]);
  const filterserch = useContext(DataContext).filterserch;
  const chanfefilter = useContext(DataContext).chanfefilter;
  // רוטר טיפול במשימות
  const ticketruter = "ticket";
  document.body.style.backgroundColor = "rgba(250, 252, 255, 1)";
  const loginstatus = useContext(DataContext).loginstatus;
  const ticketlist = useContext(DataContext).ticketlist;
  const defoltlang = useContext(DataContext).lang;
  const changeticketlist = useContext(DataContext).changeticketlist;
  const lang = defoltlang?.lang;
  let userlevelid = loginstatus?.levelid;
  let userid = loginstatus?.userid;
  const [locallist, setlocallist] = useState();
  const [firstlode, setlfirstlode] = useState();
  const [filtercunter, setfiltercunter] = useState(0);
  // עדכון דאטא
  const [updaterefresh, setupdaterefresh] = useState(false);
  const Updatedata = async () => {
    let ruteruserid = "ticketlist";

    let ticketlis = await PostToServer(ruteruserid, { userid: userid });

    changeticketlist(ticketlis);

    setlfirstlode(false);

    setupdaterefresh(!updaterefresh);
  };

  //  הגדרות משתנות לפי גודל מסך
  const [screnphunesize, setscrenphunesize] = useState();
  const [fullcard, setfullcard] = useState(false);
  //  הגדרת מאפיין - משימות מתוזמנות או רגילות

  const [Drawervisible, setDrawervisible] = useState(false);
  const [Vmodalquickclos, setVmodalquickclos] = useState(false);
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
  const findChangeurgency = async (value) => {
    let obj = {
      task: "urgencyadmin",
      userid: userid,
      tickets: [
        {
          ticketguid: value[1],
        },
      ],
      urgencyadmin: parseInt(value[2]),
    };

    await PostToServer(ticketruter, obj);

    Updatedata();
  };
  // עדכון שינוי סטטוס טיפול פנייה

  function findChangstatus(value, type) {
    let newstatusname;
    switch (type) {
      case "open":
        newstatusname = lang.lang162;
        break;
      case "pending":
        newstatusname = lang.lang174;
        break;
      default:
    }
    let requst = ticketlist.findIndex((Item) => Item.ticketguid === value);
    ticketlist[requst].statusname = newstatusname;

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
  // סגירה רגילה

  const Drawerforalltask = () => {
    setvisibletaskDrawer(false);
  };
  const [visibletaskDrawer, setvisibletaskDrawer] = useState(false);
  const [Chusenrikit, setChusenrikit] = useState();
  const Taskeditfunc = async (type, value) => {
    setChusenrikit(null);
    Drawerforalltask();
    console.log(Chusenrikit, type, value);
    let arrytecetsalltask = [{ ticketguid: Chusenrikit }];
    let obj;

    switch (type) {
      case "close":
        obj = {
          task: "close",
          userid: userid,
          tickets: arrytecetsalltask,
        };
        await PostToServer(ticketruter, obj);
        Updatedata();

        break;
      case "pending":
        obj = {
          task: "pending",
          userid: userid,
          tickets: arrytecetsalltask,
        };
        await PostToServer(ticketruter, obj);
        Updatedata();
        break;
      case "open":
        obj = {
          task: "open",
          userid: userid,
          tickets: arrytecetsalltask,
        };
        await PostToServer(ticketruter, obj);
        Updatedata();
        break;
      case "forward":
        obj = {
          task: "forward",
          userid: userid,
          tickets: arrytecetsalltask,
          forwardtouser: value,
        };
        break;
      case "message":
        setSendmassege(true);
        break;
      case "cost":
        setopenaptuchclosemodal(true);

        break;
      case "edit":
        let findtiket = ticketlist.filter((el) => {
          return el.ticketguid === Chusenrikit;
        });
        debugger;
        setdataforedit(findtiket[0]);
        setedittask(false);
        break;
      default:
        break;
    }
  };

  const [quickclose, setquickclose] = useState(false);
  const [visible, setvisible] = useState(false);
  const canceljob = useRef(false);

  const [cancelquickfunc, setcancelquickfunc] = useState({
    status: false,
    type: null,
  });
  const [cunter, setcunter] = useState(0);
  const canceling = async () => {
    canceljob.current = true;
    setcancelquickfunc({ status: false, type: null });

    console.log("stop");

    console.log(AllTikets);
    let ruteruserid = "ticketlist";

    let ticketlis = await PostToServer(ruteruserid, { userid: userid });

    setAllTikets(ticketlis);

    setcunter(0);
  };
  const closeMenue = () => {
    if (window.innerWidth > 600) {
      if (cunter > 0 && !Vmodalquickclos) {
        setVmodalquickclos(true);
      } else {
        setVmodalquickclos(false);
      }
    } else {
      if (cunter > 0 && !visible) {
        setvisible(true);
      } else {
        setvisible(false);
      }
    }
  };
  const closepupup = () => {
    setquickclose(!quickclose);
  };
  // סוגר הכל
  const Opquickctaskoption = () => {
    setvisible(false);

    if (quickclose) {
      for (let i = 0; AllTikets.length > i; i++) {
        checkboxref.current[i].checked = false;
      }
      setcunter(0);

      closepupup();
    } else {
      closepupup();
    }
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
    checkboxref.current[i].checked = bulian;

    if (bulian) {
      let num = cunter + 1;
      setcunter(num);
    } else {
      let num = cunter - 1;
      setcunter(num);
    }
  };

  const OqquickActionFunc = async (arrytecetsalltask, type, value) => {
    setcancelquickfunc({ status: false, type: null });

    setcunter(0);
    closepupup();

    if (!canceljob.current) {
      console.log("startingfunc");

      let obj;

      switch (type) {
        case "close":
          let closeobj = {
            task: "close",
            userid: userid,
            tickets: arrytecetsalltask,
          };

          await PostToServer(ticketruter, closeobj);

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

      if (type !== "close") {
        let res = await PostToServer(ticketruter, obj);
        console.log(res);
      }
    } else {
      canceljob.current = false;
    }
    Updatedata();
  };
  const Oqquickaction = async (type, value) => {
    switch (type) {
      case "close":
        setcancelquickfunc({ status: true, type: "close" });

        break;
      case "pending":
        setcancelquickfunc({ status: true, type: "pending" });

        break;
      case "open":
        setcancelquickfunc({ status: true, type: "open" });

        break;
      case "forward":
        setcancelquickfunc({ status: true, type: "forward" });

        break;
      default:
        break;
    }
    let arrytecetsalltask = [];
    // let x = AllTikets;

    let arr = [];
    for (let i = 0; i < AllTikets.length; i++) {
      if (checkboxref.current[i].value === AllTikets[i].ticketguid) {
        arr.push(checkboxref.current[i]);
      }
    }
    checkboxref.current = arr;
    checkboxref.current.map((ref) => {
      if (ref?.checked) {
        arrytecetsalltask.push({ ticketguid: ref.value });
        if (type === "pending" || type === "open") {
          findChangstatus(ref.value, type);
        }
        if (type === "close") {
          for (var i = 0; i < AllTikets.length; i++) {
            if (AllTikets[i].ticketguid === ref.value) {
              AllTikets.splice(i, 1);
            }
          }
        }
      }
    });

    closeMenue();
    for (let i = 0; locallist.length > i; i++) {
      checkboxref.current[i].checked = false;
    }
    setTimeout(() => OqquickActionFunc(arrytecetsalltask, type, value), 2000);
  };

  const [Permission, setPermission] = useState();
  useEffect(() => {
    if (!firstlode) {
      // setfilteruser();
      // סננים ממסכים אחרים
      // filtervalue

      if (filterserch.categoris) {
        setAllOpenCategoris([filterserch.categoris]);

        filterserch.categoris = false;
        chanfefilter(filterserch);
      }
      if (filterserch.location) {
        filterserch.location = false;
        chanfefilter(filterserch);
        setlocationfilter([filterserch.location]);
      }
      if (filterserch.user) {
        setfilteruser(filterserch.user);
        filterserch.user = false;
      }

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

      let resultcategoris = Ordercareguris(breadcrumb, ticketlist);
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
      let result = locallist;
      // פילטר לפי קטגוריות
      let cunter_num_of_filter = [false, false, false, false, false, false];
      result = FilterAllOpenCategoris(result, AllOpenCategoris);

      if (AllOpenCategoris) {
        if (AllOpenCategoris[0]) {
          cunter_num_of_filter[0] = true;
        } else {
          cunter_num_of_filter[0] = false;
        }
      } else {
        cunter_num_of_filter[0] = false;
      }
      // פילטר לפי דחיפות
      result = FilterUrgency(result, filterallUrgency);
      if (filterallUrgency) {
        cunter_num_of_filter[1] = true;
      } else {
        cunter_num_of_filter[1] = false;
      }
      //פילטר לפי מיקום
      result = Filterlocation(result, locationfilter);
      if (locationfilter) {
        if (locationfilter[0]) {
          cunter_num_of_filter[2] = true;
        } else {
          cunter_num_of_filter[2] = false;
        }
      } else {
        cunter_num_of_filter[2] = false;
      }

      // פילטר לפי משתמשים
      result = FilterAllusers(result, filteruser);
      if (filteruser) {
        cunter_num_of_filter[3] = true;
      } else {
        cunter_num_of_filter[3] = false;
      }
      // פילטר לפי סטטוס
      result = FilterAllstatus(result, selectedstatus);
      if (selectedstatus) {
        cunter_num_of_filter[4] = true;
      } else {
        cunter_num_of_filter[4] = false;
      }
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
      // let cuntefilters = cunter_num_of_filter.indexOf(true, 3);
      let cunter = 0;
      cunter_num_of_filter.map((el) => {
        if (el) {
          cunter = cunter + 1;
        }
      });

      setfiltercunter(cunter);
      setAllTikets(result);
    }
  }, [
    // AllOpenCategoris,
    // filterallUrgency,
    // chingeurgency,
    // nolist,

    // locationfilter,
    // filteruser,
    // selectedstatus,
    // fullcard,
    updaterefresh,
    // firstlode,
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
  const [filterpresd, setfilterpresd] = useState(false);
  const [presd, setpresd] = useState(false);
  const [visabletaskmodal, setvisabletaskmodal] = useState(false);

  return (
    <div >
      {edittask ? (
        <Contener Screnphunesize={screnphunesize} >
          <div className="Mangeroption">
          {Repeatedtask ? "מטלות מתוזמנות": lang?.lang196} 
           <div className="div_MangerButton">
            <Buttonmuneu
            className="MangerButton"
              presd={Drawervisible}
              onClick={() => {
                openfilter();

                setfilterpresd(!filterpresd);
              }}
            > 
              <FaFilter style={{marginLeft:"7px", marginTop:"-4px"}}/> סינון
              {filtercunter > 0 ? (
                <div>
                  <Badge
                    dir="tlr"
                    overflowCount={999}
                    count={filtercunter}
                    style={{
                      backgroundColor: "#EBBE74",
                      color: "black",
                      fontsize: "16px",
                      right: "13px",
                      bottom: "0px",
                    }}
                  />
                </div>
              ) : null}
            </Buttonmuneu>

            <Buttonmuneu           
              className="MangerButton"

              presd={presd}
              onClick={() => {
                Opquickctaskoption();
                setpresd(!presd);
              }}
            >
              <img src="/images/multipulchuis.svg" alt="" style={{marginLeft:"7px", marginTop:"-4px"}}/> בחירה
            </Buttonmuneu>
            <Buttonmuneu className="MangerButton shwobutton">
              הצג פניות פתוחות
            </Buttonmuneu>
            <div className="shwobutton" style={{    width: "24%"}}>
            <Exelexport data={AllTikets} />
            </div>

            <Dropdown  overlay={menu} placement="bottomLeft" trigger={["click"]}>
              <button className="DropdownButton shwobuttondropdown_header">
                <BsThreeDotsVertical />
              </button>
            </Dropdown>
            </div>

          </div>
          {Drawervisible && !screnphunesize ? (
            <Selectfilter>
              <FiltersForsort
                filterarry={filterarry}
                filteruser={filteruser}
                setingAllOpenCategoris={(value) => {
                  setAllOpenCategoris(value);
                  setupdaterefresh(!updaterefresh);
                }}
                setingfilterallUrgency={(value) => {
                  setfilterallUrgency(value);
                  setupdaterefresh(!updaterefresh);
                }}
                setlocationsort={(value) => {
                  setlocationfilter(value);
                  setupdaterefresh(!updaterefresh);
                }}
                setUserFilter={(value) => {
                  setfilteruser(value);
                  setupdaterefresh(!updaterefresh);
                }}
                selectedstatus={(value) => {
                  setselectedstatus(value);
                  setupdaterefresh(!updaterefresh);
                }}
                clear={() => {
                  setAllOpenCategoris(false);
                  setfilterallUrgency(false);
                  setlocationfilter(false);
                  setfilteruser(false);
                  setselectedstatus(false);
                  setupdaterefresh(!updaterefresh);
                }}
                openfilter={openfilter}
              />

            </Selectfilter>
          ) : null}
          {/* כמה פניות יש */}
          <p id="number_inquiries">מציג {AllTikets?.length} פניות : </p>
          {AllTikets?.length > 0 ? (
            AllTikets.map((el, i) => {
              // משימות עריכה
              const setingmenu = (
                <Menu>
                  {/* שלח הודעה */}
                  <Menu.Item
                    onClick={() => {
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
                <Card
                className={quickclose && checkboxref.current[i].checked ?
                  "card_checked_border":quickclose?"card_checked_pointer": null}
                  bordered={false}
                  key={i}
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
                  <div className="div_card">
                      <span id="displyid_desktop">{el.ticketid}</span>
                      <div className="inquir">
                      <div id="description">
                        {el.breadcrumb} - {el.categoryname}<br/>
                      <p id="cooment"> {el.comments}</p>
                      </div>

                      <div className="Smallcard">
                        {Repeatedtask ? (
                          <div className="task_todo">
                            <svg
                              width="12"
                              height="10"
                              viewBox="0 0 12 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{marginLeft:8}}
                            >
                              <path
                                d="M2.25854 0.25L1.09188 1.41667H0.166748V2.58333H1.57495L3.08341 1.07487L2.25854 0.25ZM4.25008 1.41667V2.58333H11.8334V1.41667H4.25008ZM2.25854 3.75L1.09188 4.91667H0.166748V6.08333H1.57495L3.08341 4.57487L2.25854 3.75ZM4.25008 4.91667V6.08333H11.8334V4.91667H4.25008ZM1.33341 8.125C1.10135 8.125 0.878791 8.21719 0.714696 8.38128C0.550602 8.54538 0.458415 8.76794 0.458415 9C0.458415 9.23206 0.550602 9.45462 0.714696 9.61872C0.878791 9.78281 1.10135 9.875 1.33341 9.875C1.56548 9.875 1.78804 9.78281 1.95213 9.61872C2.11623 9.45462 2.20841 9.23206 2.20841 9C2.20841 8.76794 2.11623 8.54538 1.95213 8.38128C1.78804 8.21719 1.56548 8.125 1.33341 8.125ZM4.25008 8.41667V9.58333H11.8334V8.41667H4.25008Z"
                                fill="#0F0743"
                              />
                            </svg>
                            מטלה מתוזמנת{" "}
                          </div>
                        ) : (
                          <div style={{display: "flex"}}>
                            <Badge
                              id="status"
                              color={status}
                              text={statustext}
                            />
                            <span className="pointerblock">
                              <Urgensy
                                permission={Permission}
                                el={el}
                                urgency={urgency}
                                urgencytext={urgencytext}
                                findChangeurgency={findChangeurgency}
                              />
                            </span>
                          </div>
                        )}
                                            <Dropdown
                        overlay={setingmenu}
                        id="desktopactionbutton"
                        className="action_inquir"
                        trigger={["click"]}
                      >
                        <BsThreeDotsVertical />
                      </Dropdown>
                      </div>
                      <input
                        type="checkbox"
                        id="horns"
                        name="horns"
                        className="closecheckboox"
                        ref={(el) => (checkboxref.current[i] = el)}
                        value={el.ticketguid}
                      />


                      </div>
                    </div>
                    <div className="smallscreen">
                      <div
                        ref={(el) => (itemsRef.current[i] = el)}
                        style={{
                          display: "none",
                          color: "#807e94",
                          marginTop: "10px",
                        }}
                      >
                      <hr style={{borderTop: "1px solid #E9F0F8"}}/>

                        <Carddatabig el={el} />
                      </div>
                      <button
                        className="action_inquir_mobile"
                        onClick={() => {
                          setvisibletaskDrawer(!visibletaskDrawer);
                          setChusenrikit(el.ticketguid);
                        }}
                      >
                        <BsThreeDotsVertical />
                      </button>
                    </div>

                    <div className="fullscreen">
                      <hr style={{borderTop: "1px solid #E9F0F8"}}/>

                      <Carddatabig el={el} />
                      {/* <button
                        className="action"
                        id="desktopactionbutton"
                        onClick={() => {
                          setvisabletaskmodal(!visabletaskmodal);

                          setChusenrikit(el.ticketguid);
                        }}
                      >
                        <BsThreeDotsVertical />
                      </button> */}
                      <button
                        className="action_inquir_mobile"
                        id="phoneactionbutton"
                        onClick={() => {
                          setvisibletaskDrawer(!visibletaskDrawer);
                          setChusenrikit(el.ticketguid);
                        }}
                      >
                        <BsThreeDotsVertical />
                      </button>
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
              height={"90%"}
              bodyStyle={{
                textalign: "center",
              }}
            >
              <FiltersForsort
                filterarry={filterarry}
                setingAllOpenCategoris={(value) => {
                  setAllOpenCategoris(value);
                  setupdaterefresh(!updaterefresh);
                }}
                setingfilterallUrgency={(value) => {
                  setfilterallUrgency(value);
                  setupdaterefresh(!updaterefresh);
                }}
                setlocationsort={(value) => {
                  setlocationfilter(value);
                  setupdaterefresh(!updaterefresh);
                }}
                setUserFilter={(value) => {
                  setfilteruser(value);
                  setupdaterefresh(!updaterefresh);
                }}
                selectedstatus={(value) => {
                  setselectedstatus(value);
                  setupdaterefresh(!updaterefresh);
                }}
                clear={() => {
                  setAllOpenCategoris(false);
                  setfilterallUrgency(false);
                  setlocationfilter(false);
                  setfilteruser(false);
                  setselectedstatus(false);

                  setupdaterefresh(!updaterefresh);
                }}
                setDrawervisible={setDrawervisible}
                screnphunesize={screnphunesize}
              />
            </Drawerstyle>
          ) : null}
          {/* משימות סגירה רגילה */}
          <Quickclomodaltyle
            visible={visabletaskmodal}
            onCancel={() => {
              setvisabletaskmodal(!visabletaskmodal);
            }}
            width={0}
            footer={null}
          >
            <ListtaskforEdit
              action={Taskeditfunc}
              close={() => {
                setvisabletaskmodal(!visabletaskmodal);
              }}
            />
          </Quickclomodaltyle>
          <QuickcloDrawerstyle
            placement={"bottom"}
            onClose={() => {
              setvisibletaskDrawer(!visibletaskDrawer);
            }}
            visible={visibletaskDrawer}
            height={600}
          >
            <ListtaskforEdit
              action={Taskeditfunc}
              close={() => {
                setvisibletaskDrawer(!visibletaskDrawer);
              }}
            />
          </QuickcloDrawerstyle>
          {/* מחיקה מהירה מודל ומגירה */}
          <Quickclomodaltyle
            visible={Vmodalquickclos}
            onCancel={() => {
              setVmodalquickclos(!Vmodalquickclos);
            }}
            width={0}
            footer={null}
            // maskStyle={{ height: "92%" }}
          >
            <Quickclosebuuton action={Oqquickaction} />
          </Quickclomodaltyle>
          <QuickcloDrawerstyle
            placement={"bottom"}
            onClose={closeMenue}
            visible={visible}
            height={400}
            footer={
              <div>
                {quickclose ? (
                  <Closetask
                    data={cunter}
                    cancelClosep={cancelClosep}
                    opendrwor={closeMenue}
                    cancelquickfunc={cancelquickfunc}
                    canceloperition={canceling}
                  />
                ) : null}
              </div>
            }
          >
            <Quickclosebuuton action={Oqquickaction} />
          </QuickcloDrawerstyle>

          {quickclose ? (
            // פופ אפ למחיקות מרובה של כרטיסים

            <Closetask
              data={cunter}
              cancelClosep={cancelClosep}
              opendrwor={closeMenue}
              cancelquickfunc={cancelquickfunc}
              canceloperition={canceling}
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
