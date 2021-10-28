import React, { useContext, useState, useRef } from "react";
import { Select, Input, Upload, Form } from "antd";
import SignaturePad from "react-signature-canvas";
import DataContext from "../../DataContext";
import { BsCloudUpload } from "react-icons/bs";
import { PostToServer } from "../../serveses";

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

    let closingPic;

    let userid = loginstatus.userid;
    if (fileList) {
      closingPic = fileList;
    } else {
      closingPic = [];
    }
    // let y = ticketguid;
    // let x = value;
    let task = "cost";
    // let ticketguid = "82557424-473F-44D2-8718-8151243D9B91";
    let obj = {
      task,
      userid,
      tickets: [{ ticketguid }],
      ...value,
      closingPic,
      hiddensignature,
    };

    console.log(obj);
    let ruter = "ticket";
    let res = await PostToServer(ruter, obj);
    console.log(res);
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
    <div className="Apruchclose">
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
              <Form.Item label="signiture">
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
          <button className="modalbutoonsend" htmlType="submit">
            send
          </button>
        </Form>
      </div>
    </div>
  );
};
export const Posteditofticket = (task, ticketguid, value) => {
  console.log("Delet", task, ticketguid);
};

export const Closetask = ({
  data,
  opendrwor,
  cancelClosep,
  cancelquickfunc,
  canceloperition,
}) => {
  let text;
  const defoltlang = useContext(DataContext).lang;
  let lang = defoltlang;
  switch (cancelquickfunc.type) {
    case "close":
      text = "נמחקו";
      break;
    case "pending":
      text = "שונה ל -בטיפול";

      break;
    case "open":
      text = "סומנו כחדשות";

      break;
    case "forward":
      text = "הופנו לאיש צוות";

      break;
    default:
      break;
  }

  return (
    <div className="Closepopup">
      <div>
        {data > 0 ? (
          <div className="Closepopup-numbertasks">
            {!cancelquickfunc.status ? (
              <div> {data} נבחרו </div>
            ) : (
              <div>
                <img src="/images/vicon.svg" alt="v" /> {data} פניות {text}
              </div>
            )}
          </div>
        ) : (
          <div>בחר פניות</div>
        )}
      </div>
      {data > 0 && !cancelquickfunc.status ? (
        <button className="cancelClosep" onClick={cancelClosep}>
          {" "}
          {lang?.lang251}
        </button>
      ) : null}
      {!cancelquickfunc.status ? (
        <button className="Closepopupsubmit" onClick={opendrwor}>
          <img src="images/lightning.svg" alt="lightning" />
          פעולה מהירה
        </button>
      ) : (
        <button className="cancelClosep" onClick={canceloperition}>
          בטל
        </button>
      )}
    </div>
  );
};

export const Switchurgency = (urgencyadmin, lang122, lang121, lang120) => {
  let urgencytext;
  let urgency;

  let green = "#22E7B7";
  let yeloo = "orange";
  let red = "#D91D61";
  switch (urgencyadmin) {
    case "1":
      urgencytext = lang122;
      urgency = green;

      return { urgencytext, urgency };
    // break;
    case "2":
      urgencytext = lang121;
      urgency = yeloo;

      return { urgencytext, urgency };
    // break;
    case "3":
      urgencytext = lang120;
      urgency = red;

      return { urgencytext, urgency };
    // break;
    default:
      urgencytext = lang122;
      urgency = green;
  }
};

export const Switcstatus = (statusname, lang162, lang174) => {
  let status;
  let statustext;
  let blue = "#108ee9";
  let green = "#87d068";
  switch (statusname) {
    case "פנייה חדשה":
      status = blue;
      statustext = lang162;
      return { status, statustext };
      break;
    case "בטיפול":
      status = green;
      statustext = lang174;
      return { status, statustext };

      break;
  }
};
