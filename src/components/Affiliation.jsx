import React, { useState } from "react";
import { message, Button, Space } from "antd";
import { Contener } from "../styelscomponents/AffiliatStayels";
import { BiCopy, BiWinkSmile } from "react-icons/bi";

const Affiliation = () => {
  const [link, setlink] = useState("https://www.dormi.co.il/trial/?r=6an417");
  const success = () => {
    message.success(`הלינק הועתק ${link}`);
  };
  return (
    <Contener>
      <h2 className="text-colerd">מרוצים מדורמי</h2>
      <p>
        בטוח אתם מכירים מנהל מוסד או מנהל אחזקה שבדיוק צריך אותנו. שתפו אותו
        בלינק הזה (חשוב לדעת - זהו לינק ייחודי רק לכם וכל מי שיפתח חשבון רק דרך
        הלינק הייחודי הזה אנחנו נדע שהוא הגיע דרככם)
      </p>

      <input placeholder={link} />

      <BiCopy
        className="iconBiCopy"
        onClick={() => {
          success();
          navigator.clipboard.writeText(link);
        }}
      />

      <p>
        ברגע שהוא יצטרף כלקוח בתשלום תקבלו מאיתנו שובר לארוחת בוקר זוגית מפנקת.
        זה הדרך שלנו להגיד לכם תודה!
      </p>
      <p className="text-colerd">
        {" "}
        אנחנו אוהבים אותך - תביא לנו לקוח איכותי כמוך <BiWinkSmile />
      </p>
    </Contener>
  );
};
export default Affiliation;
