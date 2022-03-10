import React, { useState, useContext } from "react";
import { CardStyeld, Contener } from "../styelscomponents/LocationStyeld";
import { PostToServer } from "../serveses";

import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Menu, Dropdown, Form, Input, Badge, Button } from "antd";

import { useHistory } from "react-router-dom";

import DataContext from "../DataContext";

function Location() {
  document.body.style.backgroundColor = "white";
  let history = useHistory();
  const filterserch = useContext(DataContext).filterserch;
  const chanfefilter = useContext(DataContext).chanfefilter;
  const defoltlang = useContext(DataContext).lang;
  const ticketlist = useContext(DataContext).ticketlist;
  const loginstatus = useContext(DataContext).loginstatus
  const masof = useContext(DataContext).masof;

  const lang = defoltlang?.lang;
  let locationarry = masof?.locations;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskModal, setTaskmodal] = useState();
  const [locationID, setLocationID] = useState();
  const [roomID, setRoomID] = useState();
  const [taskToServer, setTaskToServer] = useState();
  const [defaultValueModal, setDefaultValueModal] = useState("");
  const [nameModal, setNameModal] = useState("");
  const [nameLocation, setNameLocation] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };
  const addLocation = () => {
    setTaskmodal(lang?.lang210);
    setIsModalVisible(true);
    setTaskToServer("addloc")
    setNameModal("locationname")

  };
  const addRoom = () => {
    setDefaultValueModal("")
    setTaskmodal("הוספת חדר ");
    setIsModalVisible(true);
    setTaskToServer("add")
    setNameModal("roomname")

  };


  const onFinish = async(values) => {
    console.log(values);
    let task = values.task?values.task:taskToServer 
    let userid = loginstatus.userid;
    let locationname =values?.locationname;
    let locationid = locationID;
    let roomid = roomID
    let roomname = values?.roomname
    let obj = {
      task,
      userid,
      locationname,
      locationid,  
      roomid, 
      roomname  
    };
    console.log("obj:", obj);

    let reqruter = "location";
    let res = await PostToServer(reqruter, obj);
    console.log("res:", res);
    if (res.error === 1) {
    } else {
      setDefaultValueModal("")
      setIsModalVisible(false);
      }
  };

  const handleCancel = () => {
    setDefaultValueModal("")
    setIsModalVisible(false);
  };
  const removeLocation= ()=>{
    onFinish({task:"delloc"})
  }
  const editLocation= ()=>{
    setDefaultValueModal(nameLocation)
    setTaskToServer("editloc")
    setIsModalVisible(true);
    setTaskmodal("עריכת שם מתחם");

  }
  const removeRoom= ()=>{
    onFinish({task:"delroom"})
  }
  const editRoom= ()=>{
    setTaskToServer("editroom")
    setIsModalVisible(true);
    setTaskmodal("עריכת שם חדר ");

  }
  const menuofproject = (
    <Menu>
      <Menu.Item onClick={addRoom}>{lang?.lang213} </Menu.Item>
      <Menu.Item onClick={()=>{editLocation();   
       setNameModal("locationname")
      }}>{lang?.lang212}</Menu.Item>
      <Menu.Item onClick={removeLocation}>{lang?.lang147}</Menu.Item>
    </Menu>)



  const gotolistoftask = (value) => {
    filterserch.location = value;

    console.log(filterserch);
    chanfefilter(filterserch);
    history.push("/ListOfreq");
  };
console.log(locationarry);
  return (
    <Contener>
      <div className="hader">
        {lang?.lang211}

        <button className="btn_add_location" onClick={addLocation}>{lang?.lang210}</button>
      </div>
      <div className="listofcards">
        {locationarry
          ? locationarry.map((el) => {
              return (
                <div className="card">

                <CardStyeld
                  // hoverable
                  title={el.locationname}
                  extra={
                    <Dropdown
                    className="icon_dropdown"

                      overlay={menuofproject}
                      trigger={["click"]}
                      onClick={() => {
                        setLocationID(el.locationid);
                        setNameLocation(el.locationname);
                      }}
                  >
                      <HiOutlineDotsHorizontal />
                    </Dropdown>
                  }
                >
                  <div className="listodors">
                    {el.rooms ? (
                      el.rooms.map((item) => {
                        let cunter = 0;
                        ticketlist.map((tiket) => {
                          if (
                            tiket.locationName === el.locationname &&
                            tiket.roomName === item.roomname
                          ) {
                            cunter = cunter + 1;
                          }
                        });

                        const menuoflocation = (
                          <Menu>
                            {cunter > 0 ? (
                              <Menu.Item
                                onClick={() => {
                                  let chusentask = `${el.locationame} room:${item.roomname}`;
                                  gotolistoftask(chusentask);
                                }}
                              >
                                {lang?.lang235}{" "}
                              </Menu.Item>
                            ) : null}
                            <Menu.Item onClick={()=>{
                              setNameModal("roomname")

                              editRoom();}}>{lang?.lang243}</Menu.Item>
                              <Menu.Item onClick={()=>{removeRoom({task:"delroom"})}}>{lang?.lang147}</Menu.Item>
                            <Menu.Item>{lang?.lang359}</Menu.Item>
                          </Menu>
                        );
                        return (
                          <div className="singellocation">
                            <div>
                              {item.roomname}
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
                                onClick={() => {setRoomID(item.roomid);
                                     setDefaultValueModal(item.roomname);
                                     setLocationID(el.locationid);
                                     setTaskToServer("add")


       }}
                               >
                                <HiOutlineDotsHorizontal className="internaldots" />
                              </Dropdown>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div>
                        <p className="noroms">{lang?.lang225}</p>
                      </div>
                    )}
                  </div>
                </CardStyeld>
                <button className="btn_footer_card" 
                    onClick={()=>{addRoom(); setLocationID(el.locationid);}}>+ הוספה</button>

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
            remember: true,
          }}
          onFinish={onFinish}
        >
                        <div className="div_modal">
                        {taskModal}

          <Form.Item name={nameModal}>
            <Input placeholder={nameModal==="roomname"?"שם חדר":lang?.lang223} defaultValue={defaultValueModal}/>
          </Form.Item>
          <Form.Item>
            <Button  type="primary" htmlType="submit">
              {lang?.lang156}
            </Button>
          </Form.Item>
          </div>
        </Form>
      </ModalStyeld>
    </Contener>
  );
}

export default Location;
