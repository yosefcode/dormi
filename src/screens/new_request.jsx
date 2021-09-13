import React, { useState, useContext, useEffect } from "react";
import DataContext from "../DataContext";

import { Problemcontener } from "../styelscomponents/NewRequest";

import { PoweroffOutlined } from "@ant-design/icons";

import { Arryoficons } from "../Icons";
import Formtask from "../components/Formtask";

const Nwerequest = ({ Temmembertask }) => {
  document.body.style.backgroundColor = "#3286F9";

  const defoltlang = useContext(DataContext).lang;
  const masof = useContext(DataContext).masof;
  const lang = defoltlang?.lang;

  const [typeofreq, settypeofreq] = useState();
  const [typs, settyps] = useState(true);

  let categorynames = masof?.categorynames;

  // כפתור טעינה
  const [subcategory, setsubcategory] = useState();
  const chosentyp = (value) => {
    settyps(false);
    settypeofreq({ maincategory: value.id });
    setsubcategory(value.subcategory);
  };

  const Goback = () => {
    settyps(true);
  };
  return (
    <div>
      {/* <div> */}

      <div>
        {typs ? (
          <Problemcontener>
            <img src="/images/man.png" className="avatar" alt="Image" />
            <div className="icondisply">
              <p id="hadep">{lang?.lang337}</p>
              <p>{lang?.lang338}</p>
              <div>
                <div className="listofproblom">
                  {categorynames
                    ? categorynames.map((el, index) => {
                        let finicon = Arryoficons.find((ic) => {
                          if (el.icon === ic.iconname) {
                            return ic;
                          }
                        });
                        let icon;

                        if (finicon?.icon) {
                          icon = finicon.icon;
                        } else {
                          icon = false;
                        }

                        return (
                          <div className="problome" key={index}>
                            <p
                              onClick={() => {
                                chosentyp(el);
                              }}
                              className="iconproblem"
                            >
                              {icon ? <finicon.icon /> : <PoweroffOutlined />}
                            </p>
                            <p className="uniqueproblem">
                              {el.maincategoryname}
                            </p>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          </Problemcontener>
        ) : (
          <Formtask
            Typeofreq={typeofreq}
            Goback={Goback}
            Subcategory={subcategory}
            Temmembertask={Temmembertask}
          />
        )}
      </div>
    </div>
  );
};

export default Nwerequest;
