import React, { useState, useContext } from "react";
import DataContext from "../DataContext";

import { Problemcontener } from "../styelscomponents/NewRequest";

import { PoweroffOutlined } from "@ant-design/icons";

import { Arryoficons } from "../Icons";
import Formtask from "../components/Formtask";

const Nwerequest = ({ Temmembertask }) => {
  document.body.style.backgroundColor = "white";
  const defoltlang = useContext(DataContext).lang;
  const masof = useContext(DataContext).masof;
  const lang = defoltlang?.lang;

  const [typeofreq, settypeofreq] = useState();
  const [typs, settyps] = useState(true);

  let categorynames = masof?.categorynames;

  // כפתור טעינה

  const chosentyp = (value) => {
    settyps(false);
    settypeofreq(value);
  };
  const topFunction = () => {
    window.scrollTo(0, 0);
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
            <div className="icondisply">
              <div id="hadep">{lang?.lang337}</div>
              <div style={{fontSize:"1.6rem",fontWeight:"400"}}>{lang?.lang338}</div>
              <div>
                <div className="wrapper">

                  {categorynames
                    ? categorynames.map((el, index) => {
                        let finicon = Arryoficons.find((ic) => {
                          // if (el.icon === ic.iconname) {
                          if (el.id === ic.iconid) {
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
                          <div
                            className="item"
                            key={index}
                            onClick={() => {
                              chosentyp(el);
                              topFunction()
                            }}
                          >
                            <div className="iconproblem">
                              {/* <img
                                src={icon}
                                alt="icon"
                                style={{ width: "50px", height: "50px" }}
                              /> */}
                              {/* {icon ? <finicon.icon /> : <PoweroffOutlined />} */}
                              {icon ? <img src={icon} alt= ""                         
       style={{ height:"20vw" }}/> 
     : <PoweroffOutlined        style={{ width: "25px", marginLeft:"10px" }}/> }

                            </div>
                            <div className="uniqueproblem">
                              {el.maincategoryname}
                            </div>
                          </div>
                        );
                      })
                    : null}
                  <div class="space"></div>
                </div>
              </div>
            </div>
          </Problemcontener>
        ) : (
          <Formtask
            Typeofreq={typeofreq}
            Goback={Goback}
            Temmembertask={Temmembertask}
            topFunction={topFunction}
          />
        )}
      </div>
    </div>
  );
};

export default Nwerequest;
