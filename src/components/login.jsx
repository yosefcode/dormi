import React, { useState, useContext, useEffect } from "react";
import { PostToServer } from "../serveses";
import { Form, Input, Button } from "antd";
import QRCode from "qrcode.react";
import { Contener } from "../styelscomponents/Loginstyels";
import DataContext from "../DataContext";
import Cookies from "universal-cookie";
const Login = (props) => {
  const [fult, setfult] = useState(false);
  const [emailforcheackpass, setemailforcheackpass] = useState();
  const defoltlang = useContext(DataContext).lang;
  const changloginstatus = useContext(DataContext).changloginstatus;
  const changlang = useContext(DataContext).changlang;
  const login = useContext(DataContext).login;

  const lang = defoltlang?.lang;
  let ruter = "login";

  let email = "email";
  let pas = "pas";
  let notfound = "notfound";
  let bad = "bad";
  let program = "program";
  let captcha = "captcha";
  let language = 1;
  let obj = { status: { aout: false, info: "pas" }, language: 1 };
  const cookies = new Cookies();
  // cookies.remove("pas");
  // cookies.remove("email");
  // cookies.remove("aut");

  const [form] = Form.useForm();
  const loadProfile = () => {
    let getemailcookies = cookies.get("email");
    let getpascookies = cookies.get("pas");
    form.setFieldsValue({ email: getemailcookies });
    form.setFieldsValue({ pas: getpascookies });
  };
  useEffect(() => {
    loadProfile();

    if (cookies.get("aut")) {
      changloginstatus(true);
    }
  }, []);

  const date = new Date();
  const dateforminits = new Date();

  const newDate = new Date(date.setMonth(date.getMonth() + 6));
  const testDate = new Date(
    dateforminits.setMinutes(dateforminits.getMinutes() + 1)
  );

  const onFinish = async (values) => {
    console.log(values);
    //  let res = await PostToServer(ruter, values);
    // console.log(res);

    cookies.set("email", values.email, {
      path: "/",
      expires: newDate,
    });
    cookies.set("pas", values.pas, { path: "/", expires: newDate });
    cookies.set("aut", true, { path: "/", expires: testDate });

    defoltlang.langid = 3;

    changlang(defoltlang);

    changloginstatus(true);

    switch (obj.status.info) {
      case email:
        setfult(email);
        break;
      case pas:
        setfult(pas);
        break;
      case bad:
        setfult(bad);
    }

    console.log(fult);
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
          Forgetpass={Forgetpass}
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
            name="pas"
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
          <imag src="/images/manHead.png" className="avatar" alt="Image" />
          <div>
            <p>אין לכם עדיין חשבון בדורמי?</p>
            <p>
              {" "}
              <a href={"ddd"}>תלמדו איך עובדים עם ניהול אחזקה חכם</a>
            </p>
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
