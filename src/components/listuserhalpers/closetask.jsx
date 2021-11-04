import React, { useContext, useState } from "react";
import DataContext from "../../DataContext";
export const Closetask = ({
  data,
  opendrwor,
  cancelClosep,
  cancelquickfunc,
  canceloperition,
  clerallusers,
  chuseallusers,
}) => {
  let text;
  const defoltlang = useContext(DataContext).lang;
  let lang = defoltlang;
  // switch (cancelquickfunc.type) {
  //   case "close":
  //     text = "נמחקו";
  //     break;
  //   case "pending":
  //     text = "שונה ל -בטיפול";

  //     break;
  //   case "open":
  //     text = "סומנו כחדשות";

  //     break;
  //   case "forward":
  //     text = "הופנו לאיש צוות";

  //     break;
  //   default:
  //     break;
  // }
  const allusers = () => {
    chuseallusers();
  };
  const clearall = () => {
    clerallusers();
  };
  return (
    <div className="Closepopup">
      <div>
        {data > 0 ? (
          <div className="Closepopup-numbertasks">
            <div> {data} נבחרו </div>
            {/* {!cancelquickfunc.status ? (
              <div> {data} נבחרו </div>
            ) : (
              <div>
                <img src="/images/vicon.svg" alt="v" /> {data} פניות {text}
              </div>
            )} */}
          </div>
        ) : (
          <div>בחר פניות</div>
        )}
      </div>
      {/* {data > 0 && !cancelquickfunc.status ? (
        <button className="cancelClosep" onClick={cancelClosep}>
          בטל
        
        </button>
      ) : null} */}
      {/* {!cancelquickfunc.status ? ( */}
      <button className="Closepopupsubmit" onClick={opendrwor}>
        <img src="images/lightning.svg" alt="lightning" />
        פעולה מהירה
      </button>

      {/* ) : ( */}
      <button className="cancelClosep" onClick={allusers}>
        בחר את כל המשתמשים
      </button>
      <button className="cancelClosep" onClick={clearall}>
        בטל בחירה
      </button>
      {/* )} */}
    </div>
  );
};

export const ListtaskforEdit = ({ action, close }) => {
  const defoltlang = useContext(DataContext).lang;
  const lang = defoltlang?.lang;
  const onfinish = (type, value) => {
    action(type, value);
  };
  const onclose = (type, value) => {
    close();
  };
  return (
    <div className="userQuickclosebuuton">
      <button
        className="Quickclosebuutonup"
        onClick={() => {
          onfinish("edit", null);
        }}
      >
        <img src="/images/pen.svg" alt="icon" /> {lang?.lang243}
      </button>

      <button
        className="Quickclosebuuton"
        onClick={() => {
          onfinish("message", null);
        }}
      >
        <img src="/images/bubble.svg" alt="icon" /> {lang?.lang263}
      </button>

      <button className="Quickclosebuutdown">
        <img src="/images/trash.svg" alt="icon" /> {lang?.lang147}
      </button>
      <br />
      <button className="Quickclosebuutdownclose" onClick={onclose}>
        {lang?.lang251}
      </button>
    </div>
  );
};
export const ListtaskforEditquik = ({ action, close }) => {
  const defoltlang = useContext(DataContext).lang;
  const lang = defoltlang?.lang;
  const onfinish = (type, value) => {
    action(type, value);
    close();
  };

  return (
    <div className="userQuickclosebuuton">
      <button
        className="Quickclosebuutonup"
        onClick={() => {
          onfinish("edit", null);
        }}
      >
        <img src="/images/pen.svg" alt="icon" /> {lang?.lang243}
      </button>

      <button
        className="Quickclosebuuton"
        onClick={() => {
          onfinish("message", null);
        }}
      >
        <img src="/images/bubble.svg" alt="icon" /> {lang?.lang263}
      </button>

      <button className="Quickclosebuutdown">
        <img src="/images/trash.svg" alt="icon" /> {lang?.lang147}
      </button>
      <br />
    </div>
  );
};
