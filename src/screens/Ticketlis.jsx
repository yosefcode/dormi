import React, { useState, useEffect, useContext, useRef } from "react";
import { Contener, Drawerstyle } from "../styelscomponents/Ticketliststyel";
import DataContext from "../DataContext";
import { FaFilter } from "react-icons/fa";
import { ImCloudDownload } from "react-icons/im";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineCamera } from "react-icons/ai";
import { FaMapPin } from "react-icons/fa";
import { BsThreeDotsVertical, BsFillPersonFill } from "react-icons/bs";
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
import { FiltersForsort } from "../components/lissofreqhelpers/FilterInputs";

import { Badge, Card, Menu, Dropdown } from "antd";

const Ticketlis = (props) => {
  const itemsRef = useRef([]);

  document.body.style.backgroundColor = "#e5e5e5";
  const defoltlang = useContext(DataContext).lang;
  const loginstatus = useContext(DataContext).loginstatus;
  const ticketlist = useContext(DataContext).ticketlist;
  const lang = defoltlang?.lang;
  //  הגדארות משתנות לפי גודל מסך
  const [screnphunesize, setscrenphunesize] = useState();
  const [fullcard, setfullcard] = useState(false);
  const [Drawervisible, setDrawervisible] = useState(false);
  const openfilter = () => {
    setDrawervisible(!Drawervisible);
  };
  let arry = ["1", "2"];
  /// סטייטס לכל הסינונים
  const [AllTikets, setAllTikets] = useState([]);

  const [filter, setfilter] = useState(false);
  const [filterarry, setfilterarry] = useState();
  const [AllOpenCategoris, setAllOpenCategoris] = useState();
  const [filterallUrgency, setfilterallUrgency] = useState();
  const [locallist, setlocallist] = useState();
  const [firstlode, setlfirstlode] = useState();
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
  // צקבוקס סגירת פנייה
  const [arrytaskforclose, setarrytaskforclose] = useState([]);
  const [arresticets, setarresticets] = useState(false);
  const Delettask = async () => {
    console.log("Delettask", arrytaskforclose);

    setarresticets(true);
  };
  let arr = [];
  const closetask = (e) => {
    if (e.target.checked) {
      arr.push(...arrytaskforclose);

      let obj = { id: e.target.value };
      arr.push(obj);
      setarrytaskforclose(arr);
    } else {
      const result = arrytaskforclose.filter(
        (Item) => Item.id !== e.target.value
      );
      setarrytaskforclose(result);
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
      let result = locallist;
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

      if (arresticets) {
        result = Filterdelittask(result, arrytaskforclose);
        document
          .querySelectorAll("input[type=checkbox]")
          .forEach((el) => (el.checked = false));
        setarrytaskforclose([]);

        setarresticets(false);
      }

      if (result.length >= 1) {
        Checkstatuslist(false);
      } else {
        Checkstatuslist(true);
      }

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
  ]);

  const SelfOpenststus = (i) => {
    if (itemsRef.current[i].style.display === "inherit") {
      itemsRef.current[i].style.display = "none";
    } else {
      itemsRef.current[i].style.display = "inherit";
    }
  };
  const AllOpenststus = () => {
    for (let i = 0; arry.length > i; i++) {
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
          הצג את כל פרטי הפנייה
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
  console.log(selectedstatus);
  return (
    <Contener Screnphunesize={screnphunesize}>
      <div className="Mangeroption">
        <button className="MangerButton" onClick={openfilter}>
          {lang?.lang196} <FaFilter />
        </button>

        <button className="MangerButton">בחירה</button>
        <button className="MangerButton shwobutton">הצג פניות פתוחות</button>
        <button className="MangerButton shwobutton" onClick={AllOpenststus}>
          הצג את כל פרטי הפנייה
        </button>
        <button className="MangerButton shwobutton">
          יצא לאקסל <ImCloudDownload />
        </button>
        <Dropdown overlay={menu} placement="bottomLeft">
          <button className="DropdownButton shwobuttondropdown">
            <BsThreeDotsVertical />
          </button>
        </Dropdown>
      </div>

      {Drawervisible && !screnphunesize ? (
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
      ) : null}
      {/* כמה פניות יש */}
      <p id="discriptun">מציג {AllTikets.length} פניות : </p>

      {AllTikets ? (
        AllTikets.map((el, i) => {
          // משימות עריכה
          const setingmenu = (
            <Menu>
              {/* שלח הודעה */}
              <Menu.Item
                onClick={() => {
                  setSendmassege(true);
                  setproblemid(el.ticketid);
                }}
              >
                {lang?.lang263}
              </Menu.Item>
              {/* הפנה לאיש צוות */}
              <Menu.Item
                onClick={() => {
                  setReferraltostaff(true);
                  setproblemid(el.ticketid);
                }}
              >
                {lang?.lang240}
              </Menu.Item>

              {/* סגירה מתקדמת */}
              <Menu.Item
                onClick={() => {
                  setopenaptuchclosemodal(true);

                  setproblemid(el.ticketid);
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
                onClick={() => Posteditofticket("Delet", el.ticketguid)}
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
              <div className="Smallcard">
                <p id="discriptun">
                  {el.categoryname} - {el.categoryname}
                </p>
                <p id="cooment"> {el.comments}</p>
                <Badge color={status} text={statustext} />

                <Badge color={urgency} text={urgencytext} className="urgency" />
              </div>
              <div
                ref={(el) => (itemsRef.current[i] = el)}
                style={{ display: "none", color: "#807e94", marginTop: "20px" }}
              >
                <hr />
                <p>
                  <FaMapPin />
                  {el.locationName}-{el.roomName}
                </p>
                <p>
                  <BsFillPersonFill /> {el.firstname} {el.lastname}
                  <span className="Calltoaction">{el.phone}</span>
                </p>
                <p>
                  <AiOutlineCamera />
                  <span className="Calltoaction">תמונה</span>
                </p>
                <p>
                  {el.dateopened}
                  <span id="displyid">{el.ticketid}</span>
                </p>
              </div>
              <div className="action">
                <MdKeyboardArrowDown
                  onClick={() => {
                    SelfOpenststus(i);
                  }}
                />

                <Dropdown overlay={setingmenu} placement="bottomLeft">
                  <button className="cardbutton">
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
            <div className="buttons">
              <button className="Clear">נקה</button>
              <button className="ok">
                אישור
                <FaFilter />
              </button>
            </div>
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
    </Contener>
  );
};

export default Ticketlis;
