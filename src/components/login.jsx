import React, { useState, useContext, useEffect } from "react";
import { PostToServer } from "../serveses";
import { Form, Input, Button } from "antd";
import QRCode from "qrcode.react";
import { Contener } from "../styelscomponents/Loginstyels";
import DataContext from "../DataContext";
import Cookies from "universal-cookie";
const Login = (props) => {
  document.body.style.backgroundColor = "white";

  const [fult, setfult] = useState(false);
  const [emailforcheackpass, setemailforcheackpass] = useState();
  const defoltlang = useContext(DataContext).lang;
  const changloginstatus = useContext(DataContext).changloginstatus;
  const changlang = useContext(DataContext).changlang;
  const changmasof = useContext(DataContext).changmasof;
  const login = useContext(DataContext).login;

  const lang = defoltlang?.lang;

  let email = "The user does not exist in the system";
  let pas = "The password is incorrect";
  let notfound = "notfound";
  let bad = "bad";
  let program = "program";
  let captcha = "captcha";
  let language = 1;
  // let obj = { status: { aout: false, info: "pas" }, language: 1 };
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

  const Loginfunction = async (values) => {
    let ruter = "login";
    let res = await PostToServer(ruter, values);
    console.log("res", res);
    if (res.error === "1") {
      switch (res.message) {
        case email:
          setfult(email);
          break;
        case pas:
          setfult(pas);
          break;
        case bad:
          setfult(bad);
      }
    } else if (res.langid) {
      let ruteruserid = "masof";
      let value = { userid: res.userid };
      let masof = await PostToServer(ruteruserid, value);
      changmasof(masof);
      console.log(masof);
      cookies.set("email", values.email, {
        path: "/",
      });
      cookies.set("pas", values.pass, { path: "/" });

      cookies.set("aut", true, { path: "/", expires: testDate });

      let langruter = "lang";
      let langid = { lang: res.langid };
      let reslang = await PostToServer(langruter, langid);

      let objlang = { lang: reslang, langid: res.langid };

      changlang(objlang);
      let logde = { logde: true, levelid: res.levelid };

      changloginstatus(logde);
    }
  };
  useEffect(() => {
    loadProfile();

    if (cookies.get("aut")) {
      let values = {
        email: getemailcookies,
        pass: getpascookies,
      };

      Loginfunction(values);
    }
  }, []);

  const date = new Date();
  const dateforminits = new Date();

  const newDate = new Date(date.setMonth(date.getMonth() + 6));
  const testDate = new Date(
    dateforminits.setMinutes(dateforminits.getMinutes() + 1)
  );

  const onFinish = async (values) => {
    setfult(" ");
    Loginfunction(values);
  };
  const Forgetpass = () => {
    console.log(emailforcheackpass);
  };

  return (
    <Contener>
      <div>
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
            <Input
              onChange={(e) => {
                let x = e.target.value;

                setemailforcheackpass(x);
              }}
            />
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

          <Form.Item>
            <Button type="primary" htmlType="submit">
              הכנס
            </Button>
            <button className="passbutoon" onClick={Forgetpass}>
              שחזר סיסמה
            </button>
          </Form.Item>
        </Form>

        {fult ? <div>{fult}</div> : null}
      </div>
      <div className="info">
        <div className="bg-info">
          <imag src="images/manHead.png" className="avatar" alt="Image" />
          <div>
            <h2>?אין לכם עדיין חשבון בדורמי</h2>{" "}
            <a href="http://dormi.co.il/">
              תלמדו איך עובדים עם ניהול אחזקה חכם
            </a>
          </div>
        </div>
        <div className="bg-qr">
          <h4>מעדיפים להיכנס עם מכשיר נייד? סרקו את הקוד:</h4>

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
