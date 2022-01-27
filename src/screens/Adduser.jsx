import React, { useContext, useState } from "react";
import DataContext from "../DataContext";

import { Form, Input, Button, Select, Switch } from "antd";
import { Container } from "../styelscomponents/Adduserstyel";
import { FiArrowRight } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const Adduser = () => {
  document.body.style.backgroundColor = "white";

  const defoltlang = useContext(DataContext).lang;
  let history = useHistory();

  function goback() {
    history.push("/list_users");
  }
  const lang = defoltlang?.lang;
  const { Option } = Select;
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const arry = ["חדר1", "room2"];
  const [staf, setstaf] = useState(false);
  const [aditionstaf, setaditionstaf] = useState(false);

  let permission = [
    { permission: "משתמש", id: 1 },
    { permission: "מנהל", id: 2 },
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
    if (e.target.value === "5" || e.target.value === "4") {
      setaditionstaf(true);
    } else {
      setaditionstaf(false);
    }
  };
  return (
    <Container>
      <div className="hader">
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
        <Form.Item label={`${lang?.lang307} (${lang?.lang312})`} name="email">
          <Input />
        </Form.Item>
        </div>

        <div className="select_adduser">
        {lang?.lang309}
                <Form.Item label={lang?.lang309} name="password">
          <Input />
        </Form.Item>
        </div>

        <hr style={{borderTop: "1px solid #d6e2f1", width: "100%"}}/>


        <div className="select_adduser">
        {lang?.lang305}
        <Form.Item label={lang?.lang305} name="firstname">
          <Input />
        </Form.Item>
        </div>

        <div className="select_adduser">
        {lang?.lang306}
                <Form.Item label={lang?.lang306} name="lastname">
          <Input />
        </Form.Item>
        </div>

        <div className="select_adduser">
{lang?.lang308}
        <Form.Item label={lang?.lang308} name="phonenumber">
          <Input />
        </Form.Item>
        </div>


        <hr style={{borderTop: "1px solid #d6e2f1", width: "100%"}}/>

        <div className="select_adduser">
        {lang?.lang313}
                <Form.Item label={lang?.lang313} name="firstroom">
          <Select defaultValue="עברית">
            {arry.map((el) => {
              return <Option>{el}</Option>;
            })}
          </Select>
        </Form.Item>
        </div>

        <div className="select_adduser">
        {`${lang?.lang377}?`}
                <Form.Item label={`${lang?.lang377}?`} name="entrance">
          <Switch defaultChecked={false} />
        </Form.Item>
        </div>

        <div className="select_adduser">
{lang?.lang319}
        <Form.Item label={lang?.lang319} name="auht_rank">
          <Select onChange={Permission}>
            {permission.map((el) => {
              return <Option value={el.id}>{el.permission}</Option>;
            })}
          </Select>
        </Form.Item>
        </div>
        <div className="select_adduser">
        {`${lang?.lang320} (${lang?.lang321})`}
                <Form.Item
          label={`${lang?.lang320} (${lang?.lang321})`}
          name="schoolyaer"
        >
          <Select defaultValue="עברית">
            {arry.map((el) => {
              return <Option>{el}</Option>;
            })}
          </Select>
        </Form.Item>
        </div>


        <div className="select_adduser">
        {lang?.lang310}
                <Form.Item label={lang?.lang310} name="language">
          <Select defaultValue="עברית">
            {arry.map((el) => {
              return <Option>{el}</Option>;
            })}
          </Select>
        </Form.Item>
        </div>

        <hr style={{borderTop: "1px solid #d6e2f1", width: "100%"}}/>
        {staf || aditionstaf?

 
              <div className="select_adduser">
{lang?.lang328}
        <Form.Item>
          {staf ? (
            <Form.Item
              label={lang?.lang328}
              name="userpermissions"
              onChange={Userpermissions}
            >
              <div className="radiogrop">
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
              </div>
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
        <hr style={{borderTop: "1px solid #d6e2f1", width: "100%"}}/>
        </div>
:null}


          <Button type="primary" htmlType="submit" style={{width: "100%"}}>
            {lang?.lang156}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Adduser;
