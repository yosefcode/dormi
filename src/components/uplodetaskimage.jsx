import React, { useState, useContext, useEffect } from "react";
import DataContext from "../DataContext";
import { Link } from "react-router-dom";
import Resizer from "react-image-file-resizer";
import { AiOutlineCamera } from "react-icons/ai";
import { Modal, Upload, Button } from "antd";
import { FormContener, Buttonsenimage } from "../styelscomponents/NewRequest";
import { ModalStyeld } from "../styelscomponents/modaldtyeld";

import { PostToServer } from "../serveses";
import { FiLogOut } from "react-icons/fi";
import { useHistory } from "react-router-dom";




function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
const Uplodetaskimage = ({ userid, ticketid,
   setuplodeimagescreen, Goeinfbacktopage,topFunction,setvisual,
    tickettypePick }) => {
  const defoltlang = useContext(DataContext).lang;
  let history = useHistory();
  const routeRepeatedtask = history.location.pathname === "/Repeatedtask"

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
  const [sendbutton, setsendbutton] = useState(false);
  const [updateImage, setUpdateImage] = useState(false);
  const [urlbase64, setUrlbase64] = useState();
  const [errmassege, seterrmassege] = useState(false);
  const [errmassegetext, seterrmassegetext] = useState();

  useEffect(() => {
    if (uplodeimage?.fileList?.length >= 1||urlbase64) {
      setsendbutton(true);
    } else {
      setsendbutton(false);
    };
  }, [ uplodeimage, urlbase64]);

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
  
  const  {fileList} = uplodeimage;
  const [loadings, setloadings] = useState([]);
  const enterLoading = (index) => {
    setloadings((loadings) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return newLoadings;
    });
  };

  const topPage =()=>{
    if (topFunction) topFunction()
  }

  const close_modal =()=>{
   if (setuplodeimagescreen) setuplodeimagescreen();
    Goeinfbacktopage ? Goeinfbacktopage() :setvisual()
  }


  const [Buttonsecses, setButtonsecses] = useState(false);
  const sendimage = async () => {
    enterLoading(2);
    let task = "picture";
    // let tickettype = routeRepeatedtask ? "plan" : "ticket"; 
    let img = [{name:"pic.jpeg",  type: "image/jpeg",thumbUrl :urlbase64.replace(/^data:image\/[a-z]+;base64,/, "")}]
    let reqruter = "ticketpicture";
    let obj = {
      task,
      userid,
      img,
      ticketguid:ticketid,
      tickettype:tickettypePick
    };
    console.log(obj);
    console.log(tickettypePick);
    let res = await PostToServer(reqruter, obj);
    console.log(      res );

    if (res.error === "1") {
      seterrmassegetext("אירעה שגיאה נסה שוב");
      seterrmassege(true);
      setloadings([0]);
    } else if  (res.success === "1") {
      setUrlbase64("")
      setuplodeimage("");
      setButtonsecses(true);
      setloadings([0]);
      topPage()
      setTimeout(() => {
        close_modal()      }, 3000);


    } else {
      seterrmassegetext("אירעה שגיאה נסה שוב");
      seterrmassege(true);
      setloadings([0]);
    }
  };    



  const resizeFile = (file) =>
  new Promise((resolve) => {
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

return (

      <FormContener sendbutton={sendbutton} >
        <div className="textbloon">
<div className="close_addimg" onClick={() =>{    topPage();
      setUrlbase64("")
      setuplodeimage("");

 !updateImage || (updateImage&&Buttonsecses) ?        
 close_modal()
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

          {!updateImage  &&   <button className="uploadimage" onClick={() =>{setUpdateImage(true); topPage()}}>
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
                beforeUpload={() => false} 
                maxCount={1}
              >
                 <div>
        </div>
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
                <Button className="uploadimage" onClick={sendimage} loading={loadings[2]} 
                disabled={Buttonsecses ? true :false}>
                  {!Buttonsecses ? lang?.lang265 : "התמונה התווספה בהצלחה"}

                </Button>
              </Buttonsenimage>
            ) : null}
          </div>

          <div className="tnx2" style={{ color: "#6B6B6B" }}>
            {!updateImage  ? lang?.lang132 : updateImage && Buttonsecses ?"הזדמנות טובה לומר שוב תודה":null}
          </div>

          <ModalStyeld
          visible={errmassege}
          onCancel={() => {
            seterrmassege(false);
          }}
          footer={false}
        >
          {errmassegetext}
        </ModalStyeld>

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
