import React, { useContext } from "react";
import { Form, Button, Select } from "antd";
import { Contener } from "../styelscomponents/setingstyeld";
import DataContext from "../DataContext";

function Setings() {
  document.body.style.backgroundColor = "white";
  const data = useContext(DataContext);
  const changdata = useContext(DataContext).changdata;
  const lang = data.data?.lang;
  const { Option } = Select;
  const onFinish = (value) => {
    console.log(value);
  };
  const problomtypearry = [
    { type: "חשמל", id: 123 },
    { type: "אינסטלציה", id: 456 },
  ];
  return (
    <Contener>
      <p>{lang?.lang152}</p>
      <Form name="basic" onFinish={onFinish}>
        <Form.Item
          label={lang?.lang154}
          name="contact"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select showSearch>
            {problomtypearry.map((el) => {
              return <Option value={[el.type, el.id]}>{el.type}</Option>;
            })}
          </Select>
          <div>{lang?.lang153}</div>
        </Form.Item>
        <Form.Item
          name="contact-email"
          label={lang?.lang307}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select showSearch>
            {problomtypearry.map((el) => {
              return <Option value={[el.type, el.id]}>{el.type}</Option>;
            })}
          </Select>
          <div>*{lang?.lang153}</div>
        </Form.Item>
        <Form.Item
          label={lang?.lang168}
          name="language"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select showSearch>
            {problomtypearry.map((el) => {
              return <Option value={[el.type, el.id]}>{el.type}</Option>;
            })}
          </Select>
          <div>* {lang?.lang169}</div>
        </Form.Item>
        <Form.Item
          label={lang?.lang155}
          name="mail addres"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select showSearch>
            {problomtypearry.map((el) => {
              return <Option value={[el.type, el.id]}>{el.type}</Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="הפנייה מידית לאיש אחזקה"
          name="responsibe"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select showSearch>
            {problomtypearry.map((el) => {
              return <Option value={[el.type, el.id]}>{el.type}</Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {lang?.lang156}
          </Button>
        </Form.Item>
      </Form>
      <a>משלוח הזמנה למשתמשים</a>
    </Contener>
  );
}

export default Setings;
