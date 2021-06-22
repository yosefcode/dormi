import React, { useState } from "react";
import { CardStyeld, Contener } from "../styelscomponents/LocationStyeld";

import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Menu, Dropdown, Form, Input } from "antd";
import { FiChrome } from "react-icons/fi";

function Location() {
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
      <Menu.Item>הוספת חדר במתחם </Menu.Item>
      <Menu.Item>עריכת חדר במתחם</Menu.Item>
      <Menu.Item>מחיקה</Menu.Item>
    </Menu>
  );

  const menuoflocation = (
    <Menu>
      <Menu.Item>רשימת פניות בחדר זה </Menu.Item>
      <Menu.Item>עריכה</Menu.Item>
      <Menu.Item>מחיקה</Menu.Item>
      <Menu.Item>יצירת קוד QR</Menu.Item>
    </Menu>
  );

  let arryofcards = [
    {
      id: 1,
      projact: "חדר אוכל",
      alllocation: [
        { location: "חדר1", id: 1 },
        { location: "2חדר", id: 2 },
      ],
    },
    {
      id: 2,
      projact: "כפר סטודנטים",
      alllocation: [
        { location: "חדר1", id: 1 },
        { location: "2חדר", id: 2 },
      ],
    },
    {
      id: 2,
      projact: "2 סטודנטים",
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

export default Location;
