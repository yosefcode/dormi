import React, { useState } from "react";
import { Cardstyeld, Contener } from "../styelscomponents/UsersStyeld";
import { Input, Space } from "antd";
function Users() {
  document.body.style.backgroundColor = "white";
  const onSearch = (e) => console.log(e.target.value);
  return (
    <Contener>
      <div className="haderflex">
        {/* <span className="span_buttons"> */}
        <Input
          placeholder="חיפוש משתמש"
          onChange={onSearch}
          className="serch"
        />
        {/* </div> */}
        {/* <span className="span_buttons"> */}
        <button className="sendmail"> שליחת הזמנה למשתמשים</button>
        {/* </span> */}
        {/* < className="span_buttons"> */}
        <button className="adduser">הוספת משתמש חדש </button>
      </div>
      <Cardstyeld>
        <span>כרטיס לקוח</span>
        <span>סיווג</span>
        <span>מייל</span>
        <span>מספר פניות</span>
      </Cardstyeld>
      <Cardstyeld>
        <span>כרטיס לקוח</span>
        <span>סיווג</span>
        <span>מייל</span>
        <span>מספר פניות</span>
      </Cardstyeld>
    </Contener>
  );
}

export default Users;
