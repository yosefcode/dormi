import React, { useState, useContext, useEffect } from "react";
import DataContext from "../DataContext";

import { Link } from "react-router-dom";

import { Form, Input, Button, Select, Badge } from "antd";
import { FormContener, Problemcontener } from "../styelscomponents/NewRequest";
import { FiArrowRight } from "react-icons/fi";
import { BsCloudUpload } from "react-icons/bs";

import { PostToServer } from "../serveses";
import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import Uplodetaskimage from "./uplodetaskimage";

const Formtaslfromlist = ({
  data,
  Typeofreq,
  Goback,
  Temmembertask,
}) => {
  document.body.style.backgroundColor = "white";

  const { Option } = Select;
  const { TextArea } = Input;
  // const Temmembertask = props.Temmembertask;
  const loginstatus = useContext(DataContext).loginstatus;

  const defoltlang = useContext(DataContext).lang;
  const masof = useContext(DataContext).masof;
  let categorynames = masof?.categorynames;
  const lang = defoltlang?.lang;
  const [Subcategory, setSubcategory] = useState();
  const [uplodeimagescreen, setuplodeimagescreen] = useState(false);
  const useefctasync = async () => {
    let res = categorynames.filter(
      (item) => item.maincategoryname === data.breadcrumb
    );

    setSubcategory(res[0]);
  };

  useEffect(() => {
    useefctasync();
  }, []);

  const topFunction = () => {
    window.scrollTo(0, 0);
  };


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
  console.log("Success:", data);

  //ticketid = ticketguid
  const [ticketid, setticketid] = useState();
  console.log(data.ticketid.toString());
  console.log(ticketid);
  const onFinish = async (value) => {
    enterLoading(2);
    let task = "edit";
      // setticketid(data.ticketid);

    // if (ticketid) {
    //   setticketid(value.ticketid);
    // } else {
    //   setticketid(null);
    // }

    let ticketid =data.ticketid.toString();
    let userid = loginstatus.userid;
    let locationid = value.locationid[1];
    let roomid = parseInt(value.roomid[1]);
    let categoryid = value.categoryid[1];
    let urgency;
    if (!value.urgency) {
      urgency = 2;
    } else {
      urgency = value.urgency;
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
      urgency,
      comments,
      // ...typeofreq,
    };

    let reqruter = "newticket";
    console.log("obj:", obj);
    let res = await PostToServer(reqruter, obj);
    console.log("res:", res);
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
        topFunction()
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
  return (
    <div>
        {!uplodeimagescreen ? (
      <FormContener>

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
            <Form.Item name="categoryid" initialValue={data.categoryname}>
              <Select showSearch placeholder={lang?.lang110}>
                {Subcategory
                  ? Subcategory.subcategory.map((el) => {
                      return (
                        <Option value={[el.subname, el.subcategoryid]}>
                          {el.subname}
                        </Option>
                      );
                    })
                  : null}
              </Select>
            </Form.Item>

            <Form.Item name="locationid" initialValue={data.locationName}>
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

            <Form.Item name="roomid" initialValue={data.roomName}>
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

            <div className="problem">

            {lang?.lang123}

            <Form.Item
              // label={lang?.lang123}
              name="comments"
              initialValue={data.comments}
            >
              <TextArea rows={4} />
            </Form.Item>
            </div>

            <Form.Item
              name="urgency"
              initialValue={parseInt(data.urgencyadmin)}
            >
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
            {Temmembertask ? (
              <div className="frequency">
                <Form.Item name="frequency" label={lang?.lang269}>
                  <Select showSearch>
                    {locationarry.map((el) => {
                      return (
                        <Option value={[el.type, el.id]}>{el.type}</Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </div>
            ) : null}
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loadings[2]}>
                {Temmembertask ? `${lang?.lang344}` : `${lang?.lang124}`}
              </Button>
            </Form.Item>
          </Form>
          </FormContener>

        ) : (
          // <div className="textbloon">
          //   <p>{lang?.lang131}</p>
          //   <p>{lang?.lang132}</p>

          //   <Link to="/ListOfreq">{lang?.lang283}</Link>
          //   <div className="avaterpopup"></div>
          //   <div className="uploadimage">
          //     <Upload
          //       listType="picture-card"
          //       // fileList={fileList}
          //       onPreview={handlePreview}
          //       onChange={upludeimage}
          //     >
          //       {uploadButton}
          //     </Upload>
          //     {uplodeimage?.fileList?.length >= 1 ? (
          //       <button onClick={sendimage}>{lang?.lang265}</button>
          //     ) : null}
          //   </div>
          //   <Modal
          //     visible={previewVisible}
          //     title={previewTitle}
          //     footer={null}
          //     onCancel={handleCancel}
          //   >
          //     <img alt="example" style={{ width: "100%" }} src={previewImage} />
          //   </Modal>
          // </div>

          <Uplodetaskimage ticketid={ticketid} userid={loginstatus.userid} 
          Goeinfbacktopage={Goeinfbacktopage} topFunction={topFunction}/>
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

export default Formtaslfromlist;
