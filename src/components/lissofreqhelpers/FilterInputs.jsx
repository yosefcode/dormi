import React, { useContext, useEffect, useState } from "react";
import { Select, Badge, TreeSelect, Form } from "antd";

import DataContext from "../../DataContext";
const { Option } = Select;

const { SHOW_PARENT } = TreeSelect;
/// כל סוגי הפילטרים
export function FiltersForsort({
  filterarry,
  setingAllOpenCategoris,
  setingfilterallUrgency,
  setlocationsort,
  setUserFilter,
  selectedstatus,
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
  };
  const filterofuser = (value) => {
    setUserFilter(value);
  };
  const selectedstatusfilter = (value) => {
    selectedstatus(value);
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
      title: `${Item.locationName[0].locationName}  (${Item.locationName.length})`,
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

  let numofopen;
  let numotrintment;
  let numoprofessional;
  let numclose;
  let numdelet;
  for (let i = 0; filterarry.statusname.length > i; i++) {
    switch (filterarry.statusname[i].statusname[0]) {
      case lang.lang194:
        numofopen = filterarry.statusname[i].statusname.length;

        break;
      case lang.lang174:
        numotrintment = filterarry.statusname[i].statusname.length;

        break;
      case lang.lang175:
        numoprofessional = filterarry.statusname[i].statusname.length;

        break;
      case lang.lang176:
        numclose = filterarry.statusname[i].statusname.length;

        break;
      case lang.lang177:
        numdelet = filterarry.statusname[i].statusname.length;

        break;
      default:
        break;
    }
  }

  // };
  const [form] = Form.useForm();
  const clear = () => {
    form.resetFields();
  };

  return (
    <div className="filteroption">
      <button button onClick={clear} className="clearbutton">
        נקה הכל
      </button>
      <Form form={form} name="filterform">
        <div className="selcts">
          <Form.Item name="opentask">
            <Select
              showSearch
              placeholder={lang?.lang178}
              onChange={selectedstatusfilter}
            >
              <Option key={"status1"} value={false}>
                {lang.lang178}
              </Option>
              {/*  פנייה חדשה */}
              <Option key={"status2"} value={lang.lang194}>
                {lang.lang173}

                <Badge
                  dir="tlr"
                  overflowCount={999}
                  count={numofopen}
                  style={{
                    backgroundColor: "#EBBE74",
                    color: "black",
                    fontsize: "16px",
                  }}
                />
              </Option>
              {/* בטיפול */}
              <Option key={"status3"} value={lang.lang174}>
                {lang.lang174}
                <Badge
                  dir="tlr"
                  overflowCount={999}
                  count={numotrintment}
                  style={{
                    backgroundColor: "#EBBE74",
                    color: "black",
                    fontsize: "16px",
                  }}
                />
              </Option>
              {/* בטיפול ספק חיצוני */}
              <Option key={"status4"} value={lang.lang175}>
                {lang.lang175}
                <Badge
                  dir="tlr"
                  overflowCount={999}
                  count={numoprofessional}
                  style={{
                    backgroundColor: "#EBBE74",
                    color: "black",
                    fontsize: "16px",
                  }}
                />
              </Option>
              {/* סגור */}
              <Option key={"status5"} value={lang.lang176}>
                {lang.lang176}
                <Badge
                  dir="tlr"
                  overflowCount={999}
                  count={numclose}
                  style={{
                    backgroundColor: "#EBBE74",
                    color: "black",
                    fontsize: "16px",
                  }}
                />
              </Option>
              {/* נמחק */}
              <Option key={"status6"} value={lang.lang177}>
                {lang.lang177}
                <Badge
                  dir="tlr"
                  overflowCount={999}
                  count={numdelet}
                  style={{
                    backgroundColor: "#EBBE74",
                    color: "black",
                    fontsize: "16px",
                  }}
                />
              </Option>
            </Select>
          </Form.Item>
        </div>
        <Form.Item name="allOpenCategoris">
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
                        style={{
                          backgroundColor: "#EBBE74",
                          color: "black",
                          fontsize: "16px",
                        }}
                      />
                    </Option>
                  ))
                : null}
            </Select>
          </div>
        </Form.Item>

        <Form.Item name="filterallUrgency">
          <div className="selcts">
            <Select
              showSearch
              placeholder={lang?.lang353}
              onChange={filterallUrgency}
            >
              <Option value={false}>{lang?.lang353}</Option>

              <Option value={"3"}>
                <Badge color={"#D91D61"} text={lang?.lang120} />
              </Option>

              <Option value={"2"}>
                <Badge color={"orange"} text={lang?.lang121} />
              </Option>
              <Option value={"1"}>
                <Badge color={"#22E7B7"} text={lang?.lang122} />
              </Option>
            </Select>
          </div>

          <TreeSelect
            {...tProps}
            style={{
              width: 200,
            }}
          />
        </Form.Item>
        <Form.Item name="filterofuser">
          {/*  כל המשתמשים  */}
          <div className="selcts">
            <Select
              showSearch
              placeholder={lang?.lang352}
              onChange={filterofuser}
            >
              <Option value={false}>{lang.lang352}</Option>
              {filterarry
                ? filterarry.users.map((el, index) => (
                    <Option
                      key={index}
                      value={[
                        el.users[0].user,
                        el.users[0].firstname,
                        el.users[0].lastname,
                      ]}
                    >
                      {el.users[0].user}{" "}
                      <Badge
                        dir="tlr"
                        overflowCount={999}
                        count={el?.users?.length}
                        style={{
                          backgroundColor: "#EBBE74",
                          color: "black",
                          fontsize: "16px",
                        }}
                      />
                    </Option>
                  ))
                : null}
            </Select>
          </div>
        </Form.Item>

        <Form.Item name="poshtostaff">
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
        </Form.Item>
      </Form>
    </div>
  );
}
