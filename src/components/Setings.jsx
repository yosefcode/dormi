import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { Contener } from "../styelscomponents/setingstyeld";

function Setings() {
  document.body.style.backgroundColor = "white";
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
      <p>עדכון הגדרות מערכת</p>
      <Form name="basic" onFinish={onFinish}>
        <Form.Item
          label="שם איש קשר"
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
          <div>מופיע באימייל שנשלח למשתמש חדש במערכת</div>
        </Form.Item>
        <Form.Item
          name="email"
          label="מייל"
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
          <div>* מופיע באימייל שנשלח למשתמש חדש במערכת</div>
        </Form.Item>
        <Form.Item
          label="שפה"
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
          <div>* ההגדרה האישית של המשתמש (אם ישנה) תגבר על הגדרה זו</div>
        </Form.Item>
        <Form.Item
          label="כתובת לעדכון פניות"
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
            שמור
          </Button>
        </Form.Item>
      </Form>
    </Contener>
  );
}

export default Setings;
