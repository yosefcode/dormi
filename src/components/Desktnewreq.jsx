import React, { useState, useContext } from "react";
import DataContext from "../DataContext";
import { PoweroffOutlined } from "@ant-design/icons";

import { Form, Input, Button, Select, DatePicker, Badge } from "antd";
import { FormContener } from "../styelscomponents/NewRequest";
import { FiArrowRight } from "react-icons/fi";

import { week, month } from "./Arrydaits";
import { PostToServer } from "../serveses";
import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import Uplodetaskimage from "./uplodetaskimage";
import { Arryoficons } from "../Icons";

const Desktnewreq = ({ Typeofreq, Temmembertask }) => {
  const { Option } = Select;
  const { TextArea } = Input;

  const loginstatus = useContext(DataContext).loginstatus;
  const changeticketlist = useContext(DataContext).changeticketlist;
  const defoltlang = useContext(DataContext).lang;
  const masof = useContext(DataContext).masof;
  const lang = defoltlang?.lang;
  let categorynames = masof?.categorynames;
  const [uplodeimagescreen, setuplodeimagescreen] = useState(false);

  //   setsubcategory(Typeofreq.maincategory);

  const [selectromm, setselectromm] = useState(false);
  let locationarry = masof?.locations;

  let [rommarry, setrommarry] = useState();
  const onChange = (value) => {
    let listofrooms = locationarry.filter((el) => {
      return el.locationid === value[1];
    });

    setrommarry(listofrooms[0].rooms);
    setselectromm(true);
  };

  const [errmassege, seterrmassege] = useState(false);
  const [errmassegetext, seterrmassegetext] = useState();

  //ticketid = ticketguid
  const [ticketid, setticketid] = useState();
  const onFinish = async (value) => {
    enterLoading(2);
    let task = "save";

    if (ticketid) {
      setticketid(value.ticketid);
    } else {
      setticketid(null);
    }

    let userid = loginstatus.userid;

    let locationid;
    if (value?.locationid) {
      locationid = value?.locationid[1];
    }
    let roomid;
    if (value?.roomid) {
      roomid = parseInt(value?.roomid[1]);
    }
    let categoryid;
    if (value?.categoryid) {
      categoryid = value?.categoryid[1];
    }
    let urgencyid;
    if (value?.urgencyid) {
      urgencyid = value?.urgencyid;
    } else {
      urgencyid = 2;
    }
    let comments;
    if (value.comments) {
      comments = value.comments.replace(/[<>${}]/g, "danger$&");
    }

    let obj = {
      task,
      ticketid,
      userid,
      locationid,
      roomid,
      categoryid,
      urgencyid,
      comments,
      // ...typeofreq,
    };

    let reqruter = "newticket";

    let res = await PostToServer(reqruter, obj);
    if (res.error === 1) {
      seterrmassege(true);
      seterrmassegetext(res.message);
      setloadings([0]);
    } else {
      let ruteruserid = "ticketlist";

      let ticketlis = await PostToServer(ruteruserid, { userid: userid });
      changeticketlist(ticketlis);
      setloadings([0]);
      setuplodeimagescreen(true);

      // seterrmassege(true);
      setticketid(res.ticketid);
      seterrmassegetext(res.message);

      // setTimeout(() => {
      // setuplodeimagescreen(true);
      // seterrmassege(false);
      // }, 2000);
    }
  };

  const [loadings, setloadings] = useState([]);
  const enterLoading = (index) => {
    setloadings((loadings) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return newLoadings;
    });
  };

  const frequencyarry = [
    { value: "week", text: lang.lang275 },
    { value: "month", text: lang.lang276 },
    { value: "three_month", text: lang.lang363 },
    { value: "half_year", text: lang.lang361 },
    { value: "year", text: lang.lang277 },
  ];

  const [datetype, setdatetype] = useState(false);
  const [datetypepiker, setdatetypepiker] = useState(false);
  const Selectfreqtipe = (value) => {
    switch (value) {
      case "week":
        setdatetype(week);
        setdatetypepiker(false);

        break;
      case "month":
        setdatetype(month);
        setdatetypepiker(false);

        break;
      // case "three_month":
      //   setdatetype(false);
      //   setdatetypepiker(true);

      //   break;
      default:
        setdatetype(false);
        setdatetypepiker(true);
        break;
    }
  };
  const [subcategory, setsubcategory] = useState(false);
  const chusencategory = (value) => {
    if (value) {
      let sub = categorynames.find((el) => {
        if (el.id === value[1]) {
          return el;
        }
      });
      setsubcategory(sub.subcategory);
    } else {
      setsubcategory(false);
    }
  };
  return (
    <div>
      <FormContener>
        {!uplodeimagescreen ? (
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className="theproblemis">
              {/* <p>הבעיה היא {Typeofreq.maincategoryname}</p> */}
              {/* {Icon ? (
                <Icon className="iconproblem" />
              ) : (
                <PoweroffOutlined className="iconproblem" />
              )} */}
            </div>
            {/* קטגוריה ראשית */}

            <Form.Item
              labelAlign={"right"}
              rules={[{ required: true, message: lang?.lang110 }]}
            >
              <Select
                showSearch
                placeholder={lang?.lang110}
                onChange={chusencategory}
              >
                <Option value={false}>{lang?.lang110}</Option>
                {categorynames
                  ? categorynames.map((el) => {
                      let finicon = Arryoficons.find((ic) => {
                        if (el.icon === ic.iconname) {
                          return ic;
                        }
                      });
                      let icon;

                      if (finicon?.icon) {
                        icon = finicon.icon;
                      } else {
                        icon = false;
                      }

                      return (
                        <Option
                          value={[
                            [el.maincategoryname, " ", <finicon.icon />],
                            el.id,
                          ]}
                        >
                          {el.maincategoryname}{" "}
                          {icon ? <finicon.icon /> : <PoweroffOutlined />}
                        </Option>
                      );
                    })
                  : null}
              </Select>
            </Form.Item>
            {/* קטגוריה משנית  */}
            {subcategory ? (
              <Form.Item
                name="categoryid"
                labelAlign={"right"}
                rules={[{ required: true, message: lang?.lang110 }]}
              >
                <Select showSearch placeholder={lang?.lang110}>
                  {subcategory
                    ? subcategory.map((el) => {
                        return (
                          <Option value={[el.subname, el.subcategoryid]}>
                            {el.subname}
                          </Option>
                        );
                      })
                    : null}
                </Select>
              </Form.Item>
            ) : null}
            {/* הערות */}
            <p className="Lable">{lang?.lang123}</p>
            <Form.Item name="comments">
              <TextArea rows={4} />
            </Form.Item>

            {/* דחיפות  */}
            <Form.Item name="urgencyid" defaultValue={2}>
              <Select defaultValue={2}>
                <Option key={1} value={1}>
                  <Badge color="#22E7B7" text={lang?.lang120} />
                </Option>
                <Option key={2} value={2}>
                  <Badge color="orange" text={lang?.lang121} />
                </Option>
                <Option key={3} value={3}>
                  <Badge color="#D91D61" text={lang?.lang122} />
                </Option>
              </Select>
            </Form.Item>
            {/* מיקום */}
            <Form.Item
              name="locationid"
              rules={[{ required: true, message: lang?.lang340 }]}
            >
              <Select
                showSearch
                placeholder={lang?.lang340}
                onChange={onChange}
              >
                {locationarry
                  ? locationarry.map((el) => {
                      return (
                        <Option value={[el.locationname, el.locationid]}>
                          {el.locationname}
                        </Option>
                      );
                    })
                  : null}
              </Select>
            </Form.Item>
            {/* בחר חדר */}
            {selectromm ? (
              <Form.Item
                name="roomid"
                rules={[{ required: true, message: lang?.lang341 }]}
              >
                <Select showSearch placeholder={lang?.lang341}>
                  {rommarry
                    ? rommarry.map((el, index) => {
                        return (
                          <Option key={index} value={[el.roomname, el.roomid]}>
                            {el.roomname}
                          </Option>
                        );
                      })
                    : null}
                </Select>
              </Form.Item>
            ) : null}

            {Temmembertask ? (
              // תדירות
              <div className="frequency">
                <Form.Item name="frequencytyep" label={lang?.lang269}>
                  <Select style={{ width: 200 }} onSelect={Selectfreqtipe}>
                    {frequencyarry.map((el, index) => {
                      return (
                        <option ley={index} value={el.value}>
                          {el.text}
                        </option>
                      );
                    })}
                  </Select>
                </Form.Item>
                {datetype ? (
                  <Form.Item name="frequencydate" label={lang?.lang269}>
                    <Select>
                      {datetype.map((el, index) => {
                        return (
                          <option key={index} value={el.date}>
                            {el.date}
                          </option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                ) : null}
                {datetypepiker ? (
                  <Form.Item name="frequencydate" label={lang?.lang269}>
                    <DatePicker />
                  </Form.Item>
                ) : null}
              </div>
            ) : null}
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loadings[2]}>
                {Temmembertask ? `${lang?.lang344}` : `${lang?.lang124}`}
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <div>
            <Uplodetaskimage
              ticketid={ticketid}
              userid={loginstatus.userid}
              setuplodeimagescreen={() => {
                setuplodeimagescreen(false);
              }}
            />
          </div>
        )}
        <ModalStyeld
          visible={errmassege}
          onCancel={() => {
            seterrmassege(false);
          }}
          footer={false}
        >
          {errmassegetext}
        </ModalStyeld>
      </FormContener>
    </div>
  );
};

export default Desktnewreq;
