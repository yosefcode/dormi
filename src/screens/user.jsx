import React, { useContext } from "react";
import { Contener } from "../styelscomponents/Styelsuser";
import { Form, Input, Button, Select, Switch } from "antd";
import DataContext from "../DataContext";
import { FiArrowRight } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const { Option } = Select;

const User = () => {
  const defoltlang = useContext(DataContext).lang;
  const loginstatus = useContext(DataContext).loginstatus;
  // let userdata = loginstatus;
  let history = useHistory();

  function goback() {
    history.push("/list_users");
  }
  const lang = defoltlang?.lang;

  document.body.style.backgroundColor = "white";

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const arry = ["1", "2", "3"];
  return (
    <Contener>
      <Form name="basic" onFinish={onFinish}>
        <div className="gobacklink" onClick={goback}>
          <div className="goback">
            <FiArrowRight />
          </div>
          <p>{lang?.lang316}</p>
        </div>

        <p id="hadartext">{lang?.lang315}</p>
        <div className="flecinbruwser">
          <div>
            <Form.Item
              label={lang?.lang305}
              name="username"
              initialValue={loginstatus?.firstname}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={lang?.lang306}
              name="last_name"
              initialValue={loginstatus?.lastname}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={`${lang?.lang307}(${lang?.lang312})`}
              name="email"
            >
              <Input />
            </Form.Item>
            <Form.Item label={lang?.lang313} name="room">
              <Select defaultValue="עברית">
                {arry.map((el) => {
                  return <Option>{el}</Option>;
                })}
              </Select>
            </Form.Item>

            <Form.Item label={`${lang?.lang377}?`} name="entrance">
              <Switch defaultChecked={false} />
            </Form.Item>

            <Form.Item label={lang?.lang319} name="auht_rank">
              <Select defaultValue="עברית">
                {arry.map((el) => {
                  return <Option>{el}</Option>;
                })}
              </Select>
            </Form.Item>
            <Form.Item
              label={`${lang?.lang320}(${lang?.lang321})`}
              name="school_year"
            >
              <Select defaultValue="עברית">
                {arry.map((el) => {
                  return <Option>{el}</Option>;
                })}
              </Select>
            </Form.Item>
            <Form.Item label={lang?.lang309} name="password">
              <Input />
            </Form.Item>
            <Form.Item label={lang?.lang308} name="phonenumber">
              <Input />
            </Form.Item>
            <Form.Item label={lang?.lang310} name="language">
              <Select defaultValue="עברית">
                {arry.map((el) => {
                  return <Option>{el}</Option>;
                })}
              </Select>
            </Form.Item>
            <Form.Item label="לאפשר את הפנייה ל:" name="send_to">
              <Select defaultValue="עברית">
                {arry.map((el) => {
                  return <Option>{el}</Option>;
                })}
              </Select>
            </Form.Item>
            <Form.Item label={`${lang?.lang311}?`} name="user_active">
              <Switch defaultChecked={false} />
            </Form.Item>
          </div>
          <div>
            <div className="noteficatin">
              <p>{lang?.lang364}:</p>

              <p>{lang?.lang365}:</p>
              <div className="nutificationstatus">
                <Form.Item label={lang?.lang369} name="open_req_in_email">
                  <Switch defaultChecked={false} />
                </Form.Item>

                <Form.Item label={lang?.lang370} name="open_req_masege">
                  <Switch defaultChecked={false} />
                </Form.Item>
              </div>
              <p>{lang?.lang380}:</p>
              <div className="nutificationstatus">
                <Form.Item label={lang?.lang369} name="close_req_in_email">
                  <Switch defaultChecked={false} />
                </Form.Item>
                <Form.Item label={lang?.lang370} name="close_req_masege">
                  <Switch defaultChecked={false} />
                </Form.Item>
              </div>
              <p>{lang?.lang366}:</p>
              <div className="nutificationstatus">
                <Form.Item label={lang?.lang369} name="start_handle_in_email">
                  <Switch defaultChecked={false} />
                </Form.Item>
                <Form.Item label={lang?.lang370} name="start_handle_masege">
                  <Switch defaultChecked={false} />
                </Form.Item>
              </div>
              <p>{lang?.lang367}:</p>
              <div className="nutificationstatus">
                <Form.Item label={lang?.lang369} name="end_handle_in_email">
                  <Switch defaultChecked={false} />
                </Form.Item>
                <Form.Item label={lang?.lang370} name="end_handle_masege">
                  <Switch defaultChecked={false} />
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {lang?.lang156}
          </Button>
        </Form.Item>
      </Form>
    </Contener>
  );
};

export default User;
