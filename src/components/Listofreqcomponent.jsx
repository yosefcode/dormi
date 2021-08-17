import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Select, Input, Badge } from "antd";

import DataContext from "../DataContext";

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
          <span className="cardphone"> {element?.phone}</span>
        </span>
      </span>
    </>
  );
}

/// כל סוגי הפילטרים
export function FiltersForsort({
  filterarry,
  setingAllOpenCategoris,
  setingfilterallUrgency,
}) {
  const defoltlang = useContext(DataContext).lang;
  const lang = defoltlang?.lang;

  const AllOpenCategoris = (value) => {
    setingAllOpenCategoris(value);
  };
  const filterallUrgency = (value) => {
    setingfilterallUrgency(value);
  };
  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  return (
    <div className="filteroption">
      <div className="selcts">
        <Select
          showSearch
          placeholder={lang?.lang354}
          onChange={AllOpenCategoris}
        >
          <Option value={false}>{lang.lang354}</Option>

          {filterarry
            ? filterarry.breadcrumb.map((el) => (
                <Option value={el?.breadcrumb[0]}>
                  {el?.breadcrumb[0]}{" "}
                  <Badge
                    dir="tlr"
                    overflowCount={999}
                    count={el?.breadcrumb?.length}
                  />
                </Option>
              ))
            : null}
        </Select>
      </div>
      <div className="selcts">
        <Select
          showSearch
          placeholder={lang?.lang353}
          onChange={filterallUrgency}
        >
          <Option value={false}>{lang?.lang353}</Option>
          <Option value={"3"}>{lang?.lang120}</Option>
          <Option value={"2"}>{lang?.lang121}</Option>
          <Option value={"1"}>{lang?.lang122}</Option>
        </Select>
      </div>

      <Select
        mode="tags"
        size={"default"}
        placeholder={lang?.lang355}
        onChange={handleChange}
        style={{ width: "100%" }}
      >
        {filterarry
          ? filterarry.locationName.map((el, index) => {
              return (
                <Option key={index}>{el.locationName[0].locationName}</Option>
              );
            })
          : null}
      </Select>
    </div>
  );
}
