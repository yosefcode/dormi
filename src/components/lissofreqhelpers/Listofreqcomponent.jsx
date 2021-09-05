import React, { useContext, useState } from "react";
import { Form, Button, Select, Input, Badge, TreeSelect } from "antd";
// import SignaturePad from "react-signature-canvas";
import DataContext from "../../DataContext";
import Item from "antd/lib/list/Item";
// import { BsCloudUpload } from "react-icons/bs";
// import { PostToServer } from "../../serveses";

// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const { Option } = Select;

const { TreeNode } = TreeSelect;
const { SHOW_PARENT } = TreeSelect;
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
  setlocationsort,
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
    // setlocationsort(value);
    console.log(filterarry.locationName);
    console.log(`Selected: ${value}`);
  }

  const treeData = [
    {
      title: "Node1",
      value: "0-0",
      key: "0-0",
      children: [
        {
          title: "Child Node1",
          value: "0-0-0",
          key: "0-0-0",
        },
      ],
    },
    {
      title: "Node2",
      value: "0-1",
      key: "0-1",
      children: [
        {
          title: "Child Node3",
          value: "0-1-0",
          key: "0-1-0",
        },
        {
          title: "Child Node4",
          value: "0-1-1",
          key: "0-1-1",
        },
        {
          title: "Child Node5",
          value: "0-1-2",
          key: "0-1-2",
        },
      ],
    },
  ];
  const [value, setvalue] = useState();
  const onChange = (value) => {
    console.log("onChange ", value);
  };

  const tProps = {
    treeData,
    value: value,
    onChange: onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Please select",
    style: {
      width: "100%",
    },
  };

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
      {/* 
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
      </Select> */}
      <TreeSelect {...tProps} />

      <TreeSelect
        showSearch
        style={{ width: "100%" }}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        placeholder="Please select"
        allowClear
        multiple
        treeDefaultExpandAll
        onChange={handleChange}
      >
        {filterarry
          ? filterarry.locationName.map((el, index) => {
              return (
                <TreeNode
                  key={index}
                  value={el.locationName[0].locationName}
                  title={el.locationName[0].locationName}
                >
                  {/* <TreeNode value="leaf1" title="my leaf" />
                  <TreeNode value="leaf2" title="your leaf" /> */}
                  {/* {el.locationName
                    ? el.locationName.map((Item, index1) => {
                        return (
                          <TreeNode
                            key={index1}
                            value={Item.roomName}
                            title={Item.roomName}
                          />
                        );
                      })
                    : null} */}
                </TreeNode>
              );
            })
          : null}

        {/* <TreeNode value="parent 1" title="parent 1">
          <TreeNode value="parent 1-0" title="parent 1-0">
            <TreeNode value="leaf1" title="my leaf" />
            <TreeNode value="leaf2" title="your leaf" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1">
            <TreeNode
              value="sss"
              title={<b style={{ color: "#08c" }}>sss</b>}
            />
          </TreeNode>
        </TreeNode> */}
      </TreeSelect>
    </div>
  );
}
