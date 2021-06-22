import React, { useState } from "react";
import { CardStyeld, Contener } from "../styelscomponents/LocationStyeld";

import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Menu, Dropdown, Form, Input } from "antd";
import { FiChrome } from "react-icons/fi";

function Categoris() {
  document.body.style.backgroundColor = "white";

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const menuofproject = (
    <Menu>
      <Menu.Item>הוספת קטגוריה משנית </Menu.Item>
      <Menu.Item>עריכת שם קטגוריה</Menu.Item>
      <Menu.Item>מחיקה</Menu.Item>
    </Menu>
  );

  const menuoflocation = (
    <Menu>
      <Menu.Item>רשימת פניות בחדר זה </Menu.Item>
      <Menu.Item>עריכה</Menu.Item>
      <Menu.Item>מחיקה</Menu.Item>
    </Menu>
  );

  let arryofcards = [
    {
      id: 1,
      projact: ",תאורה",
      alllocation: [
        { location: "החלפת נורה", id: 1 },
        { location: "מנורה", id: 2 },
      ],
    },
    {
      id: 2,
      projact: "חשמל",
      alllocation: [
        { location: "מיזוג", id: 1 },
        { location: "מתג תקול", id: 2 },
      ],
    },
    {
      id: 2,
      projact: "מכונת חלב",
    },
  ];
  return (
    <Contener>
      <div className="hader">
        <p>מתחמים וחדרים</p>

        <button onClick={showModal}>הוספת מתחם</button>
      </div>
      <div className="listofcards">
        {arryofcards
          ? arryofcards.map((el) => {
              return (
                <CardStyeld
                  hoverable
                  title={el.projact}
                  extra={
                    <Dropdown
                      overlay={menuofproject}
                      trigger={["click"]}
                      // icon={}
                    >
                      <HiOutlineDotsHorizontal />
                    </Dropdown>
                  }
                >
                  <div className="listodors">
                    {el.alllocation ? (
                      el.alllocation.map((item) => {
                        return (
                          <div className="singellocation">
                            <div>{item.location}</div>
                            <div>
                              <Dropdown
                                overlay={menuoflocation}
                                trigger={["click"]}
                                // icon={
                                //
                                // }
                              >
                                <HiOutlineDotsHorizontal className="internaldots" />
                              </Dropdown>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div>
                        <p className="noroms">אין חדרים במתחם </p>
                      </div>
                    )}
                  </div>
                </CardStyeld>
              );
            })
          : null}
      </div>
      <ModalStyeld
        title="הוספת מתחם"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <p>:שם המתחם</p>
          <Form.Item name="newproject">
            <Input />
          </Form.Item>
          <Form.Item>
            <button className="okbutton" type="primary" htmlType="submit">
              שמור
            </button>
          </Form.Item>
        </Form>
      </ModalStyeld>
    </Contener>
  );
}

export default Categoris;
