import React from "react";

const Tableform = ({ seefullform }) => {
  return (
    <div>
      <h1>טופס בדיקה -{seefullform.Formid}</h1>

      <table>
        <tbody>
          {seefullform.Fromtask
            ? seefullform.Fromtask.map((el, i) => {
                return (
                  <div>
                    {i === 0 ? (
                      <div>
                        <tr>
                          <td className="taskname">
                            <div>שם שולח הטופס</div>
                          </td>
                          <td className="taskexecution">
                            <div>{seefullform.username}</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="taskname">
                            <div>תאריך משלוח הטופס</div>
                          </td>
                          <td className="taskexecution">
                            <div>{seefullform.date}</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="taskname">
                            <div>מיקום</div>
                          </td>
                          <td className="taskexecution">
                            <div>{seefullform.location}</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="taskname">
                            <div>חתימת מאשר העבודה (גננת/סייעת)</div>
                          </td>
                          <td className="taskexecution">
                            <div>אין משתנה</div>
                          </td>
                        </tr>
                      </div>
                    ) : null}
                    <tr>
                      <td className="taskname">
                        <div>{el.task}</div>
                      </td>
                      <td className="taskexecution">
                        <div>
                          <input
                            // onChange={closetask}

                            type="checkbox"
                            id="only my"
                            name="tasktosee"
                            className="closecheckboox"
                            checked={el.status}
                          />
                        </div>
                      </td>
                    </tr>
                  </div>
                );
              })
            : null}
        </tbody>
      </table>
      <div>הערות </div>

      <div>{seefullform.cooment}</div>
    </div>
  );
};

export default Tableform;
