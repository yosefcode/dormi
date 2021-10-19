import React, { useState, useEffect, useContext } from "react";
import { Tag, Menu, Select } from "antd";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { ImCloudDownload } from "react-icons/im";
import { FaFilter } from "react-icons/fa";
import { GiPresent } from "react-icons/gi";
import { Link } from "react-router-dom";
import Formtaskfromlist from "../components/Formtaskfromlist";
import DataContext from "../DataContext";

import ReactExport from "react-export-excel";
import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import {
  Contener,
  StyeldSelect,
  StyeldTag,
  StyelsCard,
  StyelsDropdown,
} from "../styelscomponents/styeldListReq";

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

import { FiltersForsort } from "../components/lissofreqhelpers/FilterInputs";
import {
  SendmasegeTask,
  Sentostaf,
  Carddata,
} from "../components/lissofreqhelpers/Tasks";
import {
  Apruchclose,
  Posteditofticket,
  Closetask,
  Switchurgency,
  Switcstatus,
} from "../components/lissofreqhelpers/Ticeteditmenu";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
const { Option } = Select;

const Checkform = (props) => {
  // let intViewportWidth = window.innerWidth;

  const defoltlang = useContext(DataContext).lang;
  const masof = useContext(DataContext).masof;
  const loginstatus = useContext(DataContext).loginstatus;
  const ticketlist = useContext(DataContext).ticketlist;
  let userlevelid = loginstatus?.levelid;

  const lang = defoltlang?.lang;

  const Repeatedtask = props.Repeatedtask;
  /// סטייטס לכל הסינונים
  const [fackearry, setfackearry] = useState([]);
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

      setfackearry(ticketlist);
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

      setfackearry(result);
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

  const [edittask, setedittask] = useState(true);
  const [dataforedit, setdataforedit] = useState();
  const Goback = () => {
    setedittask(true);
  };
  const [claerapruchform, setclaerapruchform] = useState(false);
  console.log(selectedstatus);
  return (
    <div>
      {edittask ? (
        <Contener>
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

          <div className="top_icon">
            <ExcelFile
              element={
                <span className="export_exel">
                  <ImCloudDownload />
                </span>
              }
            >
              <ExcelSheet data={fackearry} name="Dormitask">
                <ExcelColumn label="breadcrumb" value="breadcrumb" />
                <ExcelColumn label="categoryname" value="categoryname" />
                <ExcelColumn label="closebyuserid" value="closebyuserid" />
                <ExcelColumn
                  label="allowAccessToRoom"
                  value="allowAccessToRoom"
                />
                <ExcelColumn
                  label="closecommentstouser"
                  value="closecommentstouser"
                />
                <ExcelColumn label="closecost" value="closecost" />
                <ExcelColumn label="closedate" value="closedate" />
                <ExcelColumn label="comments" value="comments" />
                <ExcelColumn label="dateopened" value="dateopened" />
                <ExcelColumn label="firstname" value="firstname" />
                <ExcelColumn label="lastname" value="lastname" />
                <ExcelColumn label="locationName" value="locationName" />
                <ExcelColumn label="phone" value="phone" />
                <ExcelColumn label="roomName" value="roomName" />
                <ExcelColumn label="locationName" value="locationName" />

                <ExcelColumn label="senttouserid" value="senttouserid" />
                <ExcelColumn label="statusname" value="statusname" />
                <ExcelColumn label="ticketPlanID" value="ticketPlanID" />
                <ExcelColumn label="ticketguid" value="ticketguid" />
                <ExcelColumn label="urgencyadmin" value="urgencyadmin" />
              </ExcelSheet>
            </ExcelFile>

            {Repeatedtask ? (
              <span className="buttonnewtask">
                {" "}
                <Link style={{ color: "#FFF" }} to="/temmembertask">
                  {lang?.lang100}
                </Link>
              </span>
            ) : null}
            <span className="text">{lang?.lang196}</span>
            <span
              onClick={() => {
                setfilter(!filter);
              }}
              className="filter"
            >
              <FaFilter />
            </span>
          </div>
          {/* /// כל סוגי הפילטרים */}

          {filter ? (
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

          {!nolist ? (
            fackearry.map((el) => {
              // משימות עריכה
              const menu = (
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
                <div>
                  {
                    // userlevelid === "10" ||
                    // userlevelid === "5" ||
                    // userlevelid === "13"

                    el.breadcrumb ? (
                      <StyelsCard
                        title={`${el.breadcrumb} / ${el.categoryname}`}
                        primary={urgency}
                        actions={[
                          <StyelsDropdown
                            trigger={["click"]}
                            overlay={menu}
                            className="dotsDropdown"
                          >
                            <HiOutlineDotsHorizontal />
                          </StyelsDropdown>,
                          <StyeldSelect
                            primary={urgency}
                            defaultValue={urgencytext}
                            value={urgencytext}
                            onChange={findChangeurgency}
                            dropdownClassName="dropdownClassName"
                          >
                            <Option value={[lang?.lang122, el.ticketid, "1"]}>
                              {" "}
                              <StyeldTag color="success">
                                {lang?.lang122}
                              </StyeldTag>
                            </Option>
                            <Option value={[lang?.lang121, el.ticketid, "2"]}>
                              {" "}
                              <StyeldTag color="warning">
                                {lang?.lang121}
                              </StyeldTag>
                            </Option>
                            <Option value={[lang?.lang120, el.ticketid, "3"]}>
                              {" "}
                              <StyeldTag color="red">{lang?.lang120}</StyeldTag>
                            </Option>
                          </StyeldSelect>,

                          <div>
                            <input
                              onChange={closetask}
                              type="checkbox"
                              id="horns"
                              name="horns"
                              value={el.ticketid}
                            />
                            <label for="horns">{lang?.lang145}</label>
                          </div>,
                        ]}
                        style={{ width: 300 }}
                        extra={<div>מיקום: {el.locationName}</div>}
                      >
                        <Carddata element={el} />

                        {Repeatedtask ? (
                          <span className="card-body-spen">
                            תדירות כל:
                            {el.ticketPlanID}
                          </span>
                        ) : (
                          <span className="card-body-spen">
                            {/* סטטוס פנייה */}
                            <StyeldSelect
                              primary={status}
                              defaultValue={statustext}
                              value={statustext}
                              onChange={findChangstatus}
                              dropdownClassName="dropdownClassName"
                            >
                              <Option
                                value={[
                                  lang?.lang162,
                                  el.ticketid,
                                  "פנייה חדשה",
                                ]}
                              >
                                {" "}
                                <Tag color={"#108ee9"}>{lang?.lang162}</Tag>
                              </Option>
                              <Option
                                value={[lang?.lang174, el.ticketid, "בטיפול"]}
                              >
                                {" "}
                                <Tag color={"#87d068"}>{lang?.lang174}</Tag>
                              </Option>
                            </StyeldSelect>
                          </span>
                        )}
                      </StyelsCard>
                    ) : (
                      <StyelsCard
                        title={`${el.breadcrumb} / ${el.categoryname}`}
                        primary={urgency}
                        style={{ width: 300 }}
                        extra={<div>מיקום: {el.locationName}</div>}
                      >
                        <Carddata element={el} />
                        {Repeatedtask ? (
                          <span className="card-body-spen">
                            {el.Repeatedtask}
                          </span>
                        ) : (
                          <span className="card-body-spen">
                            <Tag color={status?.backgroundcoler}>
                              {statustext}
                            </Tag>
                          </span>
                        )}
                      </StyelsCard>
                    )
                  }
                </div>
              );
            })
          ) : (
            <div>{lang?.lang181}</div>
          )}

          {arrytaskforclose.length > 0 ? (
            // פופ אפ למחיקות מרובה של כרטיסים
            <Closetask data={arrytaskforclose} submit={Delettask} />
          ) : null}

          <Link to="Affiliation" className="Affiliationbutton">
            <GiPresent className="Affiliationicon" />
          </Link>
        </Contener>
      ) : (
        <Formtaskfromlist Goback={Goback} data={dataforedit} />
      )}
    </div>
  );
};

export default Checkform;
