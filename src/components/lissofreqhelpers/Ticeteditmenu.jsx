import React, { useContext, useState, useRef } from "react";
import { Select, Input, Upload, Form } from "antd";
import SignaturePad from "react-signature-canvas";
import DataContext from "../../DataContext";
import { BsCloudUpload } from "react-icons/bs";
import { PostToServer } from "../../serveses";
import Resizer from "react-image-file-resizer";

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
  const [urlbase64, setUrlbase64] = useState();

  if (Clearform) {
    form.resetFields();
  }
  const sigCanvas = useRef({});
  // const upludeimage = ({ fileList }) => setuplodeimage({ fileList });
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
    const hiddenSignature = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");

    let closingPic;

    let userid = loginstatus.userid;
    if (urlbase64) {
      closingPic =[{name:"pic.jpeg",  type: "image/jpeg",thumbUrl :urlbase64.replace(/^data:image\/[a-z]+;base64,/, "")}];
    } else {
      closingPic = [];
    }
    let task = "cost";
    let obj = {
      task,
      userid,
      tickets: [{ ticketguid }],
      ...value,
      closingPic,
      hiddenSignature,
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
  const resizeFile = (file) =>
  new Promise((resolve) => {
    console.log(file);
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      // "file"
      "base64"
    );
  });
  
  const upludeimage = async ( fileList ) => {
    try {
      const file = fileList.file;
      const image = await resizeFile(file);
      setUrlbase64(image)
    } catch (err) {
      console.log(err);
    }
  };
  

  const uploadButton = (
    <div>
      <BsCloudUpload />

      <div className="uplodeimage">{"העלאה"}</div>
    </div>
  );
  let stafarry = ["אביתר", "בעז", "משה"];
  return (
    <div className="continer_formedittask">
    {lang?.lang208}
        <Form name="basic" onFinish={onFinish} form={form}>
          <div className="formedittask">

      <div className="edittask">
    {lang?.lang197}
              <Form.Item name="closeByUserID" >
                <Select placeholder="איש צוות" allowClear>
                  {stafarry.map((el) => {
                    return <Option value={el}>{el}</Option>;
                  })}
                </Select>
              </Form.Item>
 </div>

      <div className="edittask">
                  {`${lang?.lang149} (${lang?.lang204})`}
                  <Form.Item
                name="cost"
              >
                <Input type="bunber" inputmode="numeric" />
              </Form.Item>
 </div>

      <div className="edittask">
      {lang?.lang205}
      <Form.Item name="commentstouser" >
                <TextArea allowClear rows={4} />
              </Form.Item>
 </div>

      <div className="edittask">
      {lang?.lang206}
      <Form.Item name="closecomments" >
                <TextArea allowClear rows={4} />
              </Form.Item>
 </div>


      <div className="edittask">
העלאת תמונה<Form.Item name="closingPic" allowClear >
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={upludeimage}
                  beforeUpload={() => false} 
                  maxCount={1}
  
                >
                  {uploadButton}
                </Upload>
              </Form.Item>
 </div>
      <div className="edittask">
      signiture
      <Form.Item>
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


          </div>

          <button className="modalbutoonsend" htmlType="submit">
            send
          </button>
        </Form>
      </div>
  );
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
    case "archive":
      text = "נמחקו";

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
          בטל
          {/* {lang?.lang251} */}
        </button>
      ) : null}
      {!cancelquickfunc.status ? (
        <button className="Closepopupsubmit" onClick={opendrwor}>
          <img src="images/lightning.svg" alt="lightning" style={{marginInlineEnd:"10px"}}/>
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
    case lang162:
      status = blue;
      statustext = lang162;
      return { status, statustext };
    case lang174:
      status = green;
      statustext = lang174;
      return { status, statustext };

      default:
  }
};
