import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Tag,
  Form,
  Menu,
  Dropdown,
  Select,
  Button,
  Input,
  Badge,
  TreeSelect,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
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
} from "../components/Listofreqfilters";
import ModaelGeneric from "../components/ModaelGeneric";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { ImCloudDownload } from "react-icons/im";
import { FaFilter } from "react-icons/fa";
import { GiPresent } from "react-icons/gi";
import { listoftascs } from "../fackarrylisofreq";
import {
  SendmasegeTask,
  Sentostaf,
  Carddata,
  FiltersForsort,
} from "../components/SendmasegeTask";
import DataContext from "../DataContext";

const { Option } = Select;

const { SHOW_PARENT } = TreeSelect;
const Checkform = (props) => {
  document.body.style.backgroundColor = "white";
  const data = useContext(DataContext);
  const changdata = useContext(DataContext).changdata;
  const defoltlang = useContext(DataContext).lang;
  const masof = useContext(DataContext).masof;
  const loginstatus = useContext(DataContext).loginstatus;
  const ticketlist = useContext(DataContext).ticketlist;
  let userlevelid = loginstatus?.levelid;

  let locationarry = masof?.locations;

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

  // עדכון שינוי סטטוס פנייה
  function findChangeurgency(value) {
    let requst = ticketlist.findIndex((Item) => Item.ticketid === value[1]);

    ticketlist[requst].urgencyadmin = value[2];

    setchingeurgency(!chingeurgency);
    setlocallist(ticketlist);
  }
  const [nolist, setnolist] = useState(false);

  const Checkstatuslist = (value) => {
    setnolist(value);
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

      // debugger;

      if (result.length >= 1) {
        Checkstatuslist(false);
      } else {
        Checkstatuslist(true);
      }

      setfackearry(result);
    }
  }, [AllOpenCategoris, filterallUrgency, chingeurgency, nolist]);

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
  return (
    <Contener>
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
          const menu = (
            <Menu>
              <Menu.Item>{lang?.lang145}</Menu.Item>
              <Menu.Item>{lang?.lang190}</Menu.Item>
              <Menu.Item
                onClick={() => {
                  setSendmassege(true);
                  setproblemid(el.ticketid);
                }}
              >
                {lang?.lang263}
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  setReferraltostaff(true);
                  setproblemid(el.ticketid);
                }}
              >
                {lang?.lang240}
              </Menu.Item>
              <Menu.Item>{lang?.lang190}</Menu.Item>
              <Menu.Item>{lang?.lang208}</Menu.Item>
              <Menu.Item>{lang?.lang243}</Menu.Item>
              <Menu.Item>{lang?.lang147}</Menu.Item>
            </Menu>
          );
          let urgency;
          let urgencytext;

          switch (el.urgencyadmin) {
            case "1":
              urgencytext = lang?.lang122;
              urgency = {
                color: "#389e0d",
                backgroundcoler: "#f6ffed",
                border: "#b7eb8f",
              };
              break;
            case "2":
              urgencytext = lang?.lang121;
              urgency = {
                color: "#fa8c16",
                backgroundcoler: "#fff7e6",
                border: "#ffd591;",
              };
              break;
            case "3":
              urgencytext = lang?.lang120;
              urgency = {
                color: "#cf1322",
                backgroundcoler: "#fff1f0",
                border: "#ffa39e",
              };

              break;
          }

          let status;
          let statustext;

          switch (el.statusname) {
            case "פנייה חדשה":
              status = "#108ee9";
              statustext = lang?.lang162;
              break;
            case "בטיפול":
              status = "#87d068";
              statustext = lang?.lang174;
              break;
          }

          return (
            <div>
              {userlevelid === "10" ||
              userlevelid === "5" ||
              userlevelid === "13" ? (
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
                        <StyeldTag color="success">{lang?.lang122}</StyeldTag>
                      </Option>
                      <Option value={[lang?.lang121, el.ticketid, "2"]}>
                        {" "}
                        <StyeldTag color="warning">{lang?.lang121}</StyeldTag>
                      </Option>
                      <Option value={[lang?.lang120, el.ticketid, "3"]}>
                        {" "}
                        <StyeldTag color="red">{lang?.lang120}</StyeldTag>
                      </Option>
                    </StyeldSelect>,
                  ]}
                  style={{ width: 300 }}
                  extra={<div>מיקום: {el.locationName}</div>}
                >
                  <Carddata element={el} />

                  {Repeatedtask ? (
                    <span className="card-body-spen">
                      {/* <Tag color={status}>{statustext}</Tag>
                       */}
                      תדירות כל:
                      {el.ticketPlanID}
                    </span>
                  ) : (
                    <span className="card-body-spen">
                      <Tag color={status}>{statustext}</Tag>
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
                    <span className="card-body-spen">{el.Repeatedtask}</span>
                  ) : (
                    <span className="card-body-spen">
                      <Tag color={status}>{statustext}</Tag>
                    </span>
                  )}
                </StyelsCard>
              )}
            </div>
          );
        })
      ) : (
        <div>{lang?.lang181}</div>
      )}
      <Link to="Affiliation" className="Affiliationbutton">
        <GiPresent className="Affiliationicon" />
      </Link>
    </Contener>
  );
};

export default Checkform;
