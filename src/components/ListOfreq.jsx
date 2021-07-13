import React, { useState, useRef, useEffect, useContext } from "react";
import { Tag, Form, Menu, Dropdown, Select, Button, Input } from "antd";
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

import ModaelGeneric from "./ModaelGeneric";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { ImCloudDownload } from "react-icons/im";
import { FaFilter } from "react-icons/fa";
import { GiPresent } from "react-icons/gi";
import { listoftascs } from "../fackarrylisofreq";

import DataContext from "../DataContext";

const { Option } = Select;
const { TextArea } = Input;

const Checkform = (props) => {
  document.body.style.backgroundColor = "white";
  const data = useContext(DataContext);
  const changdata = useContext(DataContext).changdata;
  const defoltlang = useContext(DataContext).lang;
  const masof = useContext(DataContext).masof;
  const loginstatus = useContext(DataContext).loginstatus;
  let userlevelid = loginstatus?.levelid;

  let locationarry = masof?.locations;

  const lang = defoltlang?.lang;

  const Repeatedtask = props.Repeatedtask;

  const [fackearry, setfackearry] = useState();

  const [filter, setfilter] = useState(false);

  const problomtypearry = [
    {
      maincategorys: [
        { maincategory: "חשמל", id: 2 },
        { maincategory: "אינסטלציה", id: 1 },
      ],

      urgency: [
        { urgency: "נמוך", urgencyid: 1 },
        { urgency: "בינוני", urgencyid: 2 },
        { urgency: "גבוהה", urgencyid: 3 },
      ],
    },
  ];

  const [AllOpenCategoris, setAllOpenCategoris] = useState();
  const [filterallUrgency, setfilterallUrgency] = useState();

  function filterAllOpenCategoris(arry) {
    if (AllOpenCategoris) {
      return arry.filter((el) => {
        return el.maincategorid === AllOpenCategoris;
      });
    } else {
      return arry;
    }
  }
  function filterUrgency(arry) {
    if (filterallUrgency) {
      return arry.filter((el) => {
        return el.urgency === filterallUrgency;
      });
    } else {
      return arry;
    }
  }

  const [locallist, setlocallist] = useState();
  const [firstlode, setlfirstlode] = useState();
  const [chingeurgency, setchingeurgency] = useState(false);
  function findChangeurgency(value) {
    let requst = listoftascs.findIndex((Item) => Item.id === value[1]);
    listoftascs[requst].urgency = value[2];
    setchingeurgency(!chingeurgency);
    setlocallist(listoftascs);
  }
  const [nolist, setnolist] = useState(false);

  const Checkstatuslist = (value) => {
    setnolist(value);
  };
  useEffect(() => {
    if (!firstlode) {
      setlocallist(listoftascs);

      setlfirstlode(true);
      setfackearry(listoftascs);
    } else {
      let result = locallist;

      result = filterAllOpenCategoris(result);

      result = filterUrgency(result);

      // result = findChangeurgency(result);

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
  const [form] = Form.useForm();
  const [Sendmassege, setSendmassege] = useState(false);
  const [problemid, setproblemid] = useState();
  const onsendmassege = (value, id) => {
    setSendmassege(false);
    console.log(value, problemid);
    form.resetFields();
  };

  const [Referraltostaff, setReferraltostaff] = useState(false);

  const onReferr = (value, id) => {
    setSendmassege(false);
    console.log(value, problemid);
    form.resetFields();
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
        <Form name="masseg" onFinish={onsendmassege} form={form}>
          <Form.Item name="comments" placeholder={lang?.lang266}>
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {lang?.lang265}
            </Button>
          </Form.Item>
        </Form>
      </ModalStyeld>
      <ModalStyeld
        title={lang?.lang240}
        visible={Referraltostaff}
        onCancel={() => {
          setReferraltostaff(false);
        }}
        footer={false}
      >
        <Form name="masseg" onFinish={onReferr} form={form}>
          <Form.Item name="comments">
            <Select showSearch placeholder="בחר איש צוות">
              <Option value={1}>אביתר </Option>

              <Option value={2}>בעז</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {lang?.lang265}
            </Button>
          </Form.Item>
        </Form>
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
        <span className="text">{lang.lang196}</span>
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
        <div className="filteroption">
          <div className="selcts">
            <Select
              showSearch
              placeholder={lang?.lang354}
              onChange={(value) => {
                setAllOpenCategoris(value);
              }}
            >
              <Option value={false}>{lang.lang354}</Option>

              {problomtypearry[0]?.maincategorys.map((el) => (
                <Option value={el.id}>{el.maincategory} </Option>
              ))}
            </Select>
          </div>
          <div className="selcts">
            <Select
              showSearch
              placeholder={lang?.lang353}
              onChange={(value) => {
                setfilterallUrgency(value);
              }}
            >
              <Option value={false}>{lang?.lang353}</Option>

              {problomtypearry[0]?.urgency.map((el) => (
                <Option value={el.urgencyid}>{el.urgency} </Option>
              ))}
            </Select>
          </div>
        </div>
      ) : null}

      {!nolist ? (
        fackearry?.map((el) => {
          const menu = (
            <Menu>
              <Menu.Item>{lang?.lang145}</Menu.Item>
              <Menu.Item>{lang?.lang190}</Menu.Item>
              <Menu.Item
                onClick={() => {
                  setSendmassege(true);
                  setproblemid(el.id);
                }}
              >
                {lang?.lang263}
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  setReferraltostaff(true);
                  setproblemid(el.id);
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

          switch (el.urgency) {
            case 1:
              urgencytext = lang?.lang122;
              urgency = {
                color: "#389e0d",
                backgroundcoler: "#f6ffed",
                border: "#b7eb8f",
              };
              break;
            case 2:
              urgencytext = lang?.lang121;
              urgency = {
                color: "#fa8c16",
                backgroundcoler: "#fff7e6",
                border: "#ffd591;",
              };
              break;
            case 3:
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

          switch (el.status) {
            case 1:
              status = "#108ee9";
              statustext = lang?.lang162;
              break;
            case 2:
              status = "#87d068";
              statustext = lang?.lang174;
              break;
          }

          return (
            <div>
              {userlevelid === 10 || userlevelid === 5 || userlevelid === 13 ? (
                <StyelsCard
                  title={`${el.maincategory} / ${el.subname}`}
                  primary={urgency}
                  // {userlevelid === 10 || userlevelid === 5 || userlevelid === 13 ? (
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
                      <Option value={[lang?.lang122, el.id, 1]}>
                        {" "}
                        <StyeldTag color="success">{lang?.lang122}</StyeldTag>
                      </Option>
                      <Option value={[lang?.lang121, el.id, 2]}>
                        {" "}
                        <StyeldTag color="warning">{lang?.lang121}</StyeldTag>
                      </Option>
                      <Option value={[lang?.lang120, el.id, 3]}>
                        {" "}
                        <StyeldTag color="red">{lang?.lang120}</StyeldTag>
                      </Option>
                    </StyeldSelect>,
                  ]}
                  style={{ width: 300 }}
                  extra={<div>מיקום: {el.location}</div>}
                >
                  <span className="card-body-spen"> {el.id}</span>{" "}
                  <span className="card-body-spen"> {el.date}</span>
                  <span className="card-body-spen">
                    {el.incharge} {el.phonenumber}
                  </span>
                  {Repeatedtask ? (
                    <span className="card-body-spen">{el.Repeatedtask}</span>
                  ) : (
                    <span className="card-body-spen">
                      <Tag color={status}>{statustext}</Tag>
                    </span>
                  )}
                </StyelsCard>
              ) : (
                <StyelsCard
                  title={`${el.maincategory} / ${el.subname}`}
                  primary={urgency}
                  // {userlevelid === 10 || userlevelid === 5 || userlevelid === 13 ? (

                  style={{ width: 300 }}
                  extra={<div>מיקום: {el.location}</div>}
                >
                  <span className="card-body-spen"> {el.id}</span>{" "}
                  <span className="card-body-spen"> {el.date}</span>
                  <span className="card-body-spen">
                    {el.incharge} {el.phonenumber}
                  </span>
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
// let programdata = [
//   {
//     categorynames: [
//       {
//         id: 31,
//         maincategory: "חשמל",
//         subcategory: [
//           { subcategoryid: 1, subname: "נורה" },
//           { subcategoryid: 1, subname: "שקע" },
//         ],
//       },
//       {
//         id: 31,
//         maincategory: "אינסטליצייה",
//         subcategory: [
//           { subcategoryid: 1, subname: "ברז" },
//           { subcategoryid: 1, subname: "ביוב" },
//         ],
//       },
//     ],
//     locations: [
//       {
//         locationid: 1,
//         locationname: " פנימייה",
//         rooms: [
//           { roomid: 1, roomname: "חדר1" },
//           { roomid: 2, roomname: "חדר2" },
//         ],
//       },
//       {
//         locationid: 2,
//         locationname: "בניין ",
//         rooms: [
//           { roomid: 3, roomname: "חדר1" },
//           { roomid: 4, roomname: "חדר2" },
//         ],
//       },
//     ],
//   },
// ];
