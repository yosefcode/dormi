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
        className="Quickclosebuutonup"
      >
        <img src="/images/checkbox.svg" alt="icon" /> {lang?.lang145}
      </button>
      <button
        className="Quickclosebuuton"
        onClick={() => {
          onfinish("cost", null);
        }}
      >
        <img src="/images/apruchclose.svg" alt="icon" /> {lang?.lang208}
      </button>
      <button
        className="Quickclosebuuton"
        onClick={() => {
          onfinish("open", null);
        }}
      >
        <img src="/images/camra.svg" alt="icon" /> {lang?.lang195}
      </button>
      <button
        className="Quickclosebuuton"
        onClick={() => {
          onfinish("pending", null);
        }}
      >
        <img src="/images/ranch.svg" alt="icon" /> {lang?.lang190}
      </button>
      <button className="Quickclosebuuton">
        <img src="/images/avatar.svg" alt="icon" /> {lang?.lang240}
      </button>
      <button
        className="Quickclosebuuton"
        onClick={() => {
          onfinish("message", null);
        }}
      >
        <img src="/images/bubble.svg" alt="icon" /> {lang?.lang263}
      </button>
      <button
        className="Quickclosebuuton"
        onClick={() => {
          onfinish("edit", null);
        }}
      >
        <img src="/images/pen.svg" alt="icon" /> {lang?.lang243}
      </button>
      <button className="Quickclosebuutdown">
        <img src="/images/trash.svg" alt="icon" /> {lang?.lang147}
      </button>
      <br />
      <button className="Quickclosebuutdownclose" onClick={onclose}>
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
    <div>
      <button
        onClick={() => {
          onfinish("close", null);
        }}
        className="Quickclosebuutonup"
      >
        <img src="/images/checkbox.svg" alt="icon" /> {lang?.lang145}
      </button>
      <button
        className="Quickclosebuuton"
        onClick={() => {
          onfinish("open", null);
        }}
      >
        <img src="/images/camra.svg" alt="icon" /> {lang?.lang195}
      </button>
      <button
        className="Quickclosebuuton"
        onClick={() => {
          onfinish("pending", null);
        }}
      >
        <img src="/images/ranch.svg" alt="icon" /> {lang?.lang190}
      </button>
      <button className="Quickclosebuuton">
        <img src="/images/avatar.svg" alt="icon" /> {lang?.lang240}
      </button>
      <button className="Quickclosebuutdown">
        <img src="/images/trash.svg" alt="icon" /> {lang?.lang147}
      </button>
    </div>
  );
};
