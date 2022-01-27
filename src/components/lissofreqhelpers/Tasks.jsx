import React, { useContext } from "react";
import { Form, Button, Select, Input } from "antd";

import DataContext from "../../DataContext";

const { TextArea } = Input;
const { Option } = Select;

export function SendmasegeTask({ onsendmassege }) {
  const defoltlang = useContext(DataContext).lang;
  const [form] = Form.useForm();

  const lang = defoltlang?.lang;

  const sendmassege = (value) => {
    onsendmassege(value);
    form.resetFields();
  };

  return (
    <div>
      <Form name="masseg" onFinish={sendmassege} form={form}>
        <Form.Item name="comments" placeholder={lang?.lang266}>
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {lang?.lang265}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
/// שלח הודעה לאיש צוות

export function Sentostaf({ onReferr }) {
  const defoltlang = useContext(DataContext).lang;
  const lang = defoltlang?.lang;
  const [form] = Form.useForm();

  const sendmassege = (value) => {
    onReferr(value);
    form.resetFields();
  };

  return (
    <Form name="masseg" onFinish={sendmassege} form={form}>
      <Form.Item name="stafmember">
        <Select showSearch placeholder="בחר איש צוות">
          <Option value={"אביתר"}>אביתר </Option>

          <Option value={"בעז"}>בעז</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {lang?.lang265}
        </Button>
      </Form.Item>
    </Form>
  );
}
//  נתוני כרטיס
export function Carddata({ element }) {
  return (
    <>
      <span className="card-body-spen"> {`#${element?.ticketid}`}</span>
      <span className="card-body-spen"> {element?.dateopened}</span>
      <span className="card-body-spen">
        <span>
          <span className="cardname">
            {element?.firstname},{element?.lastname}
          </span>
        </span>

        <span className="card-body-spen">
          <span
            className="cardphone"
            onClick={() => {
              window.open(`tel:${element?.phone}`);
            }}
          >
            {" "}
            {element?.phone}
          </span>
        </span>
      </span>
    </>
  );
}

export const ListtaskforEdit = ({ action, close }) => {
  const defoltlang = useContext(DataContext).lang;
  const lang = defoltlang?.lang;
  const onfinish = (type, value) => {
    action(type, value);
  };
  const onclose = (type, value) => {
    close();
  };
  return (
    <div className="listQuickclosebuuton">
      <button
        onClick={() => {
          onfinish("close", null);
        }}
        className="drower_button btn_up"
      >
        <img className="img_icon" src="/images/checkbox.svg" alt="icon" /> {lang?.lang145}
      </button>

      <button
        className="drower_button"
        onClick={() => {
          onfinish("cost", null);
        }}
      >
        <img className="img_icon" src="/images/apruchclose.svg" alt="icon" /> {lang?.lang208}
      </button>

      <button
        className="drower_button"
        onClick={() => {
          onfinish("open", null);
        }}
      >
        <img className="img_icon" src="/images/camra.svg" alt="icon" /> {lang?.lang195}
      </button>

      <button
        className="drower_button"
        onClick={() => {
          onfinish("pending", null);
        }}
      >
        <img className="img_icon" src="/images/ranch.svg" alt="icon" /> {lang?.lang190}
      </button>

      <button className="drower_button">
        <img className="img_icon" src="/images/avatar.svg" alt="icon" /> {lang?.lang240}
      </button>

      <button
        className="drower_button"
        onClick={() => {
          onfinish("message", null);
        }}
      >
        <img className="img_icon" src="/images/bubble.svg" alt="icon" /> {lang?.lang263}
      </button>

      <button
        className="drower_button"
        onClick={() => {
          onfinish("edit", null);
        }}
      >
        <img className="img_icon" src="/images/pen.svg" alt="icon" /> {lang?.lang243}
      </button>

      <button className="drower_button btn_down">
        <img className="img_icon" src="/images/trash.svg" alt="icon" /> {lang?.lang147}
      </button>

      <br />
      <button className="drower_button btn_cancel" onClick={onclose}>
        {lang?.lang251}
      </button>
    </div>
  );
};
export const Quickclosebuuton = ({ action }) => {
  const defoltlang = useContext(DataContext).lang;
  const lang = defoltlang?.lang;
  const onfinish = (type, value) => {
    action(type, value);
  };

  return (
    <div  className="drower_checklist">
      <button
        onClick={() => {
          onfinish("close", null);
        }}
        className="drower_button btn_up"
      >
        <img className="img_icon" src="/images/checkbox.svg" alt="icon" /> {lang?.lang145}
      </button>
      <button
        className="drower_button"
        onClick={() => {
          onfinish("open", null);
        }}
      >
        <img className="img_icon" src="/images/camra.svg" alt="icon" /> {lang?.lang195}
      </button>
      <button
        className="drower_button"
        onClick={() => {
          onfinish("pending", null);
        }}
      >
        <img className="img_icon" src="/images/ranch.svg" alt="icon" /> {lang?.lang190}
      </button>
      <button className="drower_button">
        <img className="img_icon" src="/images/avatar.svg" alt="icon" /> {lang?.lang240}
      </button>
      <button className="drower_button btn_down">
        <img className="img_icon" src="/images/trash.svg" alt="icon" /> {lang?.lang147}
      </button>
    </div>
  );
};
