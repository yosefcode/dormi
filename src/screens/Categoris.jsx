import React, { useState, useContext, useEffect } from "react";
import { CardStyeld, Contener } from "../styelscomponents/LocationStyeld";
import { PostToServer } from "../serveses";

import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Menu, Dropdown, Form, Input, Badge, Button } from "antd";
import { Arryoficons } from "../Icons";
import { useHistory } from "react-router-dom";

import DataContext from "../DataContext";
function Categoris() {
  const { SubMenu } = Menu;
  document.body.style.backgroundColor = "white";
  let history = useHistory();

  const defoltlang = useContext(DataContext).lang;

  const filterserch = useContext(DataContext).filterserch;
  const chanfefilter = useContext(DataContext).chanfefilter;
  const ticketlist = useContext(DataContext).ticketlist;
  const loginstatus = useContext(DataContext).loginstatus;

  const masof = useContext(DataContext).masof;
  const changmasof = useContext(DataContext).changmasof;
  const lang = defoltlang?.lang;
  let categoryarry = masof.categorynames;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [chusencategori, setchusencategori] = useState();
  const [firstlode, setlfirstlode] = useState();
  const [localarry, setlocalarry] = useState();
  const [taskModal, setTaskmodal] = useState();
  const [parentID, setParentID] = useState();
  const [subCategoryID, setSubCategoryID] = useState();
  const [taskToServer, setTaskToServer] = useState();
  const [chingeurgency, setchingeurgency] = useState(false);
  const [defaultValueModal, setDefaultValueModal] = useState("");
  const [iconID, setIconID] = useState();
  const [errmsg, seterrmsg] = useState(false);



  const addMainCategory = () => {
    setTaskmodal(lang?.lang290);
    setIsModalVisible(true);
    setTaskToServer("addparent")
  };
  const addSecondaryCategory = () => {
    setDefaultValueModal("")
    setTaskmodal("הוספת קטגוריה משנית");
    setIsModalVisible(true);
    setTaskToServer("add")
    setIconID("")
    setchusencategori("");
  };

  const onFinish = async(values) => {
    console.log("values", values);
    let task = values.task?values.task:taskToServer 
    let userid = loginstatus.userid;
    let categoryname =chusencategori ? chusencategori : values?.categoryname;
    // let icon =iconID;
    let icon =values.iconID?values.iconID:iconID?.id;
    let parentid = parentID;
    let categoryid = subCategoryID
    let obj = {
      task,
      userid,
      categoryname,
      icon,
      parentid,  
      categoryid    
    };

    console.log("obj:", obj);

    let reqruter = "category";
    if ( !categoryname) { seterrmsg(true)}else{ 
    let res = await PostToServer(reqruter, obj);
    console.log("res:", res);
    if (res.error === 1 || !categoryname) {
      seterrmsg(true)
    } else {
      let ruteruserid = "masof";

      let masof = await PostToServer(ruteruserid, {userid:userid});
      changmasof(masof)

      setlocalarry(masof?.categorynames);

      handleCancel() ;
      setchingeurgency(!chingeurgency);
      seterrmsg(false)

    }
  };}
  

  const handleCancel = () => {
    setDefaultValueModal("")
    setIsModalVisible(false);
    setIconID("")
  };

  let finicon = Arryoficons?.find((ic) => iconID?.id === ic.iconid)
 
  const chuseicon = (value) => {
    let requst = categoryarry.findIndex(
      (Item) => Item.maincategoryname === chusencategori
    );
    categoryarry[requst].id = value;

    setchingeurgency(!chingeurgency);

    setlocalarry(categoryarry);
  };
  const removeMainCategory= ()=>{
    onFinish({task:"delparent"})
  }
  const editMainCategory= ()=>{
    setDefaultValueModal(chusencategori)

    setTaskToServer("editparent")
    setIsModalVisible(true);
    setTaskmodal("עריכת שם קטגוריה ראשית");

  }
  const removeSecondaryCategory= ()=>{
    onFinish({task:"delcat"})
  }
  const editSecondaryCategory= ()=>{
    setTaskToServer("editcat")
    setIsModalVisible(true);
    setTaskmodal("עריכת שם קטגוריה משנית");

  }
  useEffect(() => {
    if (!firstlode) {
      setlocalarry(categoryarry);
      setlfirstlode(true);
    }
  }, [chingeurgency]);
  const menuofproject = (
    <Menu>
      <Menu.Item onClick={addSecondaryCategory}>{lang?.lang291} </Menu.Item>
      <Menu.Item onClick={editMainCategory}>{lang?.lang294}</Menu.Item>
      <Menu.Item onClick={removeMainCategory}>{lang?.lang147}</Menu.Item>
      <SubMenu key="sub1" title="הוספת / שינוי אייקון" dir="tlr" style={{marginInlineStart:"10px"}}>
<div  style={{width:"300px",
maxHeight:"200px",
overflowY:"scroll",
display: "flex", 
justifyContent:"space-evenly",
flexDirection: "row",
flexWrap: "wrap"}}>
        {Arryoficons?.map((ic) => {
          return (
            <Menu.Item key={ic.iconid} >
              <div                    style={{width:"40px", height:"40px", 
                   border: "1px solid #ccc", borderRadius: "5px",
                   marginBottom: "5px", marginTop: "5px",
                   display: "flex", justifyContent: "center", alignItems: "center"}}>
              <img src={ic.icon} alt={"icon"} 
              className="icon_img"
              onClick={() => {
                onFinish({task:"editparent", iconID:ic.iconid})}}
                style={{ height:"80%", maxWidth:"80%", maxHeight:"80%"}}
                />
                </div>
            </Menu.Item>
          );
        })}</div>
      </SubMenu>
    </Menu>
  );

  const gotolistoftask = (value) => {
    filterserch.categoris = value;

    console.log(filterserch);
    chanfefilter(filterserch);
    history.push("/ListOfreq");
  };

  return (
    <Contener>
      <div className="hader">
        {lang?.lang104}
        
        <button className="btn_add_location" onClick={addMainCategory}>{lang?.lang290}</button>
      </div>
      <div className="listofcards">
        {localarry
          ? localarry.map((el) => {

              let finicon = Arryoficons.find((ic) => 
                el.icon === ic.iconid)
              // let icon;

              // if (finicon?.icon) {
              //   icon = finicon.icon;
              // } else {
              //   icon = false;
              // }
              const headerCard = (
                <div>
        <img src={finicon?.icon} alt= "" style={{height: "25px", marginInlineEnd:"10px" }}/> {el.maincategoryname}
                </div>
              );
              
              return (
                <div className="card">
                  <CardStyeld
                    // hoverable
                    title={headerCard}
                    extra={
                      <Dropdown
                      className="icon_dropdown"
                        overlay={menuofproject}
                        trigger={["click"]}
                        onClick={() => {
                          setchusencategori(el.maincategoryname);
                          setParentID(el.id);
                          setIconID({id:el.icon})

                        }}
                      >
                        <HiOutlineDotsHorizontal />
                      </Dropdown>
                    }
                  >
                    <div className="listodors">
                      {el.subcategory.length>0 ? (
                        el.subcategory?.map((item) => {
                          let cunter = 0;
// console.log("item:", item);
                          ticketlist.map((tiket) => {
                            if (
                              tiket.breadcrumb === el.maincategoryname &&
                              tiket.categoryname === item.subname
                            ) {
                              cunter = cunter + 1;
                            }
                          });

                          const menuoflocation = (
                            <Menu>
                              {cunter > 0 ? (
                                <Menu.Item
                                  onClick={() => {
                                    let chusentask = `${el.maincategoryname} category:${item.subname}`;
                                    gotolistoftask(chusentask);
                                  }}
                                >
                                  {lang?.lang300}
                                </Menu.Item>
                              ) : null}
                              
                              <Menu.Item onClick={()=>{
                              // setParentID(el.id);
                              // setDefaultValueModal(item.subname);
                              editSecondaryCategory();}}>{lang?.lang243}</Menu.Item>
                              <Menu.Item onClick={()=>{removeSecondaryCategory({task:"delcat"})}}>{lang?.lang147}</Menu.Item>
                            </Menu>
                          );
                          return (
                            <div className="singellocation">
                              <div>
                                {item.subname}
                              </div>
                              <div>
                                {cunter > 0 ? (
                                                            <div className="div_count"
                                                          >
                                                           {cunter}
                                                          </div> 
                                
                                  // <Badge
                                  //   dir="tlr"
                                  //   overflowCount={999}
                                  //   count={cunter}
                                  //   style={{
                                  //     backgroundColor: "#EBBE74",
                                  //     color: "black",
                                  //     fontsize: "16px",
                                  //   }}
                                  // />
                                ) : null}
                              </div>
                              <div>
                                <Dropdown
                                  className="icon_dropdown"
id="icon_dropdown_body"
                                  overlay={menuoflocation}
                                  trigger={["click"]}
                                  onClick={() => {setSubCategoryID(item.subcategoryid);
                                 setParentID(el.id);
                                    setDefaultValueModal(item.subname);
                                    setchusencategori(item.subname);
                                    console.log(item.subname);
      }}
                                  // icon={
                                  //
                                  // }
                                >
                                  <HiOutlineDotsHorizontal className="internaldots" />
                                </Dropdown>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div>
                          <p className="noroms">{lang?.lang225} </p>
                        </div>
                      )}
                    </div>
                  </CardStyeld>
                    <button className="btn_footer_card" 
                    onClick={()=>{addSecondaryCategory(); setParentID(el.id);}}>+ הוספה</button>
                </div>
              );
            })
          : null}
      </div>
      <ModalStyeld
        // title={lang?.lang210}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        >
        <Form
        key={defaultValueModal}
          name="basic"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
        >
         <div className="div_modal">
         {taskModal}
                   <Form.Item name="categoryname" onChange={(e)=>{
                     if(e.target.value.length>0) seterrmsg(false);
                  setchusencategori("")}}>

          <Input placeholder={taskModal}   defaultValue={defaultValueModal} className={errmsg && "err_border"}/>
          </Form.Item>
     {iconID ? <div className="icon_chek">
       <span onClick={()=>{setIconID()}} className="btn_del_icon">X</span> 
       <img src={finicon?.icon} alt={"icon"} style={{height:"80%"}}/>
       
        </div>:
     taskToServer === "addparent" || taskToServer === "editparent"?  <div  className="add_icon">
        {Arryoficons?.map((ic) => {
          return (
            <div key={ic.iconid}                  
             className={iconID === ic.iconid? "icon_modal_active" : "icon_modal"}
            >
              <img src={ic.icon} alt={"icon"} style={{height:"80%"}}
                onClick={() => {
                  // setIconID(ic.iconid)}}
                  setIconID({id:ic.iconid,icon:ic.icon})}}
                  // className={iconID === ic.iconid? "icon_modal_active" : "icon_modal"}
                   />
            </div>
          );
        })}</div>: null}

          <Form.Item>
            <Button  type="primary" htmlType="submit">
            {/* {taskModal} */}
            {lang?.lang156}

                        </Button>
          </Form.Item></div>
        </Form>
      </ModalStyeld>
    </Contener>
  );
}

export default Categoris;
