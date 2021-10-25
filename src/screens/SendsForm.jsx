import React, { useContext, useState, useRef } from "react";
import { Contenersend, Contener } from "../styelscomponents/Forms";
import { Input, Select, Card } from "antd";
import DataContext from "../DataContext";
import { FiArrowRight } from "react-icons/fi";
import ReactToPrint from "react-to-print-advanced";
import Tableform from "../components/Tableform";
const { Option } = Select;
const { TextArea } = Input;
const SendsForm = () => {
  const defoltlang = useContext(DataContext).lang;

  document.body.style.backgroundColor = "white";
  const [text, settext] = useState();
  const [location, setlocation] = useState();
  const componentRef = useRef();
  const onFinish = () => {};
  const onChange = (value) => {
    setlocation(value);
  };
  const arryofcheckbox = [
    {
      Formid: 11111,
      cooment: "cccccc",
      date: "Mon Oct 25 2021",
      location: "lucy",
      username: "אביתר",
      Fromtask: [
        {
          task: " בדיקת הברזים שאינם מטפטפים, ברזי השירותים אינם קשים לסגירה עבור הילדים",
          status: true,
        },
        {
          task: "בדיקת תקינות צינור המים המוביל לניאגרה ובדיקה שאין נזילות",
          status: false,
        },
        { task: "בדיקת תקינות המצוף וידיות להורדת מים", status: false },
        { task: "בדיקת נזילות בצינור הניקוז", status: false },
        { task: "בדיקת תקינות האסלה", status: false },
        {
          task: "בדיקה וניקוי סיפונים במטבח ובשירותים+ בדיקת אטימות כיורי מטבח שאין נזילות",
          status: false,
        },
        { task: "בדיקה של פלורסנטים שרופים / נורות", status: false },
        { task: "בדיקה של סטרטרים או קיים", status: false },
        { task: "בדיקת הגנה לכל הפלורסנטים - שרוול/מגן מים", status: false },
        { task: "בדיקת תקינות השקעים ויזואלי", status: false },
        {
          task: "בדיקת מפצלים + כבלים שהינם מחוזקים בתעלה או מוצמדים לקירות",
          status: false,
        },
        {
          task: "בדיקת תקינות צילינדרים ושימון לפי הצורך - שימון לשונית אינטרקום בשער הראשי",
          status: false,
        },
        { task: "בדיקת מחזיר שמן הידראולי / גלגלגת", status: false },
        { task: "בדיקת תקינות מעצור דלת שרשרת/סטנדרטי", status: false },
        { task: "בדיקת תקינות מגן אצבעות", status: false },
        { task: "בדיקת תקינות ידיות", status: false },
        { task: "בדיקת צירי הדלתות", status: false },
        { task: "בדיקת שברים בזכוכית הדלת או בחלונות המבנה", status: false },
        {
          task: "ניקוי פילטרים + צינור ניקוז אינו סתום או מקופל",
          status: false,
        },
        {
          task: "התקנה או הורדה מדף / מתקני הגיינה / מתלים וכו",
          status: false,
        },
        { task: "תיקוני רהיט אם מקולקל", status: true },
        {
          task: "במידה ומאשר העבודה (גננת/סייעת) אינו נמצא - סמן כאן",
          status: false,
        },
      ],
    },
    {
      Formid: 33333,
      cooment: "cccccc",
      date: "Mon Oct 25 2021",
      location: "lucy",
      username: "אביתר",
      Fromtask: [
        {
          task: " בדיקת הברזים שאינם מטפטפים, ברזי השירותים אינם קשים לסגירה עבור הילדים",
          status: true,
        },
        {
          task: "בדיקת תקינות צינור המים המוביל לניאגרה ובדיקה שאין נזילות",
          status: false,
        },
        { task: "בדיקת תקינות המצוף וידיות להורדת מים", status: false },
        { task: "בדיקת נזילות בצינור הניקוז", status: false },
        { task: "בדיקת תקינות האסלה", status: false },
        {
          task: "בדיקה וניקוי סיפונים במטבח ובשירותים+ בדיקת אטימות כיורי מטבח שאין נזילות",
          status: false,
        },
        { task: "בדיקה של פלורסנטים שרופים / נורות", status: false },
        { task: "בדיקה של סטרטרים או קיים", status: false },
        { task: "בדיקת הגנה לכל הפלורסנטים - שרוול/מגן מים", status: false },
        { task: "בדיקת תקינות השקעים ויזואלי", status: false },
        {
          task: "בדיקת מפצלים + כבלים שהינם מחוזקים בתעלה או מוצמדים לקירות",
          status: false,
        },
        {
          task: "בדיקת תקינות צילינדרים ושימון לפי הצורך - שימון לשונית אינטרקום בשער הראשי",
          status: false,
        },
        { task: "בדיקת מחזיר שמן הידראולי / גלגלגת", status: false },
        { task: "בדיקת תקינות מעצור דלת שרשרת/סטנדרטי", status: false },
        { task: "בדיקת תקינות מגן אצבעות", status: false },
        { task: "בדיקת תקינות ידיות", status: false },
        { task: "בדיקת צירי הדלתות", status: false },
        { task: "בדיקת שברים בזכוכית הדלת או בחלונות המבנה", status: false },
        {
          task: "ניקוי פילטרים + צינור ניקוז אינו סתום או מקופל",
          status: false,
        },
        {
          task: "התקנה או הורדה מדף / מתקני הגיינה / מתלים וכו",
          status: false,
        },
        { task: "תיקוני רהיט אם מקולקל", status: true },
        {
          task: "במידה ומאשר העבודה (גננת/סייעת) אינו נמצא - סמן כאן",
          status: false,
        },
      ],
    },
  ];

  const arryfroms = [{ id: 1, name: "טופס בדיקה", allforms: arryofcheckbox }];
  const [forntoinspect, setforntoinspect] = useState(false);
  const [seefullform, setseefullform] = useState(false);
  const Seeform = (value) => {
    setseefullform(value);
  };
  const inspecttask = (value) => {
    console.log(value);
    setforntoinspect(value);
  };

  return (
    <Contenersend>
      {!forntoinspect ? (
        <div>
          <h1>טפסים</h1>
          <p> נא לבחור מתוך הטפסים:</p>

          {arryfroms.map((item, i) => {
            return (
              <div className="listofforms">
                <p
                  onClick={() => {
                    inspecttask(item);
                  }}
                >
                  {item.name}
                </p>{" "}
                - <p>{item.allforms.length} ביצועים</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <button
            className="gobacklistofforms"
            onClick={() => {
              setforntoinspect(false);
              Seeform(false);
            }}
          >
            <FiArrowRight />
            חזור לרשימת הטפסים
          </button>

          <h1>{forntoinspect.name}</h1>

          {!seefullform ? (
            <div>
              {forntoinspect.allforms
                ? forntoinspect.allforms.map((forms, i) => {
                    return (
                      <div
                        onClick={() => {
                          Seeform(forms);
                        }}
                      >
                        <Card bordered={false} key={i}>
                          {forms.Formid}
                          {forms.date}
                          {forms.location}
                          {forms.username}
                        </Card>
                      </div>
                    );
                  })
                : null}
            </div>
          ) : (
            <div>
              <button
                className="gobacklistofforms"
                onClick={() => {
                  Seeform(false);
                }}
              >
                <FiArrowRight />
                חזרה לביצועי טופס זה
              </button>
              <ReactToPrint
                trigger={() => (
                  <button>
                    הדפס
                    {/* <AiOutlineFilePdf /> */}
                  </button>
                )}
                content={() => componentRef.current}
              />
              <div ref={componentRef}>
                <Contener>
                  <Tableform seefullform={seefullform} ref={componentRef} />
                </Contener>
              </div>
            </div>
          )}
        </div>
      )}
    </Contenersend>
  );
};

export default SendsForm;
