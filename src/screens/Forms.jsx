import React, { useContext, useRef, useState } from "react";
import { Contener } from "../styelscomponents/Forms";
import { Input, Select } from "antd";
import DataContext from "../DataContext";

const { Option } = Select;
const { TextArea } = Input;
const Forms = () => {
  const checkboxref = useRef([]);
  const defoltlang = useContext(DataContext).lang;

  document.body.style.backgroundColor = "white";
  const [text, settext] = useState();
  const [location, setlocation] = useState();

  const onFinish = () => {
    console.log("Success:", checkboxref.current);

    let arryfrosend = [];
    checkboxref.current.map((item, i) => {
      arryfrosend.push({
        task: item.defaultValue,
        status: checkboxref.current[i].checked,
      });
    });

    let obj = {
      date: new Date().toDateString(),
      Formid: 11111,
      username: "אביתר",
      location: location,
      Formtask: arryfrosend,
      cooment: text,
    };
    console.log("Success:", obj);
  };
  const onChange = (value) => {
    setlocation(value);
  };

  const arryofcheckbox = [
    {
      value: 1,
      label:
        " בדיקת הברזים שאינם מטפטפים, ברזי השירותים אינם קשים לסגירה עבור הילדים",
    },
    {
      value: 2,
      label: "בדיקת תקינות צינור המים המוביל לניאגרה ובדיקה שאין נזילות",
    },
    {
      value: 3,
      label: "בדיקת תקינות המצוף וידיות להורדת מים",
    },
    {
      value: 4,
      label: "בדיקת נזילות בצינור הניקוז",
    },
    {
      value: 5,
      label: "בדיקת תקינות האסלה",
    },
    {
      value: 6,
      label:
        "בדיקה וניקוי סיפונים במטבח ובשירותים+ בדיקת אטימות כיורי מטבח שאין נזילות",
    },
    {
      value: 7,
      label: "בדיקה של פלורסנטים שרופים / נורות",
    },
    {
      value: 8,
      label: "בדיקה של סטרטרים או קיים",
    },
    {
      value: 9,
      label: "בדיקת הגנה לכל הפלורסנטים - שרוול/מגן מים",
    },
    {
      value: 10,
      label: "בדיקת תקינות השקעים ויזואלי",
    },
    {
      value: 11,
      label: "בדיקת מפצלים + כבלים שהינם מחוזקים בתעלה או מוצמדים לקירות",
    },
    {
      value: 12,
      label:
        "בדיקת תקינות צילינדרים ושימון לפי הצורך - שימון לשונית אינטרקום בשער הראשי",
    },
    {
      value: 13,
      label: "בדיקת מחזיר שמן הידראולי / גלגלגת",
    },
    {
      value: 14,
      label: "בדיקת תקינות מעצור דלת שרשרת/סטנדרטי",
    },
    {
      value: 15,
      label: "בדיקת תקינות מגן אצבעות",
    },
    {
      value: 16,
      label: "בדיקת תקינות ידיות",
    },
    {
      value: 17,
      label: "בדיקת צירי הדלתות",
    },
    {
      value: 18,
      label: "בדיקת שברים בזכוכית הדלת או בחלונות המבנה",
    },
    {
      value: 19,
      label: "ניקוי פילטרים + צינור ניקוז אינו סתום או מקופל",
    },
    {
      value: 20,
      label: "התקנה או הורדה מדף / מתקני הגיינה / מתלים וכו",
    },
    {
      value: 21,
      label: "תיקוני רהיט אם מקולקל",
    },
    {
      value: 22,
      label: "במידה ומאשר העבודה (גננת/סייעת) אינו נמצא - סמן כאן",
    },
  ];

  const checkall = () => {
    for (let i = 0; arryofcheckbox.length > i; i++) {
      checkboxref.current[i].checked = true;
    }
  };

  const clearall = () => {
    for (let i = 0; arryofcheckbox.length > i; i++) {
      checkboxref.current[i].checked = false;
    }
  };

  return (
    <Contener>
      <div className="hader">
        <button className="haderbuuton" onClick={checkall}>
          סמן הכל
        </button>
        <button className="haderbuuton" onClick={clearall}>
          נקה הכל
        </button>
      </div>
      <Select showSearch placeholder="בחר מיקום " onChange={onChange}>
        <Option value="jack">חנות</Option>
        <Option value="lucy">חלפ</Option>
      </Select>
      ,
      <ol>
        {arryofcheckbox.map((item, i) => {
          return (
            <div className="radio">
              <li>
                <p>{item.label}</p>
                <div className="checkbox">
                  <input
                    // onChange={closetask}
                    value={item.label}
                    type="checkbox"
                    id="only my"
                    name="tasktosee"
                    className="closecheckboox"
                    ref={(el) => (checkboxref.current[i] = el)}
                  />
                  {item.value === 22 ? (
                    <p className="checklable">מאשר עבודה אינו נמצא</p>
                  ) : (
                    <p className="checklable">בוצע</p>
                  )}
                </div>
              </li>
            </div>
          );
        })}
        <li>
          <p> הערות</p>
        </li>
        <TextArea
          rows={4}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
      </ol>
      <button className="buttonsubmit" onClick={onFinish}>
        שלח
      </button>
    </Contener>
  );
};

export default Forms;
