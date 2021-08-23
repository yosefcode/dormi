import React, { useContext, useState, useRef } from "react";
import { Select, Input, Upload, Card, Button } from "antd";
import SignaturePad from "react-signature-canvas";
import DataContext from "../../DataContext";
import { BsCloudUpload } from "react-icons/bs";
import { PostToServer } from "../../serveses";
import styled from "styled-components";

const { TextArea } = Input;
const { Option } = Select;
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export const Apruchclose = ({ Closemodal }) => {
  const defoltlang = useContext(DataContext).lang;
  const loginstatus = useContext(DataContext).loginstatus;

  const lang = defoltlang?.lang;
  const [uplodeimage, setuplodeimage] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  });

  const sigCanvas = useRef({});
  const upludeimage = ({ fileList }) => setuplodeimage({ fileList });
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

  const { previewVisible, previewImage, fileList, previewTitle } = uplodeimage;
  const clear = () => {
    sigCanvas.current.clear();
  };
  const onfinish = async () => {
    const hiddensignature = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    console.log("hiddensignature", hiddensignature);
    let closingPic = fileList;

    let userid = loginstatus.userid;
    let task = "cost";
    let ticketguid = "82557424-473F-44D2-8718-8151243D9B91";
    let obj = {
      task,
      userid,
      ticketguid,
      closingPic,
      hiddensignature,
    };
    console.log(obj);
    let ruter = "ticket";
    let res = await PostToServer(ruter, obj);
    // debugger;
    sigCanvas.current.clear();

    Closemodal();
    setuplodeimage({
      previewVisible: false,
      previewImage: "",
      previewTitle: "",
    });
  };
  const uploadButton = (
    <div>
      <BsCloudUpload />

      <div className="uplodeimage">{"העלאה"}</div>
    </div>
  );
  return (
    <div>
      <Upload
        listType="picture-card"
        // fileList={fileList}
        onPreview={handlePreview}
        onChange={upludeimage}
      >
        {uploadButton}
      </Upload>

      <SignaturePad
        ref={sigCanvas}
        canvasProps={{ className: "SignaturCanvas" }}
      />
      <button onClick={clear}>cler</button>
      <button onClick={onfinish}>send</button>
    </div>
  );
};
export const Posteditofticket = (task, ticketguid, value) => {
  console.log("Delet", task, ticketguid);
};

export const Closetask = ({ data, submit }) => {
  return (
    <div className="Closepopup">
      <CardStyeld>
        <h3>
          {`משימות למחיקה`} {data.length}
        </h3>
        {data.map((item) => {
          return (
            <div>
              <span> מספר משימה</span>
              <span> {item.id}</span>
            </div>
          );
        })}

        <button className="submit" onClick={submit}>
          מחק
        </button>
      </CardStyeld>
    </div>
  );
};
const CardStyeld = styled.div`
  height: 267px;

  overflow-y: scroll;
  text-align: start;
  height: 208px;
  background-color: white;

  width: 126px;

  h3 {
    background-color: gray;
    text-align: start;
    height: 55px;
    padding: 5%;
    display: block;
  }
  .listodors {
    display: flex;

    flex-direction: column;
  }
  .singellocation {
    display: flex;
    margin: 10px;
    justify-content: space-between;
  }
`;
