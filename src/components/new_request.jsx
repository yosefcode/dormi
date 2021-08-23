import React, { useState, useContext, useEffect } from "react";
import DataContext from "../DataContext";

import { Link } from "react-router-dom";

import { Form, Input, Button, Modal, Radio, Space, Select, Upload } from "antd";
import { FormContener, Problemcontener } from "../styelscomponents/NewRequest";
import { FiArrowRight } from "react-icons/fi";
import { BsCloudUpload } from "react-icons/bs";
import { PoweroffOutlined } from "@ant-design/icons";
import { PostToServer } from "../serveses";
import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import { Arryoficons } from "../Icons";
import { GoTools } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import {
  AiOutlineCluster,
  AiFillFormatPainter,
  AiFillThunderbolt,
} from "react-icons/ai";
import { BsBuilding, BsGearFill } from "react-icons/bs";

import { GiBroom } from "react-icons/gi";
import { BsFillDropletFill, BsFillAlarmFill } from "react-icons/bs";
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
const Nwerequest = (props) => {
  document.body.style.backgroundColor = "#3286F9";
  const { Option } = Select;
  const { TextArea } = Input;
  const Temmembertask = props.Temmembertask;
  const loginstatus = useContext(DataContext).loginstatus;

  const defoltlang = useContext(DataContext).lang;
  const masof = useContext(DataContext).masof;
  const lang = defoltlang?.lang;

  const changdata = useContext(DataContext).changdata;
  const [uplodeimagescreen, setuplodeimagescreen] = useState(false);

  const [typeofreq, settypeofreq] = useState();
  const [typs, settyps] = useState(true);

  useEffect(async () => {}, []);

  const [selectromm, setselectromm] = useState(false);
  let locationarry = masof?.locations;
  let categorynames = masof?.categorynames;
  console.log(categorynames);
  let [rommarry, setrommarry] = useState();
  const onChange = (value) => {
    let listofrooms = locationarry.filter((el) => {
      return el.locationid === value[1];
    });

    setrommarry(listofrooms[0].rooms);
    setselectromm(true);
  };

  const listtips = [
    { type: "חשמל", id: 1, icon: "HiOutlineDotsHorizontal" },
    { type: "אינסטלציה", id: 2 },
    { type: "שקר3", id: 3 },
    { type: "שקר2", id: 1011 },
    { type: "שקר1", id: 1213 },
  ];
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
    let locationid = value.locationid[1];
    let roomid = parseInt(value.roomid[1]);
    let categoryid = value.categoryid[1];
    let urgencyid = value.urgencyid;
    let comments = value.comments.replace(/[<>${}]/g, "danger$&");

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
  // כפתור טעינה
  const [subcategory, setsubcategory] = useState();
  const chosentyp = (value) => {
    settyps(false);
    settypeofreq({ maincategory: value.id });
    setsubcategory(value.subcategory);
    console.log(" maincategory", value);
  };

  const [loadings, setloadings] = useState([]);
  const enterLoading = (index) => {
    setloadings((loadings) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return newLoadings;
    });
  };

  // seng imge
  const [uplodeimage, setuplodeimage] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  });

  const handleCancel = () => setuplodeimage({ previewVisible: false });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setuplodeimage({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
    debugger;
  };

  const upludeimage = ({ fileList }) => setuplodeimage({ fileList });

  const { previewVisible, previewImage, fileList, previewTitle } = uplodeimage;
  const uploadButton = (
    <div>
      <BsCloudUpload />

      <div className="uplodeimage">{lang?.lang274}</div>
    </div>
  );

  const sendimage = async () => {
    let task = "picture";
    let img = fileList;
    let userid = loginstatus.userid;
    let reqruter = "ticketpicture";
    let obj = {
      task,
      ticketid,
      userid,
      img,
    };

    let res = await PostToServer(reqruter, obj);

    console.log("state", res);
  };

  return (
    <div>
      {/* <div> */}

      <div>
        {typs ? (
          <Problemcontener>
            <img src="/images/man.png" className="avatar" alt="Image" />
            <div className="icondisply">
              <p id="hadep">{lang?.lang337}</p>
              <p>{lang?.lang338}</p>
              <div>
                {/* <div>
                  <BsFillAlarmFill />
                  <GoTools />
                  <RiComputerLine />
                  <AiOutlineCluster />,
                  <AiFillFormatPainter />,
                  <AiFillThunderbolt />
                  <BsBuilding />
                  <BsGearFill />
                  <GiBroom />
                  <BsFillDropletFill />
                </div> */}
                <div className="listofproblom">
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
                          <div className="problome">
                            <p
                              onClick={() => {
                                chosentyp(el);
                              }}
                              className="iconproblem"
                            >
                              {icon ? <finicon.icon /> : <PoweroffOutlined />}
                            </p>
                            <p className="uniqueproblem">
                              {el.maincategoryname}
                            </p>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          </Problemcontener>
        ) : (
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
                <div className="goback">
                  <FiArrowRight
                    onClick={() => {
                      settyps(true);
                    }}
                  />
                </div>
                <Form.Item
                  name="categoryid"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
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

                <Form.Item
                  name="locationid"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
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
                {selectromm ? (
                  <Form.Item
                    name="roomid"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
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
                <Form.Item
                  label={lang?.lang123}
                  name="comments"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                  name="urgencyid"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Radio.Group>
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
                </Form.Item>
                {Temmembertask ? (
                  <div className="frequency">
                    <Form.Item
                      name="frequency"
                      label={lang?.lang269}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
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
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loadings[2]}
                  >
                    {Temmembertask ? `${lang?.lang344}` : `${lang?.lang124}`}
                  </Button>
                </Form.Item>
              </Form>
            ) : (
              <div className="textbloon">
                <p>{lang?.lang131}</p>
                <p>{lang?.lang132}</p>

                <Link to="/ListOfreq">{lang?.lang283}</Link>
                <div className="avaterpopup"></div>
                <div className="uploadimage">
                  <Upload
                    listType="picture-card"
                    // fileList={fileList}
                    onPreview={handlePreview}
                    onChange={upludeimage}
                  >
                    {uploadButton}
                  </Upload>
                  {uplodeimage?.fileList?.length >= 1 ? (
                    <button onClick={sendimage}>{lang?.lang265}</button>
                  ) : null}
                </div>
                <Modal
                  visible={previewVisible}
                  title={previewTitle}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
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
        )}
      </div>
    </div>
  );
};

export default Nwerequest;
