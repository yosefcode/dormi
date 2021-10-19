import React, { useState, useContext } from "react";
import DataContext from "../DataContext";

import { Link } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { AiOutlineCamera } from "react-icons/ai";
import { Modal, Upload, Button } from "antd";
import {
  FormContener,
  Problemcontener,
  Buttonsenimage,
} from "../styelscomponents/NewRequest";
import Sendedmassege from "../assets/Sendimag.svg";
import { BsCloudUpload } from "react-icons/bs";

import { PostToServer } from "../serveses";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
const Uplodetaskimage = ({ userid, ticketid }) => {
  // const Temmembertask = props.Temmembertask;
  let intViewportWidth = window.innerWidth;
  let ScreenWidtPhone;
  if (intViewportWidth > 600) {
    ScreenWidtPhone = false;
  } else {
    ScreenWidtPhone = true;
  }
  const loginstatus = useContext(DataContext).loginstatus;

  const defoltlang = useContext(DataContext).lang;
  const masof = useContext(DataContext).masof;
  const lang = defoltlang?.lang;

  // seng imge
  const [uplodeimage, setuplodeimage] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  });
  const [previewImage, setpreviewImage] = useState();
  const [previewVisible, setpreviewVisible] = useState(false);
  const [previewTitle, setpreviewTitle] = useState("");

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setpreviewImage(file.url || file.preview);
    setpreviewVisible(true);
    setpreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const upludeimage = ({ fileList }) => setuplodeimage({ fileList });

  const { fileList } = uplodeimage;
  const [loadings, setloadings] = useState([]);
  const enterLoading = (index) => {
    setloadings((loadings) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return newLoadings;
    });
  };

  const [Buttonsecses, setButtonsecses] = useState(false);
  const sendimage = async () => {
    enterLoading(2);
    // let userid = loginstatus.userid;
    let task = "picture";
    let img = fileList;
    let reqruter = "ticketpicture";
    let obj = {
      task,
      ticketid,
      userid,
      img,
    };
    let res = await PostToServer(reqruter, obj);
    setuplodeimage([]);
    console.log("state", res);
    setButtonsecses(true);
    setloadings([0]);
  };

  return (
    <div>
      <FormContener Position={uplodeimage?.fileList?.length}>
        <Link to="/ListOfreq" className="GoBackLink">
          {ScreenWidtPhone ? (
            <CloseOutlined
              onClick={() => {
                console.log("hi");
              }}
            />
          ) : (
            lang?.lang283
          )}
        </Link>
        <div className="textbloon">
          <img
            src="/images/Semdimag.png"
            className="Sendedmassege"
            alt="Sendedmassege"
          />

          <h2 style={{ color: "#1C1547" }}>{lang?.lang131}</h2>
          <p>נעדכן אותך בהמשך טיפוך</p>

          <div className="avaterpopup">
            <Upload
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={upludeimage}
            >
              <button className="uploadimage">
                <span>
                  <AiOutlineCamera className="camraicon" />
                </span>
                <span>{lang?.lang274}</span>
              </button>
            </Upload>

            {uplodeimage?.fileList?.length >= 1 ? (
              <Buttonsenimage Buttonsecses={Buttonsecses}>
                <Button onClick={sendimage} loading={loadings[2]}>
                  {!Buttonsecses ? lang?.lang265 : "נשלח"}
                </Button>
              </Buttonsenimage>
            ) : null}
          </div>

          <p style={{ color: "#6B6B6B" }}>
            {!Buttonsecses ? lang?.lang132 : "הזדמנות טובה לומר שוב תודה"}
          </p>
          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={() => {
              setpreviewVisible(false);
            }}
          >
            <img alt="example" style={{ width: "100%" }} src={previewImage} />
          </Modal>
        </div>
      </FormContener>
    </div>
  );
};

export default Uplodetaskimage;
