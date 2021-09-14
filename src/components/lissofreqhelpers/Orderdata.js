// מערך קטגוריות לפי כמות פניות

export const Ordercareguris = (data) => {
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

export const Orderlocation = (data, alltikets) => {
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

export const OrderUser = (data) => {
  let arryofprojects = [];
  const arryfulluser = data.map((el) => {
    return el.user;
  });

  const uniqueArray = arryfulluser.filter((item, index) => {
    return arryfulluser.indexOf(item) === index;
  });

  for (let i = 0; i < uniqueArray.length; i++) {
    const users = data.filter((item) => item.user === uniqueArray[i]);
    arryofprojects.push({ users });
  }

  return arryofprojects;
};
// מערך סטטוס פנייה
export const Orderstatusname = (data) => {
  let arryofprojects = [];

  const uniqueArray = data.filter((item, index) => {
    return data.indexOf(item) === index;
  });

  for (let i = 0; i < uniqueArray.length; i++) {
    const statusname = data.filter((item) => item === uniqueArray[i]);

    arryofprojects.push({ statusname });
  }

  return arryofprojects;
};
