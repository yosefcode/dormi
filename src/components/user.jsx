import React, { useState } from "react";
import {
  Contener,
  Styeldformitem,
  Styeldformitem2,
} from "../styelscomponents/Styelsuser";
import { Form, Input, Button, Select, Switch } from "antd";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 16,
  },
  wrapperCol: {
    span: 5,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const User = () => {
  document.body.style.backgroundColor = "white";

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const arry = ["1", "2", "3"];
  return (
    <Contener>
      {/* <div className="userpersonalinfi"> katz</div>
      <div className="usernoteficationautt">boaz</div> */}
      <Form name="basic" onFinish={onFinish}>
        <div className="userpersonalinfi">
          <p>פרטי משתמש</p>
          <Styeldformitem label="שם פרטי" name="username" initialValue="boaz">
            <Input />
          </Styeldformitem>

          <Styeldformitem label="שם משפחה" name="last_name">
            <Input />
          </Styeldformitem>
          <Styeldformitem label="כתובת מייל (לצורך כניסה למערכת)" name="email">
            <Input />
          </Styeldformitem>
          <Styeldformitem label="חדר ראשוני" name="room">
            <Select defaultValue="עברית">
              {arry.map((el) => {
                return <Option>{el}</Option>;
              })}
            </Select>
          </Styeldformitem>

          <Styeldformitem
            label="אישור כניסה לחדרי/דירתי ללא נוכחותי?"
            name="entrance"
          >
            <Switch defaultChecked={false} />
          </Styeldformitem>

          <Styeldformitem label="דרגת הרשאה" name="auht_rank">
            <Select defaultValue="עברית">
              {arry.map((el) => {
                return <Option>{el}</Option>;
              })}
            </Select>
          </Styeldformitem>
          <Styeldformitem
            label="שיוך לשנת לימוד (במידה ולוונטי)"
            name="school_year"
          >
            <Select defaultValue="עברית">
              {arry.map((el) => {
                return <Option>{el}</Option>;
              })}
            </Select>
          </Styeldformitem>
          <Styeldformitem label="סיסמא" name="password">
            <Input />
          </Styeldformitem>
          <Styeldformitem label="טלפון נייד" name="phonenumber">
            <Input />
          </Styeldformitem>
          <Styeldformitem label="שפת ממשק" name="language">
            <Select defaultValue="עברית">
              {arry.map((el) => {
                return <Option>{el}</Option>;
              })}
            </Select>
          </Styeldformitem>
          <Styeldformitem label="לאפשר את הפנייה ל:" name="send_to">
            <Select defaultValue="עברית">
              {arry.map((el) => {
                return <Option>{el}</Option>;
              })}
            </Select>
          </Styeldformitem>
          <Styeldformitem label="משתמש פעיל?" name="user_active">
            <Switch defaultChecked={false} />
          </Styeldformitem>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
        <div className="usernoteficationautt">
          <p>קבלת הודעה מהמערכת:</p>

          <p>בעת פתיחת פנייה:</p>
          <div className="noteficationautt">
            <Styeldformitem2 label="באימייל" name="open_req_in_email">
              <Switch defaultChecked={false} />
            </Styeldformitem2>
            {/* </div>
          <div className="noteficationautt"> */}
            <Styeldformitem2 label="בנוטיפיקציה / הודעה" name="open_req_masege">
              <Switch defaultChecked={false} />
            </Styeldformitem2>
          </div>
          <p>בעת סגירת פנייה:</p>
          <div className="noteficationautt">
            <Styeldformitem2 label="באימייל" name="close_req_in_email">
              <Switch defaultChecked={false} />
            </Styeldformitem2>
            <Styeldformitem2
              label="בנוטיפיקציה / הודעה"
              name="close_req_masege"
            >
              <Switch defaultChecked={false} />
            </Styeldformitem2>
          </div>
          <p>כאשר מתחילים לטפל בפנייה שלי:</p>
          <div className="noteficationautt">
            <Styeldformitem2 label="באימייל" name="start_handle_in_email">
              <Switch defaultChecked={false} />
            </Styeldformitem2>
            <Styeldformitem2
              label="בנוטיפיקציה / הודעה"
              name="start_handle_masege"
            >
              <Switch defaultChecked={false} />
            </Styeldformitem2>
          </div>
          <p>כאשר מסיימים את הטיפול בפנייה שלי:</p>
          <div className="noteficationautt">
            <Styeldformitem2 label="באימייל" name="end_handle_in_email">
              <Switch defaultChecked={false} />
            </Styeldformitem2>
            <Styeldformitem2
              label="בנוטיפיקציה / הודעה"
              name="end_handle_masege"
            >
              <Switch defaultChecked={false} />
            </Styeldformitem2>
          </div>
        </div>
      </Form>
    </Contener>
  );
};

export default User;
