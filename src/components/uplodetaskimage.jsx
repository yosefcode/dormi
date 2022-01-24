import React, { useState, useContext, useEffect } from "react";
import DataContext from "../DataContext";
import { Link } from "react-router-dom";

import { AiOutlineCamera } from "react-icons/ai";
import { Modal, Upload, Button } from "antd";
import { FormContener, Buttonsenimage } from "../styelscomponents/NewRequest";

import { PostToServer } from "../serveses";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
const Uplodetaskimage = ({ userid, ticketid, setuplodeimagescreen }) => {
  const defoltlang = useContext(DataContext).lang;

  const lang = defoltlang?.lang;
  // seng imge
  const [uplodeimage, setuplodeimage] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  });
  useEffect(() => {
    if (uplodeimage?.fileList?.length >= 1) {
      setsendbutton(true);
    } else {
      setsendbutton(false);
    }
  }, [uplodeimage]);
  const [previewImage, setpreviewImage] = useState();
  const [previewVisible, setpreviewVisible] = useState(false);
  const [previewTitle, setpreviewTitle] = useState("");
  const [sendbutton, setsendbutton] = useState(false);
  const [updateImage, setUpdateImage] = useState(false);
  // const [aftersend, setaftersend] = useState(false);

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
    setuplodeimage("");

    setButtonsecses(true);
    setloadings([0]);
    setuplodeimagescreen();
  };

  return (
      <FormContener sendbutton={sendbutton}>
        <div className="textbloon">
<div className="close_addimg" onClick={() =>{!updateImage || (updateImage&&Buttonsecses) ?        
   window.open("/") 

:setUpdateImage(false)}}>
          X</div>
{!updateImage || (updateImage&&Buttonsecses) ?
<div>
          <img
            src="/images/Semdimag.png"
            className="Sendedmassege"
            alt="Sendedmassege"
          />

          <div className="tnx1" >{lang?.lang131}</div>
          <div className="tnx2">נעדכן אותך בהמשך טיפול</div>

          {!updateImage&&   <button className="uploadimage" onClick={() =>{setUpdateImage(true)}}>
                    <span>
                      <AiOutlineCamera className="camraicon" />
                    </span>
                    <span >צירוף תמונה לפנייה</span>
                  </button> }
</div>:

            <div>

              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={upludeimage}
              >
                {!Buttonsecses ? (
                  <button className="uploadimage add_image">
                    <span>
                      <AiOutlineCamera className="camraicon" />
                    </span>
                    <span >{lang?.lang274}</span>
                  </button>
                ) : null}
              </Upload>
            </div>
            }

            {/* {sendbutton || Buttonsecses ? ( */}
            {(updateImage && sendbutton) || (updateImage&&Buttonsecses)? (
              <Buttonsenimage Buttonsecses={Buttonsecses}>
                <Button className="uploadimage" onClick={sendimage} loading={loadings[2]}>
                  {!Buttonsecses ? lang?.lang265 : "התמונה התווספה בהצלחה"}

                </Button>
              </Buttonsenimage>
            ) : null}
          </div>

          <div className="tnx2" style={{ color: "#6B6B6B" }}>
            {!updateImage  ? lang?.lang132 : updateImage && Buttonsecses ?"הזדמנות טובה לומר שוב תודה":null}
          </div>
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
       </FormContener>
  );
};

export default Uplodetaskimage;
