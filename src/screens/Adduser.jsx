import React, { useContext, useState,useEffect } from "react";
import DataContext from "../DataContext";
import { PostToServer } from "../serveses";

import { Form, Input, Button, Select, Switch } from "antd";
import { Container } from "../styelscomponents/Adduserstyel";
import { FiArrowRight } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import icon40 from "../assets/icon40.png";

const Adduser = ({setAddUser, taskAddUser, user}) => {
  document.body.style.backgroundColor = "white";
  const defoltlang = useContext(DataContext).lang;
  let history = useHistory();
  const masof = useContext(DataContext).masof;
  let locationarry = masof?.locations;
  const loginstatus = useContext(DataContext).loginstatus;

  console.log(user);

  function goback() {
    // history.push("/list_users");
    setAddUser(false);
  }
  const lang = defoltlang?.lang;
  const { Option, OptGroup } = Select;
  const [msg, setMsg] = useState("");
  const [modal, setModal] = useState(false);



  const onFinish = async(values) => {
    // console.log("Success:", values);

      let task = taskAddUser 
      let userid = loginstatus.userid;
      let email =values?.email;
      let entry =values?.entry;
      let firstname =values?.firstname;
      let lastname = values?.lastname;
      let phone = values?.phone
      let roomid = values?.roomid
      let academicyear = values?.academicyear
      let langid = values?.langid
      let levelid = values?.levelid
      let accesstype = values?.accesstype
      let allowaccesstoroom = values?.allowaccesstoroom === true? 1:0
      let targetuserid = user?.userguid
      let obj = {
        task,
        userid,
        email,
        entry,
        firstname, 
        lastname, 
        phone,    
        roomid,    
        academicyear,    
        langid,    
        levelid,    
        accesstype,    
        allowaccesstoroom,
        targetuserid  
      };
      console.log("obj:", obj);
  
      let reqruter = "user";
      let res = await PostToServer(reqruter, obj);
      console.log("res:", res);
      // if (res.error === 1) {
      // } else {
      //   setModal(true);
      //   setMsg(res.message) ;
      //   setTimeout(() => {
      //     setModal(false);
      //     goback() }, 3000)
      // }
    };
  

  const arryAcademicYear = ["2018/19", "2019/20", "2020/21", "2021/22", "2022/23", "2023/24"  ];
  const arryLang = ["עברית", "English" ];
  const [staf, setstaf] = useState(false);
  const [aditionstaf, setaditionstaf] = useState(false);

  let permission = [
    { permission: "משתמש", id: 5 },
    { permission: "מנהל", id: 10 },
    { permission: "איש צוות", id: 3 },
    { permission: "צוות תחזוקה", id: 4 },
  ];
  const Permission = (value) => {
    if (value === 4) {
      setstaf(true);
    } else {
      setstaf(false);
    }
  };

  const Userpermissions = (e) => {
    // console.log(typeof e.target.value);
    if (e === "5" || e === "4") {
    // if (e.target.value === "5" || e.target.value === "4") {
      setaditionstaf(true);
    } else {
      setaditionstaf(false);
    }
  };
  return (
    <Container>


      <div className="hader">
<div
          className="goback"
          onClick={() => {
            goback();
          }}
        >X
        </div>
        <span>{lang?.lang244}</span>
      </div>


      <Form
        name="adduser"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <div className="display_adduser">

        <div className="select_adduser">
        {`${lang?.lang307} (${lang?.lang312})`}
        <Form.Item label={`${lang?.lang307} (${lang?.lang312})`} name="email" initialValue={user?.email}>
          <Input />
        </Form.Item>
        </div>

        <div className="select_adduser">
        {lang?.lang309}
                <Form.Item label={lang?.lang309} name="entry" initialValue={user?.entry}>
          <Input />
        </Form.Item>
        </div>

        <hr className="hr" />


        <div className="select_adduser">
        {lang?.lang305}
        <Form.Item label={lang?.lang305} name="firstname"  initialValue={user?.firstname}
>
          <Input />
        </Form.Item>
        </div>

        <div className="select_adduser">
        {lang?.lang306}
                <Form.Item label={lang?.lang306} name="lastname" initialValue={user?.lastname}>
          <Input />
        </Form.Item>
        </div>

        <div className="select_adduser">
{lang?.lang308}
        <Form.Item label={lang?.lang308} name="phone" initialValue={user?.phone}>
          <Input />
        </Form.Item>
        </div>


        <hr className="hr" />
        <div className="select_adduser">
        {lang?.lang313}
                <Form.Item label={lang?.lang313} name="roomid" initialValue={user?.roomid}>
                <select className="select_room" >
        {locationarry
          ? locationarry.map((el) =>   
          <><option disabled  className="select_disable">  {el.locationname} </option>
         {  el.rooms.map((item) => 
        <option  className="select_hover" value={item.roomid}>{item.roomname}</option>)}</>) : null}

        </select>
        </Form.Item>
        </div>



        <div className="select_adduser">
        {`${lang?.lang320} (${lang?.lang321})`}
                <Form.Item
          label={`${lang?.lang320} (${lang?.lang321})`}
          name="academicyear"
          initialValue={user?.academicyear}
        >
          <Select >
            {arryAcademicYear.map((el) => {
              return <Option value={el}>{el}</Option>;
            })}
          </Select>
        </Form.Item>
        </div>


        <div className="select_adduser">
        {lang?.lang310}
                <Form.Item label={lang?.lang310} name="langid"  initialValue={user?.langid}>
          <Select >
            {arryLang.map((el) => {
              return <Option value={el}>{el}</Option>;
            })}
          </Select>
        </Form.Item>
        </div>

        <div className="select_adduser">
{lang?.lang319}
        <Form.Item label={lang?.lang319} name="levelid"  initialValue={user?.levelname}>
          <Select onChange={Permission}>
            {permission.map((el) => {
              return <Option value={el.id}>{el.permission}</Option>;
            })}
          </Select>
        </Form.Item>
        </div>


        {staf || aditionstaf?
 
              <div className="select_adduser">
{lang?.lang328}
        <Form.Item>
          {staf ? (
            <Form.Item
              label={lang?.lang328}
              name="accesstype"
              initialValue={user?.accesstype}
            >
                        <Select onChange={Userpermissions}>
               <Option value={1}>{lang?.lang360}</Option>;
               <Option value={2}>{lang?.lang178}</Option>;
               <Option value={3}>{lang?.lang322}</Option>;
               <Option value={4}>{lang?.lang323}</Option>;
               <Option value={5}>{lang?.lang324}</Option>;
          </Select>

              {/* <div className="radiogrop">
                <div className="radio">
                  <label for="only my">{lang?.lang360}</label>
                  <input
                    // onChange={closetask}
                    type="radio"
                    id="only my"
                    name="tasktosee"
                    className="closecheckboox"
                    value={1}
                  />
                </div>
                <div className="radio">
                  <label for="only my">{lang?.lang178}</label>
                  <input
                    type="radio"
                    id="only my"
                    name="tasktosee"
                    className="closecheckboox"
                    value={2}
                  />
                </div>
                <div className="radio">
                  <label for="only my">{lang?.lang322}</label>
                  <input
                    type="radio"
                    id="only my"
                    name="tasktosee"
                    className="closecheckboox"
                    value={3}
                  />
                </div>
                <div className="radio">
                  <label for="only my">{lang?.lang323}</label>
                  <input
                    type="radio"
                    id="only my"
                    name="tasktosee"
                    className="closecheckboox"
                    value={4}
                  />
                </div>
                <div className="radio">
                  <label for="only my">{lang?.lang324}</label>
                  <input
                    type="radio"
                    id="only my"
                    name="tasktosee"
                    className="closecheckboox"
                    value={5}
                  />
                </div>
              </div> */}
            </Form.Item>     
          ) : null}

          {aditionstaf ? (
            <div>
              <Form.Item label={lang?.lang387} name="appro">
                <div className="radio">
                  <label for="only my">{lang?.lang385}</label>
                  <input
                    type="radio"
                    id="only my"
                    name="inquiris"
                    className="closecheckboox"
                    value={1}
                  />
                </div>
                <div className="radio">
                  <label for="only my">{lang?.lang386}</label>
                  <input
                    type="radio"
                    id="only my"
                    name="inquiris"
                    className="closecheckboox"
                    value={2}
                  />
                </div>
              </Form.Item>
              <Form.Item label={lang?.lang209} name="location">
                <Select mode="tags" placeholder={lang?.lang209}>
                  <Option value="china" label="China">
                    gggg
                  </Option>
                  <Option value="aaa" label="aaaa">
                    gggg
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item label={lang?.lang103} name="room">
                <Select mode="tags" placeholder={lang?.lang103}>
                  <Option value="china" label="China">
                    gggg
                  </Option>
                  <Option value="aaa" label="aaaa">
                    gggg
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item label={lang?.lang104} name="categoris">
                <Select mode="tags" placeholder={lang?.lang104}>
                  <Option value="china" label="China">
                    gggg
                  </Option>
                  <Option value="aaa" label="aaaa">
                    gggg
                  </Option>
                </Select>
              </Form.Item>
            </div>
          ) : null}

        </Form.Item>
        </div>
:null}

<div className="radio_adduser">
        {`${lang?.lang377}?`}
                <Form.Item label={`${lang?.lang377}?`} name="allowaccesstoroom" 
                style={{marginInlineStart:"25px"}}
                initialValue={user?.allowaccesstoroom}>
          <Switch defaultChecked={false} />
        </Form.Item>
        </div>

</div>



          <Button type="primary" htmlType="submit" >
            {lang?.lang156}
          </Button>
      </Form>

     { modal&& <div className="adduser_modal"><div className="msg_modal">
       <img src={icon40} alt=""className="img_modal"/> 
       {msg}</div></div>}
    </Container>
  );
};

export default Adduser;
