import React, { useState, useContext } from "react";
import { Cardstyeld, Contener } from "../styelscomponents/UsersStyeld";
import { Input, Space } from "antd";
import DataContext from "../DataContext";
import { Link } from "react-router-dom";

function Users() {
  const data = useContext(DataContext);
  const changdata = useContext(DataContext).changdata;
  const defoltlang = useContext(DataContext).lang;

  const lang = defoltlang?.lang;

  document.body.style.backgroundColor = "white";
  const onSearch = (e) => console.log(e.target.value);
  return (
    <Contener>
      <div className="haderflex">
        {/* <span className="span_buttons"> */}
        <h2>{lang?.lang102}</h2>
        <Input
          placeholder={lang?.lang248}
          onChange={onSearch}
          className="serch"
        />

        <Link className="sendmail" to="/SendMassege">
          שליחת הזמנה למשתמשים
        </Link>

        <Link className="adduser" to="/Adduser">
          {lang?.lang244}{" "}
        </Link>
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
