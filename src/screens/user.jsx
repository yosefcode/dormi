import React, { useContext } from "react";
import { Contener } from "../styelscomponents/Styelsuser";
import { Form, Input, Button, Select, Switch } from "antd";
import DataContext from "../DataContext";

const { Option } = Select;

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const User = () => {
  const defoltlang = useContext(DataContext).lang;
  const loginstatus = useContext(DataContext).loginstatus;
  // let userdata = loginstatus;

  const lang = defoltlang?.lang;

  document.body.style.backgroundColor = "white";

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const arry = ["1", "2", "3"];
  return (
    <Contener>
      gggggg
      <Form name="basic" onFinish={onFinish}>
        <div className="userpersonalinfi">
          <p>{lang?.lang315}</p>
          <a>{lang?.lang316}</a>
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
          <Form.Item label={`${lang?.lang307}(${lang?.lang312})`} name="email">
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
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              {lang?.lang156}
            </Button>
          </Form.Item>
        </div>
        <div className="usernoteficationautt">
          <p>{lang?.lang364}:</p>

          <p>{lang?.lang365}:</p>
          <div className="noteficationautt">
            <Form.Item label={lang?.lang369} name="open_req_in_email">
              <Switch defaultChecked={false} />
            </Form.Item>
            {/* </div>
          <div className="noteficationautt"> */}
            <Form.Item label={lang?.lang370} name="open_req_masege">
              <Switch defaultChecked={false} />
            </Form.Item>
          </div>
          <p>{lang?.lang380}:</p>
          <div className="noteficationautt">
            <Form.Item label={lang?.lang369} name="close_req_in_email">
              <Switch defaultChecked={false} />
            </Form.Item>
            <Form.Item label={lang?.lang370} name="close_req_masege">
              <Switch defaultChecked={false} />
            </Form.Item>
          </div>
          <p>{lang?.lang366}:</p>
          <div className="noteficationautt">
            <Form.Item label={lang?.lang369} name="start_handle_in_email">
              <Switch defaultChecked={false} />
            </Form.Item>
            <Form.Item label={lang?.lang370} name="start_handle_masege">
              <Switch defaultChecked={false} />
            </Form.Item>
          </div>
          <p>{lang?.lang367}:</p>
          <div className="noteficationautt">
            <Form.Item label={lang?.lang369} name="end_handle_in_email">
              <Switch defaultChecked={false} />
            </Form.Item>
            <Form.Item label={lang?.lang370} name="end_handle_masege">
              <Switch defaultChecked={false} />
            </Form.Item>
          </div>
        </div>
      </Form>
    </Contener>
  );
};

export default User;
