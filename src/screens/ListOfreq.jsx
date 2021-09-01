import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  createRef,
} from "react";
import { Tag, Menu, Select, Checkbox } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link, Switch } from "react-router-dom";
import {
  Contener,
  StyeldSelect,
  StyeldTag,
  StyelsCard,
  StyelsDropdown,
} from "../styelscomponents/styeldListReq";
import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import {
  Filterforcareguris,
  FilterUrgency,
  FilterAllOpenCategoris,
  FilterlocationName,
  Filterdelittask,
} from "../components/lissofreqhelpers/Listofreqfilters";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { ImCloudDownload } from "react-icons/im";
import { FaFilter } from "react-icons/fa";
import { GiPresent } from "react-icons/gi";

import {
  SendmasegeTask,
  Sentostaf,
  Carddata,
  FiltersForsort,
} from "../components/lissofreqhelpers/Listofreqcomponent";
import {
  Apruchclose,
  Posteditofticket,
  Closetask,
  Switchurgency,
  Switcstatus,
} from "../components/lissofreqhelpers/Ticeteditmenu";
import Formtaskfromlist from "../components/Formtaskfromlist";
import DataContext from "../DataContext";

const { Option } = Select;

const Checkform = (props) => {
  document.body.style.backgroundColor = "white";

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
  const [chingeurgency, setchingeurgency] = useState(false);
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

  const setingAllOpenCategoris = (value) => {
    setAllOpenCategoris(value);
  };

  const setingfilterallUrgency = (value) => {
    setfilterallUrgency(value);
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

      for (let i = 0; ticketlist?.length > i; i++) {
        breadcrumb.push(ticketlist[i].breadcrumb);

        locationName.push(ticketlist[i].locationName);
      }
      let resultcategoris = Filterforcareguris(breadcrumb);
      let resultkocation = FilterlocationName(locationName, ticketlist);

      let allcategoristofilter = {
        breadcrumb: resultcategoris,
        locationName: resultkocation,
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
      //

      if (arresticets) {
        result = Filterdelittask(result, arrytaskforclose);
        document
          .querySelectorAll("input[type=checkbox]")
          .forEach((el) => (el.checked = false));
        setarrytaskforclose([]);

        setarresticets(false);
      }

      // result = Filterdelittask(result, arrytaskforclose);
      // debugger;

      if (result.length >= 1) {
        Checkstatuslist(false);
      } else {
        Checkstatuslist(true);
      }

      setfackearry(result);
    }
  }, [AllOpenCategoris, filterallUrgency, chingeurgency, nolist, arresticets]);

  const [edittask, setedittask] = useState(true);
  const [dataforedit, setdataforedit] = useState();
  const Goback = () => {
    setedittask(true);
  };
  return (
    <div>
      {edittask ? (
        <Contener>
          <ModalStyeld
            title={lang?.lang263}
            visible={openaptuchclosemodal}
            onCancel={() => {
              setopenaptuchclosemodal(false);
            }}
            footer={false}
          >
            <Apruchclose
              ticketguid={problemid}
              Closemodal={closeopenaptuchclosemoda}
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
            <span className="export_exel">
              <ImCloudDownload />
            </span>
            {Repeatedtask ? (
              <button>
                {" "}
                <Link style={{ color: "#FFF" }} to="/temmembertask">
                  {lang?.lang100}
                </Link>
              </button>
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

          {filter ? (
            <FiltersForsort
              filterarry={filterarry}
              setingAllOpenCategoris={setingAllOpenCategoris}
              setingfilterallUrgency={setingfilterallUrgency}
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

              let urgency = resulturgency.urgency;
              let urgencytext = resulturgency.urgencytext;

              let resultstatus = Switcstatus(
                el.statusname,
                lang?.lang162,
                lang?.lang174
              );

              let status = resultstatus.status;
              let statustext = resultstatus.statustext;

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
