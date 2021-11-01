import React, { useState, useContext } from "react";
import { CardStyeld, Contener } from "../styelscomponents/LocationStyeld";

import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Menu, Dropdown, Form, Input, Badge } from "antd";
import { useHistory } from "react-router-dom";

import DataContext from "../DataContext";

function Location() {
  document.body.style.backgroundColor = "white";
  let history = useHistory();
  const filterserch = useContext(DataContext).filterserch;
  const chanfefilter = useContext(DataContext).chanfefilter;
  const defoltlang = useContext(DataContext).lang;
  const ticketlist = useContext(DataContext).ticketlist;

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
      <Menu.Item>{lang?.lang213} </Menu.Item>
      <Menu.Item>{lang?.lang212}</Menu.Item>
      <Menu.Item>{lang?.lang147}</Menu.Item>
    </Menu>
  );

  let locationarry = masof?.locations;

  const gotolistoftask = (value) => {
    filterserch.location = value;

    console.log(filterserch);
    chanfefilter(filterserch);
    history.push("/ListOfreq");
  };

  return (
    <Contener>
      <div className="hader">
        <p>{lang?.lang211}</p>

        <button onClick={showModal}>{lang?.lang210}</button>
      </div>
      <div className="listofcards">
        {locationarry
          ? locationarry.map((el) => {
              return (
                <CardStyeld
                  hoverable
                  title={el.locationname}
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
                    {el.rooms ? (
                      el.rooms.map((item) => {
                        let cunter = 0;
                        ticketlist.map((tiket) => {
                          if (
                            tiket.locationName === el.locationname &&
                            tiket.roomName === item.roomname
                          ) {
                            cunter = cunter + 1;
                          }
                        });

                        const menuoflocation = (
                          <Menu>
                            {cunter > 0 ? (
                              <Menu.Item
                                onClick={() => {
                                  let chusentask = `${el.locationame} room:${item.roomname}`;
                                  gotolistoftask(chusentask);
                                }}
                              >
                                {lang?.lang235}{" "}
                              </Menu.Item>
                            ) : null}
                            <Menu.Item>{lang?.lang243}</Menu.Item>
                            <Menu.Item>{lang?.lang147}</Menu.Item>

                            <Menu.Item>{lang?.lang359}</Menu.Item>
                          </Menu>
                        );
                        return (
                          <div className="singellocation">
                            <div>
                              {item.roomname}
                              {cunter > 0 ? (
                                <Badge
                                  dir="tlr"
                                  overflowCount={999}
                                  count={cunter}
                                  style={{
                                    backgroundColor: "#EBBE74",
                                    color: "black",
                                    fontsize: "16px",
                                  }}
                                />
                              ) : null}
                            </div>
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
                        <p className="noroms">{lang?.lang225}</p>
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
          <p>:{lang?.lang223}</p>
          <Form.Item name="newproject">
            <Input />
          </Form.Item>
          <Form.Item>
            <button className="okbutton" type="primary" htmlType="submit">
              {lang?.lang156}
            </button>
          </Form.Item>
        </Form>
      </ModalStyeld>
    </Contener>
  );
}

export default Location;
