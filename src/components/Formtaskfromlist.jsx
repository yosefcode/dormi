import React, { useState, useContext, useEffect } from "react";
import DataContext from "../DataContext";
import { AiOutlineCamera, AiFillDelete } from "react-icons/ai";
import { Form, Input, Button, Select, Badge } from "antd";
import { ModalEdit, Problemcontener } from "../styelscomponents/NewRequest";
import Resizer from "react-image-file-resizer";
import { PostToServer } from "../serveses";
import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import { week, month, numMonth, day } from "./Arrydaits";
import iconMSG from "../assets/icon5.png";

const Formtaslfromlist = ({
  data,
  Typeofreq,
  Goback,
  Temmembertask,
  setedittask,
  edittask,
  Updatedata
}) => {
  document.body.style.backgroundColor = "white";
  const { Option } = Select;
  const { TextArea } = Input;
  const loginstatus = useContext(DataContext).loginstatus;
  const defoltlang = useContext(DataContext).lang;
  const masof = useContext(DataContext).masof;
  let categorynames = masof?.categorynames;
  let locationarry = masof?.locations;

  const lang = defoltlang?.lang;
  const [loadings, setloadings] = useState([]);
  const [Subcategory, setSubcategory] = useState();
  const [categoryID, setcategoryid] = useState();
  const [locationID, setlocationid] = useState();
  const [roomID, setroomid] = useState();
  const [frequencytype, setfrequencytype] = useState();
  const [frequencydateday, setfrequencydateday] = useState();
  const [frequencyamount, setfrequencyamount] = useState();
  const [frequencydatemonth, setfrequencydatemonth] = useState();
  const [updateImage, setUpdateImage] = useState(false);
  const [urlbase64Edit, setUrlbase64Edit] = useState();
  const [rommarry, setrommarry] = useState();
  const [errmassege, setModalInEdit] = useState(false);
  const [errmassegetext, setModalInEdittext] = useState();
  const [ticketid, setticketid] = useState();
  const [dateName, setdateName] = useState();


  const [imgSrc, setImgSrc] = useState(`https://dormi.co.il/uploads/${data?.openimage}`);

  const handleError = () => setImgSrc(`https://b.dormi.co.il/uploads/${data?.openimage}`)
  
  const frequencyarry = [
    { value: "w", text: lang.lang275 },
    { value: "m", text: lang.lang276 },
    { value: "x", text: lang.lang363 },
    { value: "z", text: lang.lang361 },
    { value: "y", text: lang.lang277 },
  ];

  const [datetype, setdatetype] = useState(false);
  const [dayMonth, setDayMonth] = useState(false);


    const Selectfreqtipe = (value) => {
    switch (value) {
      case "w" :

        setDayMonth(false);
        setdateName("frequencyamount_w")
        setdatetype(week);
        break;
      case "m" :
        setdatetype(month);
        setDayMonth(false);
        setdateName("frequencyamount_m")

        break;
      default:
        setdatetype(false);
        setDayMonth(true);
        setdateName("frequencydate")  
        break;
      }
    };


  const useefctasync = async () => {

    Selectfreqtipe(data.frequencytype);

    let Subcategory = categorynames.filter(
      (item) => item.maincategoryname === data.breadcrumb
    );

    let categoryid = Subcategory[0]?.subcategory.filter(
      (item) => item.subname === data.categoryname
      );

      let locationid = locationarry.filter(
        (item) => item.locationname === data.locationName
        );
        
        let roomid = locationid[0]?.rooms.filter(
          (item) => item.roomname === data.roomName
          );

          setSubcategory(Subcategory[0]);
          setcategoryid(categoryid[0].subcategoryid);
          setlocationid(locationid[0].locationid);
          setroomid(roomid[0].roomid);
          setrommarry(locationid[0].rooms);
        };

  useEffect(() => {
    useefctasync();

  }, []);

  const topFunction = () => {
    window.scrollTo(0, 0);
  };

  const sendimage = async () => {
    let task = "picture";
    let img = [{name:"pic.jpeg",  type: "image/jpeg",
    thumbUrl :urlbase64Edit.replace(/^data:image\/[a-z]+;base64,/, "")}]
    let obj = {
      task,
      userid : loginstatus.userid,
      img,
      ticketguid:data.ticketguid,
      tickettype:Temmembertask?"plan":"ticket",
    };
    console.log(obj);
    let reqruter = "ticketpicture";
    let res = await PostToServer(reqruter, obj);
    console.log(      res );

    if (res.error === "1") {
      setloadings([0]);
      setModalInEdit(true);
      setModalInEdittext(<div style={{lineHeight:"40px"}}>פרטי הפנייה עודכנו בהצלחה. <br/> קרתה שגיאה בעדכון התמונה</div>)
      Updatedata()
      setTimeout(() => {
        setedittask(false);
        setModalInEdit(false);
      }, 1000);
} else if  (res.success === "1") {
    setloadings([0]);
    setModalInEdit(true);
    setModalInEdittext(res.message);
    Updatedata()
    setTimeout(() => {
      setedittask(false);
      setModalInEdit(false);
    }, 1000);

  } else {
    setloadings([0]);
    setModalInEdit(true);
    setModalInEdittext(<div style={{lineHeight:"40px"}}>פרטי הפנייה עודכנו בהצלחה. {<br/>} היתה שגיאה בעדכון התמונה</div>)
    Updatedata()
    setTimeout(() => {
      setedittask(false);
      setModalInEdit(false);
    }, 1000);

  }
  };    


  const onFinish = async (value) => {
    enterLoading(2);
    let task = "edit";
      // setticketid(data.ticketid);

    // if (ticketid) {
    //   setticketid(value.ticketid);
    // } else {
    //   setticketid(null);
    // }

    let ticketguid =data.ticketguid;
    let userid = loginstatus.userid;
    let locationid = locationID;
    let roomid = roomID;
    let categoryid = categoryID;
    let urgency;
    if (!value.urgency) {
      urgency = 2;
    } else {
      urgency = value.urgency;
    }

    let comments;
    if (value.comments) {
      comments = value.comments.replace(/[<>${}]/g, "danger$&");
    }

    let frequencytype;
    if (value?.frequencytype) {
      frequencytype = value?.frequencytype;
    }


    let valueDateName=value?.frequencyamount_m?value.frequencyamount_m
    :value?.frequencyamount_w?value.frequencyamount_w: value.day+"/"+value.numMonth;


    let obj = {
      task,
      ticketguid,
      userid,
      locationid,
      roomid,
      categoryid,
      urgency,
      comments,
      // ticketid,
      frequencytype,
      [dateName]:valueDateName

    };

    let reqruter = Temmembertask?"newplan":"newticket";
    console.log("obj:", obj);

    let res = await PostToServer(reqruter, obj);
    console.log("res:", res);
    if (res.error === "1") {
      setModalInEdit(true);
      setModalInEdittext(res.message);
      setloadings([0]);
      setTimeout(() => {
        setedittask(false);
        setModalInEdit(false);
      }, 1000);

    } else if  (res.error === "0") {
    if(urlbase64Edit)  sendimage();
    else{
      setloadings([0]);
      setModalInEdit(true);
      setModalInEdittext(res.message);
      setTimeout(() => {
        setedittask(false);
        setModalInEdit(false);
      }, 1000);
      Updatedata()
    }
    } else {
      setModalInEdittext("אירעה שגיאה נסה שוב");
      setModalInEdit(true);
      setloadings([0]);
      setTimeout(() => {
        setedittask(false);
        setModalInEdit(false);
      }, 1000);

    }
  };

  const enterLoading = (index) => {
    setloadings((loadings) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return newLoadings;
    });
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

const upludeimage = async ( e ) => {
  try {
    const file = e.target.files[0];
    const image = await resizeFile(file);
    setUrlbase64Edit(image);
  } catch (err) {
    console.log(err);
  }
};

  const Goeinfbacktopage = () => {
    Goback();
  };

  return (
    <div>
      <ModalEdit
      visible={edittask}
      onCancel={() => {
        setedittask(false);
        setUrlbase64Edit(null);
      }}
      footer={false}
      width="100%"
      >
<div className="div_modal_edit">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            {/* <div
              className="goback"
              onClick={() => {
                Goeinfbacktopage();
              }}
            >X
            </div> */}
            <div className="div_form_edit">

            <Form.Item name="categoryid" initialValue={data.categoryname} className="select_half_2" >
              <Select showSearch placeholder={lang?.lang110}
              onChange={(value)=>{setcategoryid(value[1])}}>
                {Subcategory
                  ? Subcategory.subcategory.map((el) => {
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
              name="urgency"
              initialValue={parseInt(data.urgencyadmin?data.urgencyadmin:data.urgency)}
              className="select_half_2"
            >
              <Select defaultValue={2} >
                <Option key={1} value={1}>
                  <Badge color="#22E7B7" text={lang?.lang122} />
                </Option>
                <Option key={2} value={2}>
                  <Badge color="orange" text={lang?.lang121} />
                </Option>
                <Option key={3} value={3}>
                  <Badge color="#D91D61" text={lang?.lang120} />
                </Option>
              </Select>
            </Form.Item>

            <Form.Item name="locationid" initialValue={data.locationName}className="select_half_2">
              <Select
                showSearch
                placeholder={lang?.lang340}
                onChange={(value)=>{setlocationid(value[1])
                  let listofrooms = locationarry.filter((el) => {
                    return el.locationid === value[1];
                  });
              
                  setrommarry(listofrooms[0].rooms);
              }}>
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

            <Form.Item name="roomid" initialValue={data.roomName}className="select_half_2">
              <Select showSearch placeholder={lang?.lang341}  
               onChange={(value)=>{setroomid(value[1])}}              >

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

            {Temmembertask ? (
              <div className="div_modal_edit_date">

<Form.Item name="frequencytype"   initialValue={data.frequencytype} className="select_half_2">
                    <Select  onSelect={Selectfreqtipe}placeholder={lang?.lang269} >
                      {frequencyarry.map((el, index) => {
                        return (
                          <option key={index} value={el.value}>
                            {el.text}
                          </option>
                        );
                      })}
                    </Select>

                  </Form.Item>
                  {datetype  ? (
                    <Form.Item   className="select_half_2" 
                     name={dateName}
                     initialValue={data.frequencyamount}
                    >
                      <Select>
                        {datetype?.map((el, index) => {
                          return (
                            <option key={index} value={el.value}>
                              {el.date}
                            </option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  ) : null}
                  {dayMonth ? (
                    <div className="select_half_div2">
                    <Form.Item name="numMonth"   className="select_half_4" 
                   initialValue={data.frequencydatemonth}>
                                            <Select >
                        {numMonth.map((el, index) => {
                          return (
                            <option key={index} value={el.date}>
                              {el.date}
                            </option>
                          );
                        })}
                      </Select>
                        </Form.Item>
/

                        <Form.Item name="day"   className="select_half_4"
                initialValue={data.frequencydateday}>
                                            <Select >
                        {day.map((el, index) => {
                          return (
                            <option key={index} value={el.date}>
                              {el.date}
                            </option>
                          );
                        })}
                      </Select>

                      {/* <DatePicker  onChange={onChangeDatePicker}/> */}
                    </Form.Item></div>                  ) : null}


                
                </div>
            ) : null}


            <div className="problem">

            {lang?.lang123}

            <Form.Item
              name="comments"
              initialValue={data.comments}
            >
              <TextArea rows={6} />
            </Form.Item>

            </div>

            <Form.Item className="select_half_2">

               {(data.openimage && !updateImage) || urlbase64Edit?
               <div className="div_img">
               
                 <img src={urlbase64Edit ? urlbase64Edit : imgSrc}
                 onError={handleError}           
                 alt="no img"
          style={{  height: "150px", cursor: "pointer", borderRadius:"15px" }}
          onClick={() => {      setModalInEdit(true);
            setModalInEdittext( <img src={urlbase64Edit ? urlbase64Edit : imgSrc} onError={handleError}           
              alt="no img"
            style={{ width: "100%", height: "100%" }}/>)}}
/>
        <AiFillDelete  onClick={() =>{setUpdateImage(true); setUrlbase64Edit()}} className="camraicon"/>
</div>
        :
 <div>

                  <label className="uploadimage">
    <input type="file" onChange={upludeimage}/>
    <div>
                      <AiOutlineCamera className="camraicon" />
                    </div>
                    <div>צירוף תמונה לפנייה</div>
</label></div> 
                   }        

                             </Form.Item>

            
            <div className="div_btn_send">

<Button className="cancel" onClick={Goeinfbacktopage}>
  {" "}
  ביטול
</Button>

              <Button type="primary" htmlType="submit" loading={loadings[2]}>
אישור              </Button>
</div>

            </div>
          </Form>


</div>
          </ModalEdit>

          {/* // <div className="textbloon">
          //   <p>{lang?.lang131}</p>
          //   <p>{lang?.lang132}</p>

          //   <Link to="/ListOfreq">{lang?.lang283}</Link>
          //   <div className="avaterpopup"></div>
          //   <div className="uploadimage">
          //     <Upload
          //       listType="picture-card"
          //       // fileList={fileList}
          //       onPreview={handlePreview}
          //       onChange={upludeimage}
          //     >
          //       {uploadButton}
          //     </Upload>
          //     {uplodeimage?.fileList?.length >= 1 ? (
          //       <button onClick={sendimage}>{lang?.lang265}</button>
          //     ) : null}
          //   </div>
          //   <Modal
          //     visible={previewVisible}
          //     title={previewTitle}
          //     footer={null}
          //     onCancel={handleCancel}
          //   >
          //     <img alt="example" style={{ width: "100%" }} src={previewImage} />
          //   </Modal>
          // </div>

          // <Uplodetaskimage ticketid={ticketid} userid={loginstatus.userid} 
          // Goeinfbacktopage={Goeinfbacktopage} topFunction={topFunction}/> */}

        <ModalStyeld
          visible={errmassege}
          onCancel={() => {
            setModalInEdit(false);
          }}
          footer={false}
        >
          <div className="modal_text">
            <img src={iconMSG} alt="" style={{  width:"35%", marginBottom:"40px"}}/>
          <div className="modal_text_2">
          {errmassegetext}
          </div>
          </div>
        </ModalStyeld>
    </div>
  );
};

export default Formtaslfromlist;
