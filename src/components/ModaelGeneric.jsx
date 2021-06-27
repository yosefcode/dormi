import React, { useState, useContext } from "react";
import { Tag, Form, Menu, Dropdown, Select, Button, Input } from "antd";

import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import DataContext from "../DataContext";

const ModaelGeneric = (props) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const data = useContext(DataContext);
  const changdata = useContext(DataContext).changdata;
  const lang = data.data?.lang;
  const [Sendmassege, setSendmassege] = useState(false);

  if (props.visible) {
    setSendmassege(true);
  }
  const onsendmassege = (value) => {
    setSendmassege(false);
    console.log(value);
    form.resetFields();
  };
  return (
    <ModalStyeld
      title={lang?.lang263}
      visible={Sendmassege}
      onCancel={() => {
        setSendmassege(false);
      }}
      footer={false}
    >
      <Form name="masseg" onFinish={onsendmassege} form={form}>
        <Form.Item name="comments" placeholder={lang?.lang266}>
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="id"
          hidden={true}
          initialValue={props.itemid}
        ></Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {lang?.lang265}
          </Button>
        </Form.Item>
      </Form>
    </ModalStyeld>
  );
};

export default ModaelGeneric;
