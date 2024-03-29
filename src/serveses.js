import axios from "axios";
const { REACT_APP_URL_POST } = process.env;

const posturl = REACT_APP_URL_POST;

export const PostToServer = async (ruter, valeu) => {
  let myPromis = new Promise((resolve, reject) => {
    axios.post(`${posturl}/${ruter}`, valeu).then(
      (res) => {
        resolve(res.data);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return myPromis;
};

export const GettfromServer = async (ruter) => {
  let myPromis = new Promise((resolve, reject) => {
    axios.get(`http://b.dormi.co.il/boaz/post`).then(
      (res) => {
        resolve(res.data);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return myPromis;
};
export const PostToServerUplodeImage = async (ruter, formData) => {
  debugger;
  return fetch(`${posturl}/${ruter}`, {
    method: "post",
    body: formData,
  }).then((res) => res.json());
};
