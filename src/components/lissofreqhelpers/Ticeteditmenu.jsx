import React, { useContext, useState, useRef } from "react";
import { Select, Input, Upload, Card, Button, Tag, Form } from "antd";
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
export const Apruchclose = ({ Closemodal, ticketguid, Clearform }) => {
  const defoltlang = useContext(DataContext).lang;
  const loginstatus = useContext(DataContext).loginstatus;
  const [form] = Form.useForm();
  const lang = defoltlang?.lang;
  const [uplodeimage, setuplodeimage] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  });
  if (Clearform) {
    form.resetFields();
  }
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
  const onFinish = async (value) => {
    const hiddensignature = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    console.log("hiddensignature", hiddensignature);
    let closingPic = fileList;

    let userid = loginstatus.userid;

    // let y = ticketguid;
    // let x = value;
    let task = "cost";
    // let ticketguid = "82557424-473F-44D2-8718-8151243D9B91";
    let obj = {
      task,
      userid,
      ticketguid,
      ...value,
      closingPic,
      hiddensignature,
    };
    debugger;
    console.log(obj);
    let ruter = "ticket";
    let res = await PostToServer(ruter, obj);
    sigCanvas.current.clear();
    // debugger;

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
  let stafarry = ["אביתר", "בעז", "משה"];
  return (
    <div>
      <div className="edittask">
        <Form name="basic" onFinish={onFinish} form={form}>
          <div className="formedittask">
            {/* נסגר עי */}
            <div className="taskright">
              <Form.Item name="closdbi" label={lang?.lang197}>
                <Select placeholder="איש צוות" allowClear>
                  {stafarry.map((el) => {
                    return <Option value={el}>{el}</Option>;
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                name="price"
                label={`${lang?.lang149}(${lang?.lang204})`}
              >
                <Input type="bunber" inputmode="numeric" />
              </Form.Item>
              <Form.Item name="anbsuertostudent" label={lang?.lang205}>
                <TextArea allowClear rows={4} />
              </Form.Item>
              <Form.Item name="uplodeinag" allowClear label="בלבלבלב">
                <Upload
                  listType="picture-card"
                  // fileList={fileList}
                  onPreview={handlePreview}
                  onChange={upludeimage}
                >
                  {uploadButton}
                </Upload>
              </Form.Item>
            </div>
            <div className="taskleft">
              <Form.Item name="insidetext" label={lang?.lang206}>
                <TextArea allowClear rows={4} />
              </Form.Item>
              <Form.Item label="בלבלבלב">
                <div className="canvas_wrapper">
                  <SignaturePad
                    ref={sigCanvas}
                    canvasProps={{ className: "SignaturCanvas" }}
                  />
                  <a className="clear_button" onClick={clear}>
                    ניקוי חתימה
                  </a>
                </div>

                {/* <SignaturePad
                  ref={sigCanvas}
                  canva
                  sProps={{ className: "SignaturCanvas" }}
                />
                <button onClick={clear}>cler</button> */}
              </Form.Item>
            </div>

            <br />
          </div>
          <Button type="primary" htmlType="submit">
            send
          </Button>
        </Form>
      </div>
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
export const Switchurgency = (urgencyadmin, lang122, lang121, lang120) => {
  let urgencytext;
  let urgency;

  switch (urgencyadmin) {
    case "1":
      urgencytext = lang122;
      urgency = {
        color: "#389e0d",
        backgroundcoler: "#f6ffed",
        border: "#b7eb8f",
      };

      return { urgencytext, urgency };
      break;
    case "2":
      urgencytext = lang121;
      urgency = {
        color: "#fa8c16",
        backgroundcoler: "#fff7e6",
        border: "#ffd591;",
      };
      return { urgencytext, urgency };
      break;
    case "3":
      urgencytext = lang120;
      urgency = {
        color: "#cf1322",
        backgroundcoler: "#fff1f0",
        border: "#ffa39e",
      };
      return { urgencytext, urgency };
      break;
  }
};

export const Switcstatus = (statusname, lang162, lang174) => {
  let status;
  let statustext;
  switch (statusname) {
    case "פנייה חדשה":
      status = {
        color: "white",
        backgroundcoler: "#108ee9",
        border: "#1410e9",
      };
      statustext = lang162;
      return { status, statustext };
      break;
    case "בטיפול":
      status = {
        color: "white",
        backgroundcoler: "#87d068",
        border: "#68d082",
      };
      statustext = lang174;
      return { status, statustext };

      break;
  }
};
