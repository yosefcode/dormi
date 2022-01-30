import React, { useContext } from "react";
import { Form, Button, Select } from "antd";
import { Contener } from "../styelscomponents/setingstyeld";
import DataContext from "../DataContext";
import { Link } from "react-router-dom";

function Setings() {
  document.body.style.backgroundColor = "white";

  const defoltlang = useContext(DataContext).lang;

  const lang = defoltlang?.lang;

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
      <div >{lang?.lang152}</div>
      <Form name="basic" onFinish={onFinish} layout="vertical" >

      <div className="div_setting">



        <Form.Item
          label={lang?.lang154}
          labelStyle={{fontSize:"50px"}}
          name="contact"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select showSearch >
            {problomtypearry.map((el) => {
              return <Option value={[el.type, el.id]}>{el.type}</Option>;
            })}
          </Select>
          <div className="text_bottom">{lang?.lang153}</div>
        </Form.Item>
</div>

<div className="div_setting">


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
          <div  className="text_bottom">* {lang?.lang153}</div>
        </Form.Item>
        </div>

<div className="div_setting">


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
          <div  className="text_bottom">* {lang?.lang169}</div>
        </Form.Item>
        </div>

<div className="div_setting">


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
        </div>

<div className="div_setting">

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
        </div>


        <Form.Item>
          <Button type="primary" htmlType="submit">
            {lang?.lang156}
          </Button>
        </Form.Item>
      </Form>
      <Link to="/SendMassege" className="link">שלוח הזמנה למשתמשים</Link>
    </Contener>
  );
}

export default Setings;
