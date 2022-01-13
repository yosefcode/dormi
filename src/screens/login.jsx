import React, { useState, useContext, useEffect, useRef } from "react";
import { PostToServer } from "../serveses";
import { Form, Input, Button } from "antd";
import QRCode from "qrcode.react";
import { Contener } from "../styelscomponents/Loginstyels";
import DataContext from "../DataContext";
import Cookies from "universal-cookie";
import { Loginfunction } from "../components/Loginfanction";

import { useHistory } from "react-router-dom";

const Login = () => {
  const [fult, setfult] = useState(false);
  const [emailforcheackpass, setemailforcheackpass] = useState();
  const defoltlang = useContext(DataContext).lang;
  const changloginstatus = useContext(DataContext).changloginstatus;
  const changlang = useContext(DataContext).changlang;
  const changmasof = useContext(DataContext).changmasof;
  const changeticketlist = useContext(DataContext).changeticketlist;
  const changedir = useContext(DataContext).changedir;
  const changuserlist = useContext(DataContext).changuserlist;
  const lang = defoltlang?.lang;

  // const [dir, setsir] = useState("tlr");
  const DirectionOfLang = (languigtype) => {
    switch (languigtype) {
      case 2:
        changedir("rtl");
        break;
      case 5:
        changedir("rtl");
        break;
      default:
        changedir("tlr");
    }
  };
  const cookies = new Cookies();
  // cookies.remove("pas");
  // cookies.remove("email");
  // cookies.remove("aut");

  const [form] = Form.useForm();

  let getemailcookies = cookies.get("email");
  let getpascookies = cookies.get("pas");
  const loadProfile = () => {
    form.setFieldsValue({ email: getemailcookies });
    form.setFieldsValue({ pass: getpascookies });
  };

  useEffect(() => {
    loadProfile();
  });

  const getallticts = async (value) => {
    let obj = {
      userid: value,
    };

    let res = await PostToServer("ticketlist", obj);

    changeticketlist(res);

    return true;
  };
  let history = useHistory();
  const [loadings, setloadings] = useState([]);
  const enterLoading = (index) => {
    setloadings((loadings) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return newLoadings;
    });
  };
  const onFinish = async (values) => {
    setfult(false);
    enterLoading(2);
    let res = await Loginfunction(values);

    if (res.error === "1") {
      setloadings([0]);

      setfult(res.message);
    } else {
      await getallticts(res.changloginstatus.userid);
      changmasof(res.changmasof);
      DirectionOfLang(res.changlang.langid);

      changloginstatus(res.changloginstatus);
      changlang(res.changlang);
      changuserlist(res.changuserlist);
    }
    setloadings([0]);
  };
  const [emailmassg, setemailmassg] = useState(false);
  const inputref = useRef();
  const Forgetpass = () => {
    setemailmassg(`סיסמאת איפוס נשלחה למייל ${inputref.current.props.value}`);

    setTimeout(() => {
      setemailmassg(false);
    }, 3000);
  };

  return (
    <Contener>
      <div className="hader">
        <svg
          width="105"
          height="26"
          viewBox="0 0 105 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.34147 0.777999L9.44647 0.810999C12.6365 0.810999 15.4415 1.966 17.8615 4.276C20.2815 6.564 21.4915 9.391 21.4915 12.757C21.4915 16.101 20.3035 18.972 17.9275 21.37C15.5735 23.768 12.7135 24.967 9.34747 24.967H3.30847C1.96647 24.967 1.13047 24.692 0.800473 24.142C0.536473 23.68 0.404473 22.976 0.404473 22.03V3.682C0.404473 3.154 0.415473 2.769 0.437473 2.527C0.481473 2.285 0.591473 1.999 0.767473 1.669C1.07547 1.075 1.93347 0.777999 3.34147 0.777999ZM9.44647 19.126C11.0305 19.126 12.4605 18.543 13.7365 17.377C15.0125 16.189 15.6505 14.704 15.6505 12.922C15.6505 11.14 15.0235 9.655 13.7695 8.467C12.5375 7.257 11.0855 6.652 9.41347 6.652H6.24547V19.126H9.44647ZM34.9918 0.513999C38.2478 0.513999 41.0748 1.691 43.4728 4.045C45.8708 6.399 47.0698 9.325 47.0698 12.823C47.0698 16.299 45.9258 19.269 43.6378 21.733C41.3498 24.175 38.5338 25.396 35.1898 25.396C31.8458 25.396 28.9968 24.186 26.6428 21.766C24.3108 19.346 23.1448 16.464 23.1448 13.12C23.1448 11.294 23.4748 9.589 24.1348 8.005C24.7948 6.399 25.6748 5.057 26.7748 3.979C27.8748 2.901 29.1398 2.054 30.5698 1.438C31.9998 0.821999 33.4738 0.513999 34.9918 0.513999ZM28.9858 12.955C28.9858 14.913 29.6128 16.508 30.8668 17.74C32.1428 18.95 33.5618 19.555 35.1238 19.555C36.6858 19.555 38.0938 18.961 39.3478 17.773C40.6018 16.585 41.2288 14.99 41.2288 12.988C41.2288 10.986 40.5908 9.38 39.3148 8.17C38.0608 6.96 36.6528 6.355 35.0908 6.355C33.5288 6.355 32.1208 6.971 30.8668 8.203C29.6128 9.413 28.9858 10.997 28.9858 12.955ZM67.7407 20.908C68.0707 21.7 68.2357 22.272 68.2357 22.624C68.2357 23.46 67.5537 24.164 66.1897 24.736C65.4857 25.044 64.9137 25.198 64.4737 25.198C64.0557 25.198 63.7037 25.099 63.4177 24.901C63.1537 24.681 62.9557 24.461 62.8237 24.241C62.6037 23.823 61.7457 21.832 60.2497 18.268L59.2267 18.334H55.0687V22.063C55.0687 22.569 55.0467 22.954 55.0027 23.218C54.9807 23.46 54.8817 23.746 54.7057 24.076C54.3977 24.67 53.5397 24.967 52.1317 24.967C50.5917 24.967 49.6897 24.56 49.4257 23.746C49.2937 23.372 49.2277 22.8 49.2277 22.03V3.715C49.2277 3.209 49.2387 2.835 49.2607 2.593C49.3047 2.329 49.4147 2.032 49.5907 1.702C49.8987 1.108 50.7567 0.810999 52.1647 0.810999H59.2927C61.2287 0.810999 63.1097 1.515 64.9357 2.923C65.8157 3.605 66.5417 4.529 67.1137 5.695C67.6857 6.861 67.9717 8.159 67.9717 9.589C67.9717 12.075 67.1467 14.121 65.4967 15.727C65.9807 16.893 66.7287 18.62 67.7407 20.908ZM55.0687 12.493H59.2927C59.9307 12.493 60.5687 12.251 61.2067 11.767C61.8447 11.283 62.1637 10.557 62.1637 9.589C62.1637 8.621 61.8447 7.895 61.2067 7.411C60.5687 6.905 59.9087 6.652 59.2267 6.652H55.0687V12.493ZM95.7531 1.735C95.9291 2.065 96.0281 2.362 96.0501 2.626C96.0941 2.89 96.1161 3.275 96.1161 3.781V22.096C96.1161 23.614 95.6981 24.505 94.8621 24.769C94.4441 24.901 93.9161 24.967 93.2781 24.967C92.6401 24.967 92.1341 24.912 91.7601 24.802C91.3861 24.692 91.1001 24.56 90.9021 24.406C90.7041 24.252 90.5501 24.032 90.4401 23.746C90.3301 23.372 90.2751 22.8 90.2751 22.03V10.975C89.7251 11.657 88.9221 12.746 87.8661 14.242C86.8101 15.716 86.1391 16.64 85.8531 17.014C85.5671 17.388 85.3691 17.652 85.2591 17.806C85.1491 17.938 84.8741 18.136 84.4341 18.4C84.0161 18.642 83.5541 18.763 83.0481 18.763C82.5641 18.763 82.1131 18.653 81.6951 18.433C81.2991 18.191 81.0131 17.96 80.8371 17.74L80.5731 17.377C80.1331 16.827 79.2641 15.661 77.9661 13.879C76.6681 12.075 75.9641 11.107 75.8541 10.975V22.096C75.8541 22.602 75.8321 22.987 75.7881 23.251C75.7661 23.493 75.6671 23.768 75.4911 24.076C75.1611 24.67 74.3031 24.967 72.9171 24.967C71.5751 24.967 70.7391 24.67 70.4091 24.076C70.2331 23.768 70.1231 23.482 70.0791 23.218C70.0571 22.954 70.0461 22.558 70.0461 22.03V3.715C70.0461 3.209 70.0571 2.835 70.0791 2.593C70.1231 2.329 70.2331 2.032 70.4091 1.702C70.7391 1.13 71.5971 0.843998 72.9831 0.843998C73.5771 0.843998 74.0831 0.920999 74.5011 1.075C74.9411 1.207 75.2271 1.35 75.3591 1.504L75.5571 1.702L83.0481 11.536C86.7881 6.586 89.2851 3.319 90.5391 1.735C90.9131 1.141 91.7931 0.843998 93.1791 0.843998C94.5871 0.843998 95.4451 1.141 95.7531 1.735ZM98.7599 3.715C98.7599 3.209 98.7709 2.835 98.7929 2.593C98.8369 2.329 98.9469 2.032 99.1229 1.702C99.4309 1.108 100.289 0.810999 101.697 0.810999C103.237 0.810999 104.15 1.218 104.436 2.032C104.546 2.406 104.601 2.978 104.601 3.748V22.096C104.601 22.624 104.579 23.009 104.535 23.251C104.513 23.493 104.414 23.779 104.238 24.109C103.93 24.703 103.072 25 101.664 25C100.124 25 99.2219 24.582 98.9579 23.746C98.8259 23.394 98.7599 22.833 98.7599 22.063V3.715Z"
            fill="#E4EDED"
          />
        </svg>
      </div>
      <div className="wrapper">
        <img src="/images/loginimag.png" alt="img" className="loginimag" />
        <div className="form">
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            form={form}
          >
            <Form.Item
              label={lang?.lang307}
              name="email"
              rules={[
                {
                  required: true,
                  message: "הכנס מייל",
                },
              ]}
            >
              <Input ref={inputref} />
            </Form.Item>

            <Form.Item
              label="סיסמה"
              name="pass"
              rules={[
                {
                  required: true,
                  message: "הכנס סיסמה",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <div className="buttonwraper">
              <Button
                className="subbutton"
                type="primary"
                htmlType="submit"
                loading={loadings[2]}
              >
                הכנס
              </Button>
            </div>
          </Form>

          <button className="passbutoon" onClick={Forgetpass}>
            שחזר סיסמה
          </button>
          {fult ? <div className="errmaseg">{fult}</div> : null}

          {emailmassg ? <div className="emailmassg">{emailmassg}</div> : null}
        </div>
      </div>
      <div className="navlogin">
        <div className="bg-info">
          <p>אין לכם עדיין חשבון בדורמי?</p>{" "}
          <a href="http://dormi.co.il/">תלמדו איך עובדים עם ניהול אחזקה חכם</a>
        </div>
        <div className="bg-qr">
          <p>מעדיפים להיכנס עם מכשיר נייד? סרקו את הקוד:</p>

          <QRCode
            className="qrcode"
            value="https://www.dormi.co.il/users"
            size={250}
          />
        </div>
      </div>
    </Contener>
  );
};

export default Login;
