import React, { useState, useContext } from "react";
import { CardStyeld, Contener } from "../styelscomponents/LocationStyeld";

import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Menu, Dropdown, Form, Input } from "antd";
import { FiChrome } from "react-icons/fi";
import DataContext from "../DataContext";

function Categoris() {
  document.body.style.backgroundColor = "white";
  const data = useContext(DataContext);
  const changdata = useContext(DataContext).changdata;
  const defoltlang = useContext(DataContext).lang;
  const masof = useContext(DataContext).masof;
  const lang = defoltlang?.lang;

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
      <Menu.Item>{lang?.lang291} </Menu.Item>
      <Menu.Item>{lang?.lang294}</Menu.Item>
      <Menu.Item>{lang?.lang147}</Menu.Item>
    </Menu>
  );

  const menuoflocation = (
    <Menu>
      <Menu.Item>{lang?.lang235}</Menu.Item>
      <Menu.Item>{lang?.lang243}</Menu.Item>
      <Menu.Item>{lang?.lang147}</Menu.Item>
    </Menu>
  );

  let categoryarry = masof?.categorynames;

  return (
    <Contener>
      <div className="hader">
        <p>{lang?.lang211}</p>

        <button onClick={showModal}>{lang?.lang210}</button>
      </div>
      <div className="listofcards">
        {categoryarry
          ? categoryarry.map((el) => {
              return (
                <CardStyeld
                  hoverable
                  title={el.maincategoryname}
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
                    {el.subcategory ? (
                      el.subcategory.map((item) => {
                        return (
                          <div className="singellocation">
                            <div>{item.subname}</div>
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
                        <p className="noroms">{lang?.lang225} </p>
                      </div>
                    )}
                  </div>
                </CardStyeld>
              );
            })
          : null}
      </div>
      <ModalStyeld
        title={lang?.lang210}
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
          <p>{lang?.lang223}:</p>
          <Form.Item name="newproject">
            <Input />
          </Form.Item>
          <Form.Item>
            <button className="okbutton" type="primary" htmlType="submit">
              {lang?.lang290}
            </button>
          </Form.Item>
        </Form>
      </ModalStyeld>
    </Contener>
  );
}

export default Categoris;
