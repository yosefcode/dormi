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
