import React, { useState, useContext, useEffect } from "react";
import DataContext from "../DataContext";
import { PoweroffOutlined } from "@ant-design/icons";

import { Form, Input, Button, Select, DatePicker, Badge } from "antd";
import { FormContenerdesktop } from "../styelscomponents/NewRequest";
import { FiArrowRight } from "react-icons/fi";

import { week, month, numMonth, day } from "./Arrydaits";
import { PostToServer } from "../serveses";
import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import Uplodetaskimage from "./uplodetaskimage";
import { Arryoficons } from "../Icons";
import { useHistory } from "react-router-dom";



const Desktnewreq = ({ Typeofreq, Temmembertask, setvisual, modalwasclos }) => {
  let history = useHistory();
  const routeRepeatedtask = history.location.pathname === "/Repeatedtask"
  const { Option } = Select;
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const loginstatus = useContext(DataContext).loginstatus;
  const changeticketlist = useContext(DataContext).changeticketlist;
  const defoltlang = useContext(DataContext).lang;
  const masof = useContext(DataContext).masof;
  const userlist = useContext(DataContext).userlist;

  const lang = defoltlang?.lang;
  let categorynames = masof?.categorynames;
  const [uplodeimagescreen, setuplodeimagescreen] = useState(false);

  //   setsubcategory(Typeofreq.maincategory);

  const [selectromm, setselectromm] = useState(false);
  let locationarry = masof?.locations;

  let [rommarry, setrommarry] = useState();

  const [errmassege, seterrmassege] = useState(false);
  const [errmassegetext, seterrmassegetext] = useState();
  const [dateName, setdateName] = useState();
  const [tickettypePick, settickettypePick] = useState();

  //ticketid = ticketguid
  const [ticketid, setticketid] = useState();
  const onFinish = async (value) => {
    console.log(value);
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
console.log(obj);

    let reqruter = routeRepeatedtask?"newplan":"newticket";
    console.log(reqruter);

    let res = await PostToServer(reqruter, obj);
    console.log(res);
    if (res.error === 1) {
      seterrmassege(true);
      seterrmassegetext(res.message);
      setloadings([0]);

    } else if  (res.error === "0") {
      let ruteruserid = routeRepeatedtask? "ticketplanlist" : "ticketlist";

      let ticketlis = await PostToServer(ruteruserid, { userid: userid });
      changeticketlist(ticketlis);
      setloadings([0]);
      setuplodeimagescreen(true);

      routeRepeatedtask?
      setticketid(res.ticketid):
      setticketid(res.ticketguid);

      routeRepeatedtask?
      settickettypePick("plan"):
      settickettypePick("ticket");

      seterrmassegetext(res.message);
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

  const frequencyarry = [
    { value: "w", text: lang.lang275 },
    { value: "m", text: lang.lang276 },
    { value: "x", text: lang.lang363 },
    { value: "z", text: lang.lang361 },
    { value: "y", text: lang.lang277 },
  ];
  const [datetype, setdatetype] = useState(false);
  const [dayMonth, setDayMonth] = useState(false);


    const Selectfreqtipe = (value) => {
    switch (value) {
      case "w":

        setDayMonth(false);
        setdateName("frequencyamount_w")
        setdatetype(week);
        break;
      case "m":
        setdatetype(month);
        setDayMonth(false);
        setdateName("frequencyamount_m")

        break;
      // case "three_month":
      //   setdatetype(false);
      //   setDayMonth(true);

      //   break;
      default:
        setdatetype(false);
        setDayMonth(true);
        setdateName("frequencydate")  
        
        
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

  const onChange = (value) => {
    if (value) {
      let listofrooms = locationarry.filter((el) => {
        return el.locationid === value[1];
      });

      setrommarry(listofrooms[0].rooms);
      setselectromm(true);
    } else {
      setselectromm(false);
    }
  };
  const [steff, setstsff] = useState();
  const orderuserstaf = () => {
    let staflist = userlist.filter((el) => el.levelid === 5);
    setstsff(staflist);
  };

  const closecancel = () => {
    form.resetFields();
    setsubcategory(false);

    setvisual();
  };

  return (
    <div >
        {/* {uplodeimagescreen ? ( */}
        {!uplodeimagescreen ? (
      <FormContenerdesktop>
        <div className="headr_newreq">

        {lang?.lang100}
        </div>
          <div>
            <Form
              form={form}
              name="newreqwest"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              {/* קטגוריה ראשית */}
              <Form.Item
                name="maincategory"
                labelAlign={"right"}
                // rules={[{ required: true, message: lang?.lang110 }]}
              >
                <Select
                  showSearch
                  placeholder={lang?.lang110}
                  onChange={chusencategory}
                >
                  {/* <Option value={false}>{lang?.lang110}</Option> */}

                  {categorynames
                    ? categorynames.map((el) => {
                        let finicon = Arryoficons.find((ic) => 
                        el.icon === ic.iconid)

                          // if (el.icon === ic.iconname) {
                        //     if (el.id === ic.iconid) {

                        //     return ic;
                        //   }
                        // });
                        // let icon;

                        // if (finicon?.icon) {
                        //   icon = finicon.icon;
                        // } else {
                        //   icon = false;
                        // }

                        
  const maincategoryname = (
    <div >
 {el.maincategoryname}
          <img src={finicon?.icon} alt= "" style={{height: "25px", marginInlineStart:"10px" }}/> 
    </div>
  );

                        return (
                          <Option
                          style={{padding: "0 25px"}}
                            value={[
                              maincategoryname,
                              // [el.maincategoryname, " ", <img src={icon} alt= ""  />],
                              el.id,
                            ]}
                          >
                            {el.maincategoryname}{" "}
                            {finicon?.icon ? <img src={finicon?.icon} alt= ""                         
       style={{ height: "25px", margin:"5px 10px" }}/> 
     :"" }
     {/* : <PoweroffOutlined        style={{ width: "25px", marginInlineEnd:"10px" }}/> } */}
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
                // rules={[{ required: true, message: lang?.lang110 }]}
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
                ) :                null
}
              {/* </div> */}
              {/* הערות */}
              <Form.Item name="comments">
                <TextArea rows={4} placeholder={lang?.lang123} />
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
              <div className="selecthiden">
                <Form.Item
                  name="locationid"
                  // rules={[{ required: true, message: lang?.lang340 }]}
                  className="select_half"
                >
                  <Select
                    showSearch
                    placeholder={lang?.lang340}
                    onChange={onChange}
                  >
                    {/* <Option value={false}>{lang?.lang340}</Option> */}

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
                <Form.Item
                  name="roomid"
                  // rules={[{ required: true, message: lang?.lang341 }]}
                  className="select_half"
                >
                    <Select showSearch={rommarry?true:false}  placeholder={rommarry?lang?.lang341:null}>
                      {rommarry
                        ? rommarry.map((el, index) => {
                            return (
                              <Option
                                key={index}
                                value={[el.roomname, el.roomid]}
                              >
                                {el.roomname}
                              </Option>
                            );
                          })
                        : null}
                    </Select>
                </Form.Item>
              </div>
              {/* הפנה לאיש צוות */}
              <Form.Item name="steff" >
                <Select showSearch placeholder={lang?.lang240}>
                  {/* <Option value={false}>{lang?.lang240}</Option> */}

                  {steff
                    ? steff.map((el, index) => {
                        return (
                          <Option
                            key={index}
                            value={[el.firstname, el.lastname]}
                          >
                            {el.firstname} {""} {el.lastname}
                          </Option>
                        );
                      })
                    : null}
                </Select>
              </Form.Item>
              {routeRepeatedtask? (
              // {Temmembertask ? (
                // תדירות

                <div className="selecthiden">
                  <Form.Item name="frequencytype"  className="select_half"
                                    // rules={[{ required: true, message: lang?.lang269 }]}

>
                    <Select  onSelect={Selectfreqtipe}placeholder={lang?.lang269}>
                    {/* <Option value={false}>{lang?.lang269}</Option> */}
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
                    <Form.Item   className="select_half" 
                     name={dateName}
                    //  name={dateName==="frequencyamount_m"?"frequencyamount_m":"frequencyamount_w"}
          //  rules={[{ required: true, message: lang?.lang269 }]}
                    >
                      <Select >
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
                  {dayMonth ? (
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
<div className="div_btn_send">

            <Button className="cancel" onClick={closecancel}>
              {" "}
              ביטול
            </Button>
              <Button type="primary" htmlType="submit" loading={loadings[2]} >
                {routeRepeatedtask ? `${lang?.lang344}` : `${lang?.lang124}`}
              </Button>
</div>
            </Form>

          </div>
            </FormContenerdesktop>
        ) : (
          <div>
            {/* <button
              onClick={() => {
                setuplodeimagescreen(false);
                closecancel();
              }}
              className="goback"
            >
              <FiArrowRight />
            </button> */}
            <Uplodetaskimage
              ticketid={ticketid}
              userid={loginstatus.userid}
              setvisual={setvisual}
              tickettypePick={tickettypePick}
              setuplodeimagescreen={() => {
                setuplodeimagescreen(false);
                closecancel();
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
    </div>
  );
};

export default Desktnewreq;
