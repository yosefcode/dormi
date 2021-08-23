import React, { useState, useContext, useEffect } from "react";

import { Form, Input, Button, Checkbox } from "antd";
import DataContext from "../DataContext";
import {
  Container,
  Tag,
  Card1,
  Card2,
} from "../styelscomponents/SendMassegeStyel";
import { Catalogues } from "./mock";
import Checkboxgrop from "./Checkbox";
const SendMassege = () => {
  const defoltlang = useContext(DataContext).lang;

  const lang = defoltlang?.lang;

  const { TextArea } = Input;

  document.body.style.backgroundColor = "white";

  const [addtext, setaddtext] = useState(false);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  //   const [listofmanegers, setlistofmanegers] = useState(Catalogues);
  useEffect(() => {
    setList(Catalogues);
  }, [list]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  function onChange(e) {
    setaddtext(e.target.checked);
  }
  const onFinish = (values) => {
    let chosenmaneger = isCheck;
    console.log("Success:", values, chosenmaneger);
  };
  const catalog = list.map(({ id, name, status }) => {
    let status1;
    let statustext;
    switch (status) {
      case "1":
        status1 = "#333";
        statustext = "מנהל";
        break;
      case "2":
        status1 = "#87d068";
        statustext = "משתמש";
        break;
      case "3":
        status1 = "#fb3";
        statustext = "צוות אחזקה ";
        break;
    }
    // debugger;
    return (
      <div>
        <Checkboxgrop
          key={id}
          type="checkbox"
          name={name}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
        />
        <span>
          {name}
          <Tag status={status1}>{` ${statustext}`}</Tag>
        </span>
      </div>
    );
  });

  return (
    <Container>
      <h2>שלח הזמנה למשתמשים</h2>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Card1 title={lang?.lang426}>
          <Form.Item
            label={`${lang?.lang320}(${lang?.lang321})`}
            name="schoolyear"
          >
            <Input />
          </Form.Item>

          <Form.Item label={lang?.lang143} name="status">
            <Input />
          </Form.Item>

          <Form.Item name="create list">
            <Button className="listbutton">{lang?.lang431}</Button>
          </Form.Item>
        </Card1>
        <Card2
          title={lang?.lang435}
          extra={
            <div>
              {lang?.lang423}
              <Checkboxgrop
                type="checkbox"
                name="selectAll"
                id="selectAll"
                handleClick={handleSelectAll}
                isChecked={isCheckAll}
              />
            </div>
          }
        >
          <Form.Item name="listofusers" valuePropName="checked"></Form.Item>

          <div>{catalog}</div>
          <Checkbox onChange={onChange}>{lang?.lang436}</Checkbox>
          {addtext ? (
            <Form.Item label={lang?.lang123} name="comments">
              <TextArea
                defaultValue={
                  "ברוכים הבאים למערכת הממוחשבת Dormi- Dormi Demo.דרך המערכת ניתן לדווח על כל בעיה בנושא תחזוקה שוטפת, נקיון, תקלות חשמל, אינסטלציה, מחשבים ומכונות צילום, בציון המיקום המדויק."
                }
                rows={4}
              />
            </Form.Item>
          ) : null}
        </Card2>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {lang?.lang437}
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default SendMassege;
