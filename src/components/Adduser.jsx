import React, { useContext } from "react";
import DataContext from "../DataContext";
import { Link } from "react-router-dom";
import { Form, Input, Button, Select, Switch } from "antd";
import { Container } from "../styelscomponents/Adduserstyel";

import { IoCaretBackSharp } from "react-icons/io5";
const Adduser = () => {
  document.body.style.backgroundColor = "white";

  const defoltlang = useContext(DataContext).lang;

  const lang = defoltlang?.lang;
  const { Option } = Select;
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const arry = ["חדר1", "room2"];
  return (
    <Container>
      <div className="hader">
        <p>{lang?.lang244}</p>
        <Link to="/list_users">
          <IoCaretBackSharp />
          {lang?.lang316}
        </Link>
      </div>
      <Form
        name="adduser"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item label={`${lang?.lang307}(${lang?.lang312})`} name="email">
          <Input />
        </Form.Item>
        <hr className="hr" />
        <Form.Item label={lang?.lang305} name="firstname">
          <Input />
        </Form.Item>
        <hr />
        <Form.Item label={lang?.lang306} name="lastname">
          <Input />
        </Form.Item>
        <hr />
        <Form.Item label={lang?.lang313} name="firstroom">
          <Select defaultValue="עברית">
            {arry.map((el) => {
              return <Option>{el}</Option>;
            })}
          </Select>
        </Form.Item>
        <hr />
        <Form.Item label={`${lang?.lang377}?`} name="entrance">
          <Switch defaultChecked={false} />
        </Form.Item>
        <hr />
        <Form.Item label={lang?.lang319} name="auht_rank">
          <Select defaultValue="עברית">
            {arry.map((el) => {
              return <Option>{el}</Option>;
            })}
          </Select>
        </Form.Item>
        <hr />
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
        <hr />
        <Form.Item label={lang?.lang309} name="password">
          <Input />
        </Form.Item>
        <hr />
        <Form.Item label={lang?.lang308} name="phonenumber">
          <Input />
        </Form.Item>
        <hr />
        <Form.Item label={lang?.lang310} name="language">
          <Select defaultValue="עברית">
            {arry.map((el) => {
              return <Option>{el}</Option>;
            })}
          </Select>
        </Form.Item>
        <hr />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {lang?.lang156}
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Adduser;
