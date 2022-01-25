import React, { useContext, useEffect, useState } from "react";
import { Select, Badge, TreeSelect, Form } from "antd";
import { FaFilter } from "react-icons/fa";

import DataContext from "../../DataContext";
const { Option } = Select;

const { SHOW_PARENT } = TreeSelect;
/// כל סוגי הפילטרים

const Treesslesctlocation = ({ data, locationfilter }) => {
  const defoltlang = useContext(DataContext).lang;
  const filterserch = useContext(DataContext).filterserch;
  const chanfefilter = useContext(DataContext).chanfefilter;
  const lang = defoltlang?.lang;
  const [locationvalue, setlocationvalue] = useState();
  useEffect(() => {
    if (filterserch.categoris) {
      setlocationvalue(filterserch.categoris);
    }
  }, []);
  
  const filter = (value) => {
    chanfefilter({
      categoris: false,
      location: false,
    });
    setlocationvalue(value);
    locationfilter(value);
  };
  const treeData = data.map((Item, index) => {
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
    onChange: filter,
    treeCheckable: true,

    showCheckedStrategy: SHOW_PARENT,
    placeholder: lang.lang355,
    style: {
      width: "100%",
    },
  };
  return (
    <TreeSelect
      {...tProps}
      style={{
        width: 200,
      }}
    />
  );
};

const Treesslescategoris = ({ data, AllOpenCategoris }) => {
  const defoltlang = useContext(DataContext).lang;
  const filterserch = useContext(DataContext).filterserch;
  const chanfefilter = useContext(DataContext).chanfefilter;

  const lang = defoltlang?.lang;
  const [categori, setcategori] = useState();

  useEffect(() => {
    if (filterserch.categoris) {
      setcategori(filterserch.categoris);
    }
  }, []);
  const filter = (value) => {
    chanfefilter({
      categoris: false,
      location: false,
    });
    setcategori(value);

    AllOpenCategoris(value);
  };

  const treeData = data.map((Item, index) => {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    let onlyroms = Item.breadcrumb.map((el) => {
      return el.categoryname;
    });

    let unique = onlyroms.filter(onlyUnique);

    let childrenobj = unique.map((obj) => {
      if (Item.breadcrumb[0].breadcrumb !== obj) {
        return {
          title: obj,
          value: `${Item.breadcrumb[0].breadcrumb} category:${obj}`,
          key: `${Item.breadcrumb[0].breadcrumb} category:${obj}`,
        };
      } else {
        return {
          title: ` category${obj}`,
          value: `${Item.breadcrumb[0].breadcrumb} category:${obj}`,
          key: `${Item.breadcrumb[0].breadcrumb} category:${obj}`,
        };
      }
    });
    // debugger;
    let obj = {
      title: `${Item.breadcrumb[0].breadcrumb}  (${Item.breadcrumb.length})`,
      value: Item.breadcrumb[0].breadcrumb,
      key: Item.breadcrumb[0].breadcrumb,
      children: childrenobj,
    };
    return obj;
  });

  const tProps = {
    treeData,

    value: categori,
    onChange: filter,
    treeCheckable: true,

    showCheckedStrategy: SHOW_PARENT,
    placeholder: lang?.lang354,
    style: {
      width: "100%",
    },
  };
  return (
    <TreeSelect
      {...tProps}
      style={{
        width: 200,
      }}
    />
  );
};
export function FiltersForsort({
  filterarry,
  filteruser,
  setingAllOpenCategoris,
  setingfilterallUrgency,
  setlocationsort,
  setUserFilter,
  selectedstatus,
  clear,
  setDrawervisible,
  screnphunesize,
  openfilter
}) {
  const defoltlang = useContext(DataContext).lang;
  const lang = defoltlang?.lang;
  // const [locationvalue, setlocationvalue] = useState();

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
  const masof = useContext(DataContext).masof;

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
  const clearform = () => {
    clear();
    form.resetFields();
  };
  let userdefultvalue;
  if (filteruser) {
    userdefultvalue = filteruser;
  }

  return (
    <div className="filteroption">
    <div className="header_filter">
סינון לפי
      <button  onClick={clearform} className="clearbutton">
        נקה הכל
      </button></div>
      <Form form={form} name="filterform">
        <div className="selcts">
          סוג הפניות
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
                <div style={{ width: "90%",display: "flex",justifyContent: "space-between", alignItems: "center"}}>
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
                /></div>
              </Option>
              {/* בטיפול */}
              <Option key={"status3"} value={lang.lang174}>
              <div style={{ width: "90%",display: "flex",justifyContent: "space-between", alignItems: "center"}}>

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
                  /></div>
                  </Option>
              {/* בטיפול ספק חיצוני */}
              <Option key={"status4"} value={lang.lang175}>
              <div style={{ width: "90%",display: "flex",justifyContent: "space-between", alignItems: "center"}}>

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
                  /></div>
                  </Option>
              {/* סגור */}
              <Option key={"status5"} value={lang.lang176}>
              <div style={{ width: "90%",display: "flex",justifyContent: "space-between", alignItems: "center"}}>

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
                  /></div>
                  </Option>
              {/* נמחק */}
              <Option key={"status6"} value={lang.lang177}>
              <div style={{ width: "90%",display: "flex",justifyContent: "space-between", alignItems: "center"}}>

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
                  /></div>
                  </Option>
            </Select>
          </Form.Item>
        </div>
        <div className="selcts">
קטגוריות
        <Treesslescategoris
          data={filterarry.breadcrumb}
          AllOpenCategoris={AllOpenCategoris}
        />
        </div>

        <Form.Item name="filterallUrgency">
          <div className="selcts">
רמות דחיפות
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
        <div className="selcts">
מתחם - חדרים
          <Treesslesctlocation
            data={filterarry.locationName}
            locationfilter={locationfilter}
          />
          </div>
        </Form.Item>
        <Form.Item name="filterofuser">
          {/*  כל המשתמשים  */}
          <div className="selcts">
            משתמשים
            <Select
              showSearch
              placeholder={lang?.lang352}
              onChange={filterofuser}
              defaultValue={userdefultvalue}
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
            גורם מטפל
            <Select
              showSearch
              placeholder={lang?.lang358}
              // onChange={AllOpenCategoris}
            >
              <Option value={false}>{lang.lang358}</Option>
            </Select>
          </div>
        </Form.Item>
        <div className="btn_filter">
                <button
                  className="cancel"
                  onClick={() => {
                    screnphunesize?setDrawervisible(false):openfilter();
                   clearform()
                  }}
                >ביטול
                </button>
                <button
                  className="ok"
                  onClick={() => {
                    screnphunesize?setDrawervisible(false):openfilter();
                  }}
                >
              <FaFilter style={{marginLeft:"7px", marginBottom:"-4px"}}/> אישור
                </button>
                </div>

      </Form>
    </div>
  );
}
