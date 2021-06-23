import React, { useState, useRef, useEffect } from "react";
import { Modal, Tag, Form, Menu, Dropdown, Card, Select, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {
  Contener,
  StyeldSelect,
  StyeldTag,
  StyelsCard,
} from "../styelscomponents/styeldListReq";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { ImCloudDownload } from "react-icons/im";
import { FaFilter } from "react-icons/fa";
import { GiPresent } from "react-icons/gi";
import { listoftascs } from "../fackarrylisofreq";
const { Option } = Select;

const menu = (
  <Menu>
    <Menu.Item>סגירה מהירה</Menu.Item>
    <Menu.Item>סמן כטיפול בפנייה</Menu.Item>
    <Menu.Item>שלח הודעה</Menu.Item>
    <Menu.Item>הפנה לאיש צוות</Menu.Item>
    <Menu.Item>סמן כפנייה חדשה</Menu.Item>
    <Menu.Item>סגירה מתקדמת</Menu.Item>
    <Menu.Item>עריכה</Menu.Item>
    <Menu.Item>מחיקה</Menu.Item>
  </Menu>
);
const Checkform = (props) => {
  document.body.style.backgroundColor = "white";

  const [isModalVisible, setIsModalVisible] = useState(false);
  const Repeatedtask = props.Repeatedtask;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (value) => {
    console.log(value);
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
  const [problom, setproblom] = useState();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

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
      setfackearry(result);
    }
  }, [AllOpenCategoris, filterallUrgency, chingeurgency]);

  return (
    <Contener>
      <div className="top_icon">
        <span className="export_exel">
          <ImCloudDownload />
        </span>
        {Repeatedtask ? (
          <button>
            {" "}
            <Link style={{ color: "#FFF" }} to="/temmembertask">
              {" "}
              פתח פנייה חדשה{" "}
            </Link>
          </button>
        ) : null}
        <span className="text">רשימת פניות</span>
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
              placeholder="כל הקטגוריות"
              onChange={(value) => {
                setAllOpenCategoris(value);
              }}
            >
              <Option value={false}>כל הקטגוריות </Option>

              {problomtypearry[0]?.maincategorys.map((el) => (
                <Option value={el.id}>{el.maincategory} </Option>
              ))}
            </Select>
          </div>
          <div className="selcts">
            <Select
              showSearch
              placeholder="כל הרמות"
              onChange={(value) => {
                setfilterallUrgency(value);
              }}
            >
              <Option value={false}>כל הרמות </Option>

              {problomtypearry[0]?.urgency.map((el) => (
                <Option value={el.urgencyid}>{el.urgency} </Option>
              ))}
            </Select>
          </div>
        </div>
      ) : null}

      {fackearry
        ? fackearry?.map((el) => {
            let urgency;
            let urgencytext;

            switch (el.urgency) {
              case 1:
                urgencytext = "נמוך";
                urgency = {
                  color: "#389e0d",
                  backgroundcoler: "#f6ffed",
                  border: "#b7eb8f",
                };
                break;
              case 2:
                urgencytext = "בינוני";
                urgency = {
                  color: "#fa8c16",
                  backgroundcoler: "#fff7e6",
                  border: "#ffd591;",
                };
                break;
              case 3:
                urgencytext = "גבוהה";
                urgency = {
                  color: "#cf1322",
                  backgroundcoler: "#fff1f0",
                  border: "#ffa39e",
                };

                break;
            }
            console.log(el.id, urgencytext, urgency);
            let status;
            let statustext;

            switch (el.status) {
              case 1:
                status = "#108ee9";
                statustext = "פנייה חדשה";
                break;
              case 2:
                status = "#87d068";
                statustext = "בטיפול";
                break;
            }

            return (
              <div>
                <StyelsCard
                  title={`${el.maincategory} / ${el.subname}`}
                  primary={urgency}
                  actions={[
                    <Dropdown overlay={menu} className="dotsDropdown">
                      <HiOutlineDotsHorizontal />
                    </Dropdown>,
                    <StyeldSelect
                      primary={urgency}
                      defaultValue={urgencytext}
                      value={urgencytext}
                      onChange={findChangeurgency}
                      dropdownClassName="dropdownClassName"
                    >
                      <Option value={["נמוך", el.id, 1]}>
                        {" "}
                        <StyeldTag color="success">נמוך</StyeldTag>
                      </Option>
                      <Option value={["בינוני", el.id, 2]}>
                        {" "}
                        <StyeldTag color="warning">בינוני</StyeldTag>
                      </Option>
                      <Option value={["גבוהה", el.id, 3]}>
                        {" "}
                        <StyeldTag color="red">גבוה</StyeldTag>
                      </Option>
                    </StyeldSelect>,
                  ]}
                  style={{ width: "300px" }}
                  extra={<div>מיקום: {el.location}</div>}
                >
                  <span> {el.id}</span> <span> {el.date}</span>
                  <span>
                    {el.incharge} {el.phonenumber}
                  </span>{" "}
                  <span> {el.status}</span>{" "}
                  {Repeatedtask ? (
                    <span>{el.Repeatedtask}</span>
                  ) : (
                    <span>
                      <Tag color={status}>{statustext}</Tag>
                    </span>
                  )}
                </StyelsCard>

                <Modal
                  title="עדכן את רמת הדחיפות"
                  visible={isModalVisible}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <p>הפונה לא יראה את הסיווג</p>
                </Modal>
              </div>
            );
          })
        : null}
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
