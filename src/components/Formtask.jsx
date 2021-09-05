import React, { useState, useContext, useEffect } from "react";
import DataContext from "../DataContext";

import { Link } from "react-router-dom";

import {
  Form,
  Input,
  Button,
  Modal,
  Radio,
  Space,
  Select,
  Upload,
  DatePicker,
} from "antd";
import { FormContener, Problemcontener } from "../styelscomponents/NewRequest";
import { FiArrowRight } from "react-icons/fi";
import { BsCloudUpload } from "react-icons/bs";

import { PostToServer } from "../serveses";
import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import Uplodetaskimage from "./uplodetaskimage";

const Formtask = ({ Typeofreq, Goback, Subcategory, Temmembertask }) => {
  document.body.style.backgroundColor = "#3286F9";

  const { Option } = Select;
  const { TextArea } = Input;

  const loginstatus = useContext(DataContext).loginstatus;

  const defoltlang = useContext(DataContext).lang;
  const masof = useContext(DataContext).masof;
  const lang = defoltlang?.lang;

  const [uplodeimagescreen, setuplodeimagescreen] = useState(false);

  useEffect(async () => {}, []);
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
    debugger;
    enterLoading(2);
    let task = "save";

    if (ticketid) {
      setticketid(value.ticketid);
    } else {
      setticketid(null);
    }

    let userid = loginstatus.userid;
    let locationid = value.locationid[1];
    let roomid = parseInt(value.roomid[1]);
    let categoryid = value.categoryid[1];
    let urgencyid;
    if (!value.urgencyid) {
      urgencyid = 2;
    } else {
      urgencyid = value.urgencyid;
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

    console.log("Success:", obj);
    let reqruter = "newticket";
    let res = await PostToServer(reqruter, obj);
    if (res.error === 1) {
      seterrmassege(true);
      seterrmassegetext(res.message);
      setloadings([0]);
    } else {
      setloadings([0]);
      seterrmassege(true);
      setticketid(res.ticketid);
      seterrmassegetext(res.message);

      setTimeout(() => {
        setuplodeimagescreen(true);
        seterrmassege(false);
      }, 2000);
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

  const Goeinfbacktopage = () => {
    Goback();
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
  const week = [
    { date: "יום א" },
    { date: "יום ב" },
    { date: "יום ג" },
    { date: "יום ד" },
    { date: "יום ה" },
    { date: "יום ו" },
  ];
  const month = [
    { date: "כל ה 1 לחודש" },
    { date: "כל ה 2 לחודש" },
    { date: "כל ה 3 לחודש" },
    { date: "כל ה 4 לחודש" },
    { date: "כל ה 5 לחודש" },
    { date: "כל ה 6 לחודש" },

    { date: "כל ה 7 לחודש" },

    { date: "כל ה 8 לחודש" },

    { date: "כל ה 9 לחודש" },

    { date: "כל ה 10 לחודש" },

    { date: "כל ה 11 לחודש" },

    { date: "כל ה 12 לחודש" },

    { date: "כל ה 13 לחודש" },

    { date: "כל ה 14 לחודש" },

    { date: "כל ה 15 לחודש" },

    { date: "כל ה 16 לחודש" },

    { date: "כל ה 17 לחודש" },

    { date: "כל ה 18 לחודש" },
    { date: "כל ה 19 לחודש" },
    { date: "כל ה 20 לחודש" },
    { date: "כל ה 21 לחודש" },
    { date: "כל ה 22 לחודש" },
    { date: "כל ה 23 לחודש" },
    { date: "כל ה 24 לחודש" },
    { date: "כל ה 25 לחודש" },
    { date: "כל ה 26 לחודש" },
    { date: "כל ה 27 לחודש" },
    { date: "כל ה 28 לחודש" },
    { date: "כל ה 29 לחודש" },
    { date: "כל ה 30 לחודש" },
    { date: "כל ה 31 לחודש" },
  ];

  return (
    <div>
      <FormContener>
        {/* <div className="avatar"> */}
        <img src="/images/man.png" className="avatar" alt="Image" />
        {/* </div> */}
        {!uplodeimagescreen ? (
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div
              className="goback"
              onClick={() => {
                Goeinfbacktopage();
              }}
            >
              <FiArrowRight />
            </div>
            {/* קטגוריה משנית  */}
            <Form.Item name="categoryid">
              <Select showSearch placeholder={lang?.lang110}>
                {Subcategory
                  ? Subcategory.map((el) => {
                      return (
                        <Option value={[el.subname, el.subcategoryid]}>
                          {el.subname}
                        </Option>
                      );
                    })
                  : null}
              </Select>
            </Form.Item>

            {/* מיקום */}
            <Form.Item name="locationid">
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
              <Form.Item name="roomid">
                <Select showSearch placeholder={lang?.lang341}>
                  {rommarry
                    ? rommarry.map((el) => {
                        return (
                          <Option value={[el.roomname, el.roomid]}>
                            {el.roomname}
                          </Option>
                        );
                      })
                    : null}
                </Select>
              </Form.Item>
            ) : null}
            {/* הערות */}
            <Form.Item label={lang?.lang123} name="comments">
              <TextArea rows={4} />
            </Form.Item>
            {/* דחיפות  */}
            <Form.Item name="urgencyid">
              {/* <div> */}

              <Radio.Group defaultValue={2}>
                <Space direction="vertical">
                  <Radio className="Radio1" value={1}>
                    {lang?.lang120}
                  </Radio>

                  <Radio className="Radio2" value={2}>
                    {lang?.lang121}
                  </Radio>

                  <Radio className="Radio3" value={3}>
                    {lang?.lang122}
                  </Radio>
                </Space>
              </Radio.Group>
              {/* </div> */}
            </Form.Item>
            {Temmembertask ? (
              // תדירות
              <div className="frequency">
                <Form.Item name="frequencytyep" label={lang?.lang269}>
                  <Select style={{ width: 200 }} onSelect={Selectfreqtipe}>
                    {frequencyarry.map((el) => {
                      return <option value={el.value}>{el.text}</option>;
                    })}
                  </Select>
                </Form.Item>
                {datetype ? (
                  <Form.Item name="frequencydate" label={lang?.lang269}>
                    <Select>
                      {datetype.map((el) => {
                        return <option value={el.date}>{el.date}</option>;
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
          <Uplodetaskimage ticketid={ticketid} userid={loginstatus.userid} />
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

export default Formtask;
