import React, { useState, useContext } from "react";
import DataContext from "../DataContext";
import { PoweroffOutlined } from "@ant-design/icons";

import { Form, Input, Button, Select, DatePicker, Badge } from "antd";
import { FormContener } from "../styelscomponents/NewRequest";
import { FiArrowRight } from "react-icons/fi";

import { week, month, numMonth, day } from "./Arrydaits";
import { PostToServer } from "../serveses";
import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import Uplodetaskimage from "./uplodetaskimage";
import { Arryoficons } from "../Icons";

const Formtask = ({ Typeofreq, Goback, Temmembertask,topFunction  }) => {
  const { Option } = Select;
  const { TextArea } = Input;

  const loginstatus = useContext(DataContext).loginstatus;
  const changeticketlist = useContext(DataContext).changeticketlist;
  const defoltlang = useContext(DataContext).lang;
  const masof = useContext(DataContext).masof;
  const lang = defoltlang?.lang;

  const [uplodeimagescreen, setuplodeimagescreen] = useState(false);

  //   setsubcategory(Typeofreq.maincategory);
  const [selectromm, setselectromm] = useState(false);
  let locationarry = masof?.locations;
  const [tickettypePick, settickettypePick] = useState();

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
  const [dateName, setdateName] = useState();

  //ticketid = ticketguid
  const [ticketid, setticketid] = useState();
  console.log("ticketid", ticketid);
  const onFinish = async (value) => {
    // enterLoading(2);
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
    let urgency;
    if (value?.urgency) {
      urgency = value?.urgency;
    } else {
      urgency = 2;
    }
    let comments;
    if (value.comments) {
      comments = value.comments.replace(/[<>${}]/g, "danger$&");
    }
    let frequencytype;
    if (value?.frequencytype) {
      frequencytype = value?.frequencytype;
    }

    let valueDateName=value?.frequencyamount_m?value.frequencyamount_m
    :value?.frequencyamount_w?value.frequencyamount_w: value.day+"/"+value.numMonth;


    let obj = {
      task,
      ticketid,
      userid,
      locationid,
      roomid,
      categoryid,
      urgency,
      comments, 
           frequencytype,
      [dateName]:valueDateName

      // ...typeofreq,
    };
    
    let reqruter = frequencytype || Temmembertask?"newplan":"newticket";
    console.log(obj);
    console.log(reqruter);

    let res = await PostToServer(reqruter, obj);
    console.log(res);
    
    if (res.error === "1") {
      seterrmassege(true);
      seterrmassegetext(res.message);
      setloadings([0]);
    } else if  (res.error === "0") {
      
      let ruteruserid =  "ticketlist";

      let ticketlis = await PostToServer(ruteruserid, { userid: userid });
      changeticketlist(ticketlis);
      setloadings([0]);
      setuplodeimagescreen(true);

      // seterrmassege(true);
      res.ticketid?
      setticketid(res.ticketid):
      setticketid(res.ticketguid);

      frequencytype?
      settickettypePick("plan"):
      settickettypePick("ticket");


      seterrmassegetext(res.message);
topFunction()
      // setTimeout(() => {
      // setuplodeimagescreen(true);
      // seterrmassege(false);
      // }, 2000);
    } else {
      seterrmassegetext("אירעה שגיאה נסה שוב");
      seterrmassege(true);


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
    { value: "w", text: lang.lang275 },
    { value: "m", text: lang.lang276 },
    { value: "x", text: lang.lang363 },
    { value: "z", text: lang.lang361 },
    { value: "y", text: lang.lang277 },
  ];

  const [datetype, setdatetype] = useState(false);
  const [datetypepiker, setdatetypepiker] = useState(false);
  const Selectfreqtipe = (value) => {
    switch (value) {
      case "w":

        setdatetypepiker(false);
        setdateName("frequencyamount_w")
        setdatetype(week);
        break;
      case "m":
        setdatetype(month);
        setdatetypepiker(false);
        setdateName("frequencyamount_m")

        break;
      // case "three_month":
      //   setdatetype(false);
      //   setdatetypepiker(true);

      //   break;
      default:
        setdatetype(false);
        setdatetypepiker(true);
        setdateName("frequencydate")  
        
        
        break;
      }
    };

    let finicon = Arryoficons.find((ic) => 
    Typeofreq.icon === ic.iconid)

  // let Icon;
  // let findicon = Arryoficons.find((ic) => {
  //   return Typeofreq.id === ic.iconid;
  //   // return Typeofreq.icon === ic.iconname;
  // });
  // if (findicon) {
  //   Icon = findicon.icon;
  // }

  return (
    <div>
        {!uplodeimagescreen ? (
      <FormContener>
          <div style={{ width: "100%" }}>
        <div
          className="goback"
          onClick={() => {
            Goeinfbacktopage();
          }}
        >
          <FiArrowRight />
        </div>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className="theproblemis">
              <p>הבעיה היא {Typeofreq.maincategoryname}</p>
              {finicon ? (
                <img src={finicon?.icon} alt= ""  className="iconproblem" />
              ) : (
                <PoweroffOutlined className="iconproblem" />
              )}
            </div>
<br/>
            {/* קטגוריה משנית  */}
            <Form.Item
              name="categoryid"
              labelAlign={"right"}
              rules={[{ required: true, message: lang?.lang110 }]}
            >
              <Select showSearch placeholder={lang?.lang110}>
                {Typeofreq
                  ? Typeofreq.subcategory.map((el) => {
                      return (
                        <Option value={[el.subname, el.subcategoryid]}>
                          {el.subname}
                        </Option>
                      );
                    })
                  : null}
              </Select>
            </Form.Item>
            {/* הערות */}
            <p className="Lable">{lang?.lang123}</p>
            <Form.Item name="comments">
              <TextArea rows={4} />
            </Form.Item>

            {/* דחיפות  */}
            <Form.Item name="urgency" defaultValue={2}>
              <Select defaultValue={2}>
                <Option key={1} value={1}>
                  <Badge color="#22E7B7" text={lang?.lang122} />
                </Option>
                <Option key={2} value={2}>
                  <Badge color="orange" text={lang?.lang121} />
                </Option>
                <Option key={3} value={3}>
                  <Badge color="#D91D61" text={lang?.lang120} />
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

            {!Temmembertask ? (
              // תדירות
              <div >
                <Form.Item name="frequencytype" >
                  <Select onSelect={Selectfreqtipe} placeholder={lang?.lang269}>
                    {frequencyarry.map((el, index) => {
                      return (
                        <option key={index} value={el.value}>
                          {el.text}
                        </option>
                      );
                    })}
                  </Select>
                </Form.Item>
                {datetype ? (
                  <Form.Item  name={dateName}>
                    <Select placeholder={lang?.lang269}>
                      {datetype.map((el, index) => {
                        return (
                          <option key={index} value={index+1}>
                            {el.date}
                          </option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                ) : null}


{datetypepiker ? (
                    <div className="select_half_div">
                    <Form.Item name="numMonth"   className="select_half_2">
                                            <Select >
                        {numMonth.map((el, index) => {
                          return (
                            <option key={index} value={el.date}>
                              {el.date}
                            </option>
                          );
                        })}
                      </Select>
                        </Form.Item>
/

                        <Form.Item name="day"   className="select_half_2">                                    
                                            <Select >
                        {day.map((el, index) => {
                          return (
                            <option key={index} value={el.date}>
                              {el.date}
                            </option>
                          );
                        })}
                      </Select>

                      {/* <DatePicker  onChange={onChangeDatePicker}/> */}
                    </Form.Item></div>
                  ) : null}
                </div>
            ) : null}
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loadings[2]}>
                {Temmembertask ? `${lang?.lang344}` : `${lang?.lang124}`}
              </Button>
            </Form.Item>
          </Form>
          </div>
      </FormContener>

        ) : (
            <Uplodetaskimage
            style={{ width:"100%"}}
            topFunction={topFunction}
              ticketid={ticketid}
              userid={loginstatus.userid}
              Goeinfbacktopage={Goeinfbacktopage}
              tickettypePick={tickettypePick}
              setuplodeimagescreen={() => {
                setuplodeimagescreen(false);
              }}
            />
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
      </div>
  );
};

export default Formtask;
