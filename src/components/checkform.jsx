import React,{ useState} from "react";

import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
    labelCol: {
      span: 2,
    },
    wrapperCol: {
      span: 2,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
const Checkform =()=> {


    const onFinish = (values) => {
        console.log('Success:', values);
      };

      const fackearry= [{id:1 ,addres:"jsr 1"},{id:2 ,addres:"הליכה אחרוה"}]
      function handleChange(value) {
        console.log(`selected ${value}`);
      }
  return (
<div dir="rtl">
   <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
   
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
</div>

  );
}

export default Checkform;