import { PostToServer } from "../serveses";

import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Loginfunction = async (value) => {
  const dateforminits = new Date();
  const testDate = new Date(
    dateforminits.setMinutes(dateforminits.getMinutes() + 10)
  );
  let uservalue = {
    email: value.email.replace(/[<>${}]/g, "danger$&"),
    pass: value.pass.replace(/[<>${}]/g, "danger$&"),
  };
  let ruter = "login";
  let res = await PostToServer(ruter, uservalue);
  //   console.log("res", res);

  let myPromis = new Promise(async (resolve, reject) => {
    if (res.error === "1") {
      resolve(res);
    } else if (res.langid) {
      let ruteruserid = "masof";
      let userid = { userid: res.userid };

      let masof = await PostToServer(ruteruserid, userid);

      // changmasof(masof);
      console.log("masof", masof);
      cookies.set("email", uservalue.email, {
        path: "/",
      });
      cookies.set("pas", uservalue.pass, { path: "/" });

      cookies.set("aut", true, { path: "/", expires: testDate });

      let langruter = "lang";
      let langid = { lang: res.langid };
      let reslang = await PostToServer(langruter, langid);

      let objlang = { lang: reslang, langid: res.langid };

      // changlang(objlang);
      let logde = { logde: true, ...res };

      // changloginstatus(logde);
      let resulotloginfunction = {
        changloginstatus: logde,
        changlang: objlang,
        changmasof: masof,
      };

      resolve(resulotloginfunction);
    }
  });

  return await myPromis;
};
