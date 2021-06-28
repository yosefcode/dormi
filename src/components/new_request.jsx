import React, { useState, useContext, useEffect } from "react";
import DataContext from "../DataContext";

import { Link } from "react-router-dom";

import { Form, Input, Button, Modal, Radio, Space, Select, Upload } from "antd";
import { FormContener, Problemcontener } from "../styelscomponents/NewRequest";
import { FiArrowRight } from "react-icons/fi";
import { BsCloudUpload } from "react-icons/bs";
import { PoweroffOutlined } from "@ant-design/icons";
import { GettfromServer, PostToServer } from "../serveses";

import { Arryoficons } from "../Icons";
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
  const data = useContext(DataContext);
  const defoltlang = useContext(DataContext).lang;

  const lang = defoltlang?.lang;

  const changdata = useContext(DataContext).changdata;
  const [uplodeimagescreen, setuplodeimagescreen] = useState(false);

  const [typeofreq, settypeofreq] = useState();
  const [typs, settyps] = useState(true);

  useEffect(async () => {
    let ruter = "post-read3";
    let res = await GettfromServer();
    console.log("newreqget", res);
    let valeu = { name: "moshe", phonenumber: "1" };
    let respost = await PostToServer(ruter, valeu);
    console.log("respost", respost);
  }, []);

  const [selectromm, setselectromm] = useState(false);
  const onChange = () => {
    setselectromm(true);
  };

  const listtips = [
    { type: "חשמל", id: 1, icon: "HiOutlineDotsHorizontal" },
    { type: "אינסטלציה", id: 2 },
    { type: "שקר3", id: 3 },
    { type: "שקר2", id: 1011 },
    { type: "שקר1", id: 1213 },
  ];
  const problomtypearry = [
    { type: "חשמל", id: 123 },
    { type: "אינסטלציה", id: 456 },
  ];
  const locationarry = [
    { type: "חדר אוכל", id: 123 },
    { type: "פנימייה", id: 456 },
  ];

  // changdata({ userid: "12345" });
  const onFinish = (value) => {
    debugger;
    enterLoading(2);

    let userid = data?.data?.userid;
    let locationid = value.locationid[1];
    let roomid = value.roomid[1];
    let subcategoryid = value.subcategoryid[1];
    let urgencyid = value.urgencyid;
    let comments = value.comments;

    let obj = {
      userid,
      locationid,
      roomid,
      subcategoryid,
      urgencyid,
      comments,
      ...typeofreq,
    };
    console.log("Success:", obj);
    setTimeout(() => {
      setuplodeimagescreen(true);
    }, 3000);
  };

  const chosentyp = (value) => {
    settyps(false);
    settypeofreq({ maincategory: value.type });
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
  };

  const handleChange = ({ fileList }) => setuplodeimage({ fileList });

  const { previewVisible, previewImage, fileList, previewTitle } = uplodeimage;
  const uploadButton = (
    <div>
      <BsCloudUpload />

      <div className="uplodeimage">{lang?.lang274}</div>
    </div>
  );

  const sendimage = () => {
    console.log("state", uplodeimage);
  };
  const onFormSubmit = (value) => {
    // e.preventDefault();

    console.log("imag", value);
    const formData = new FormData();
    formData.append("file", value.file);
    // formData.append("phonenumber", phonenumber);
    // formData.append("s3path", `${phonenumber}/`);
  };

  // const handleChange = async (e) => {
  //   let myPromise = await new Promise((resolve, reject) => {
  //     resolve({ file: e.target.files[0] });
  //   });
  //   onFormSubmit(myPromise);
  // };

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
                <div className="listofproblom">
                  {listtips.map((el) => {
                    let finicon = Arryoficons.find((ic) => {
                      if (el.id === ic.iconid) {
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
                        <p className="uniqueproblem">{el.type}</p>
                      </div>
                    );
                  })}
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
              <Form name="basic" onFinish={onFinish}>
                <div className="goback">
                  <FiArrowRight
                    onClick={() => {
                      settyps(true);
                    }}
                  />
                </div>
                <Form.Item
                  name="subcategoryid"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select showSearch placeholder={lang?.lang110}>
                    {problomtypearry.map((el) => {
                      return (
                        <Option value={[el.type, el.id]}>{el.type}</Option>
                      );
                    })}
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
                    {locationarry.map((el) => {
                      return (
                        <Option value={[el.type, el.id]}>{el.type}</Option>
                      );
                    })}
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
                      {locationarry.map((el) => {
                        return (
                          <Option value={[el.type, el.id]}>{el.type}</Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                ) : null}
                <Form.Item label={lang?.lang123} name="comments">
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
                    onChange={handleChange}
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
          </FormContener>
        )}
      </div>
    </div>
  );
};

export default Nwerequest;
