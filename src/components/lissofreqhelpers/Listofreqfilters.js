import { HiLockOpen } from "react-icons/hi";

// מערך קטגוריות לפי כמות פניות
export const Filterforcareguris = (data) => {
  let arryofprojects = [];

  const uniqueArray = data.filter((item, index) => {
    return data.indexOf(item) === index;
  });

  for (let i = 0; i < uniqueArray.length; i++) {
    const breadcrumb = data.filter((item) => item === uniqueArray[i]);
    arryofprojects.push({ breadcrumb });
  }

  return arryofprojects;
};
// מערך מיקום לפי כמות פניות

export const FilterlocationNum = (data, alltikets) => {
  let arryofprojects = [];

  const uniqueArray = data.filter((item, index) => {
    return data.indexOf(item) === index;
  });

  for (let i = 0; i < uniqueArray.length; i++) {
    const locationName = alltikets.filter(
      (item) => item.locationName === uniqueArray[i]
    );

    arryofprojects.push({ locationName });
  }

  return arryofprojects;
};
// מערך משתמשים

export const FilterUserNum = (data) => {
  let arryofprojects = [];

  const uniqueArray = data.filter((item, index) => {
    return data.indexOf(item) === index;
  });

  for (let i = 0; i < uniqueArray.length; i++) {
    const users = data.filter((item) => item === uniqueArray[i]);
    arryofprojects.push({ users });
  }

  return arryofprojects;
};
// מחיקת משימות שהוסרו ע"י מנהל
export const Filterdelittask = (data, alldelettask) => {
  let arryofprojects = [];

  for (let i = 0; i < alldelettask.length; i++) {
    let id = parseInt(alldelettask[i].id);
    const alldata = data.filter((item) => item.ticketid !== id);

    arryofprojects.push(alldata);
  }

  return arryofprojects[0];
};
// פילטר לפי קטגוריות

export function FilterUrgency(arry, filterallUrgency) {
  if (filterallUrgency) {
    return arry.filter((el) => {
      return el.urgencyadmin === filterallUrgency;
    });
  } else {
    return arry;
  }
}
// פילטר לפי דחיפות

export function FilterAllOpenCategoris(arry, AllOpenCategoris) {
  if (AllOpenCategoris) {
    return arry.filter((el) => {
      return el.breadcrumb === AllOpenCategoris;
    });
  } else {
    return arry;
  }
}
/// פילטר לפי מיקום וחדקים
export const Filterlocation = (arry, location) => {
  if (location) {
    if (location?.length > 0) {
      let arryofres = [];
      location.map((loction) => {
        let chckeroom = loction.indexOf("room:");

        if (chckeroom >= 1) {
          let room = loction.slice(chckeroom + 5, loction.length);

          let locationName = loction.slice(0, chckeroom - 1);

          arry.filter((el) => {
            if (el.locationName === locationName && el.roomName === room) {
              arryofres.push(el);
            }
          });
        } else {
          arry.filter((el) => {
            if (el.locationName === loction) {
              arryofres.push(el);
            }
          });
        }
      });

      return arryofres;
    } else {
      return arry;
    }
  } else {
    return arry;
  }
};
