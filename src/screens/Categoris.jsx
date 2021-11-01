import React, { useState, useContext, useEffect } from "react";
import { CardStyeld, Contener } from "../styelscomponents/LocationStyeld";

import { ModalStyeld } from "../styelscomponents/modaldtyeld";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Menu, Dropdown, Form, Input, Badge } from "antd";
import { Arryoficons } from "../Icons";
import { useHistory } from "react-router-dom";

import DataContext from "../DataContext";
function Categoris() {
  const { SubMenu } = Menu;
  document.body.style.backgroundColor = "white";
  let history = useHistory();

  const defoltlang = useContext(DataContext).lang;

  const filterserch = useContext(DataContext).filterserch;
  const chanfefilter = useContext(DataContext).chanfefilter;
  const ticketlist = useContext(DataContext).ticketlist;

  const masof = useContext(DataContext).masof;
  const lang = defoltlang?.lang;
  let categoryarry = masof.categorynames;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [chusencategori, setchusencategori] = useState();
  const [firstlode, setlfirstlode] = useState();
  const [localarry, setlocalarry] = useState();
  const [chingeurgency, setchingeurgency] = useState(false);
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

  const chuseicon = (value) => {
    let requst = categoryarry.findIndex(
      (Item) => Item.maincategoryname === chusencategori
    );
    categoryarry[requst].icon = value;
    setchingeurgency(!chingeurgency);

    setlocalarry(categoryarry);
  };

  useEffect(() => {
    if (!firstlode) {
      setlocalarry(categoryarry);
      setlfirstlode(true);
    }
  }, [chingeurgency]);
  const menuofproject = (
    <Menu>
      <Menu.Item>{lang?.lang291} </Menu.Item>
      <Menu.Item>{lang?.lang294}</Menu.Item>
      <Menu.Item>{lang?.lang147}</Menu.Item>
      <SubMenu key="sub1" title="הוספת איכון" dir="tlr">
        {Arryoficons?.map((ic) => {
          return (
            <Menu.Item key={ic.iconid}>
              <span
                onClick={() => {
                  chuseicon(ic.iconname);
                }}
              >
                <ic.icon />
              </span>
            </Menu.Item>
          );
        })}
      </SubMenu>
    </Menu>
  );

  const gotolistoftask = (value) => {
    filterserch.categoris = value;

    console.log(filterserch);
    chanfefilter(filterserch);
    history.push("/ListOfreq");
  };
  return (
    <Contener>
      <div className="hader">
        <p>{lang?.lang104}</p>

        <button onClick={showModal}>{lang?.lang210}</button>
      </div>
      <div className="listofcards">
        {localarry
          ? localarry.map((el) => {
              let finicon = Arryoficons.find((ic) => {
                if (el.icon === ic.iconname) {
                  return ic;
                }
              });
              let icon;

              if (finicon?.icon) {
                icon = finicon.icon;
              } else {
                icon = false;
              }
              //

              return (
                <div>
                  <CardStyeld
                    hoverable
                    title={el.maincategoryname}
                    extra={
                      <Dropdown
                        overlay={menuofproject}
                        trigger={["click"]}
                        onClick={() => {
                          setchusencategori(el.maincategoryname);
                        }}
                      >
                        <HiOutlineDotsHorizontal />
                      </Dropdown>
                    }
                  >
                    <div>
                      <finicon.icon className="categoriicon" />
                    </div>
                    <div className="listodors">
                      {el.subcategory ? (
                        el.subcategory.map((item) => {
                          let cunter = 0;

                          ticketlist.map((tiket) => {
                            if (
                              tiket.breadcrumb === el.maincategoryname &&
                              tiket.categoryname === item.subname
                            ) {
                              cunter = cunter + 1;
                            }
                          });

                          const menuoflocation = (
                            <Menu>
                              {cunter > 0 ? (
                                <Menu.Item
                                  onClick={() => {
                                    let chusentask = `${el.maincategoryname} category:${item.subname}`;
                                    gotolistoftask(chusentask);
                                  }}
                                >
                                  {lang?.lang300}
                                </Menu.Item>
                              ) : null}
                              <Menu.Item>{lang?.lang243}</Menu.Item>
                              <Menu.Item>{lang?.lang147}</Menu.Item>
                            </Menu>
                          );
                          return (
                            <div className="singellocation">
                              <div>
                                {item.subname}
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
                          <p className="noroms">{lang?.lang225} </p>
                        </div>
                      )}
                    </div>
                  </CardStyeld>
                </div>
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
