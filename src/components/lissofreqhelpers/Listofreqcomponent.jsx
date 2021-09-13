import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Select, Input, Badge, TreeSelect } from "antd";

import DataContext from "../../DataContext";

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
  const [locationvalue, setlocationvalue] = useState();

  const AllOpenCategoris = (value) => {
    setingAllOpenCategoris(value);
  };
  const filterallUrgency = (value) => {
    setingfilterallUrgency(value);
  };
  const locationfilter = (value) => {
    setlocationsort(value);
    console.log("onChange ", value);
  };

  // data לבחירת סינון על פי מיקום
  const treeData = filterarry.locationName.map((Item, index) => {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    let onlyroms = Item.locationName.map((el) => {
      return el.roomName;
    });

    let unique = onlyroms.filter(onlyUnique);

    let childrenobj = unique.map((obj) => {
      if (Item.locationName[0].locationName !== obj) {
        return {
          title: obj,
          value: `${Item.locationName[0].locationName} room:${obj}`,
          key: `${Item.locationName[0].locationName} room:${obj}`,
        };
      } else {
        return {
          title: `room ${obj}`,
          value: `${Item.locationName[0].locationName} room:${obj}`,
          key: `${Item.locationName[0].locationName} room:${obj}`,
        };
      }
    });
    // debugger;
    let obj = {
      title: Item.locationName[0].locationName,
      value: Item.locationName[0].locationName,
      key: Item.locationName[0].locationName,
      children: childrenobj,
    };
    return obj;
  });

  const tProps = {
    treeData,

    value: locationvalue,
    onChange: locationfilter,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: lang.lang355,
    style: {
      width: "100%",
    },
  };
  console.log(filterarry);
  return (
    <div className="filteroption">
      <div className="selcts">
        <Select
          showSearch
          placeholder={lang?.lang172}
          // onChange={AllOpenCategoris}
        >
          <Option value={false}>{lang.lang172}</Option>
        </Select>
      </div>

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

      <TreeSelect {...tProps} />

      {/*  כל המשתמשים  */}
      <div className="selcts">
        <Select
          showSearch
          placeholder={lang?.lang352}
          // onChange={AllOpenCategoris}
        >
          <Option value={false}>{lang.lang352}</Option>
          {filterarry
            ? filterarry.users.map((el) => (
                <Option value={el?.users[0]}>
                  {el?.users[0]}{" "}
                  <Badge
                    dir="tlr"
                    overflowCount={999}
                    count={el?.users?.length}
                  />
                </Option>
              ))
            : null}
        </Select>
      </div>
      {/* הועבר לטיפול */}
      <div className="selcts">
        <Select
          showSearch
          placeholder={lang?.lang358}
          // onChange={AllOpenCategoris}
        >
          <Option value={false}>{lang.lang358}</Option>
        </Select>
      </div>
    </div>
  );
}

// const arryofloction = [
//   {
//     title: "בעז",
//     value: 0,
//     key: 0,
//     children: [
//       {
//         title: "Child Node1",
//         value: "0-0-0",
//         key: "0-0-0",
//       },
//     ],
//   },
//   {
//     title: "Node2",
//     value: "0-1",
//     key: "0-1",
//     children: [
//       {
//         title: "Child Node3",
//         value: "0-1-0",
//         key: "0-1-0",
//       },
//       {
//         title: "Child Node4",
//         value: "0-1-1",
//         key: "0-1-1",
//       },
//       {
//         title: "Child Node5",
//         value: "0-1-2",
//         key: "0-1-2",
//       },
//     ],
//   },
// ];
