import axios from "axios";

const posturl = "https://b.dormi.co.il/requests";

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
