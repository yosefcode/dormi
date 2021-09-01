import React, { useState, useContext, useEffect } from "react";
import DataContext from "../DataContext";

import { Link } from "react-router-dom";

import { Form, Input, Button, Modal, Radio, Space, Select, Upload } from "antd";
import { FormContener, Problemcontener } from "../styelscomponents/NewRequest";
import { FiArrowRight } from "react-icons/fi";
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
  document.body.style.backgroundColor = "#3286F9";

  // const Temmembertask = props.Temmembertask;
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
    // let userid = loginstatus.userid;
    let reqruter = "ticketpicture";
    let obj = {
      task,
      ticketid,
      userid,
      img,
    };
    debugger;
    let res = await PostToServer(reqruter, obj);

    console.log("state", res);
  };
  //   const Goeinfbacktopage = () => {
  //     Goback();
  //   };
  return (
    <div>
      <FormContener>
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
            <img alt="example" style={{ width: "100%" }} src={previewImage} />
          </Modal>
        </div>
      </FormContener>
    </div>
  );
};

export default Uplodetaskimage;
