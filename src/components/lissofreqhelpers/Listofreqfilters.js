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

export const FilterlocationName = (data, alltikets) => {
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
