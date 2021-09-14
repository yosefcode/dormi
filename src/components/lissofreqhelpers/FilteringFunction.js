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

//  פילטר לפי משתמשים
export function FilterAllusers(arry, user) {
  if (user) {
    return arry.filter((el) => {
      return el.firstname === user[1] && el.lastname === user[2];
    });
  } else {
    return arry;
  }
}

export function FilterAllstatus(arry, statusname) {
  if (statusname) {
    return arry.filter((el) => {
      return el.statusname === statusname;
    });
  } else {
    return arry;
  }
}
