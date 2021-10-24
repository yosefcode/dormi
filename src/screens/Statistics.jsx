import React, { useEffect, useState } from "react";
import { Continer } from "../styelscomponents/StatisicChart";
// import "../screens/Statistics.css";
import { Chart } from "react-google-charts";

const Statistics = React.forwardRef((props, ref) => {
  document.body.style.backgroundColor = "white";
  const [data, setdata] = useState();
  const [firstlode, setfirstlode] = useState(true);
  useEffect(() => {
    if (firstlode) {
      setfirstlode(false);
      setdata([
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ]);
    } else {
      console.log("hi");
    }
  }, [data, firstlode]);

  return (
    <Continer ref={ref}>
      {/* <div className="teststyelt"></div> */}
      <div className="column">
        <div className="item">
          <Chart
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
              // Material design options
              chart: {
                title: "Company Performance",
                subtitle: "Sales, Expenses, and Profit: 2014-2017",
              },
              colors: ["#89a9b3"],
            }}
            // For tests
            rootProps={{ "data-testid": "2" }}
          />
        </div>
        <div className="item">
          <Chart
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Task", "Hours per Day"],
              ["Work", 11],
              ["Eat", 2],
              ["Commute", 2],
              ["Watch TV", 2],
              ["Sleep", 7],
            ]}
            options={{
              title: "My Daily Activities",
              // Just add this option
              is3D: true,
            }}
            rootProps={{ "data-testid": "2" }}
          />
        </div>
      </div>
      <div className="column">
        <div className="item">
          <Chart
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
              [
                { type: "number", label: "x" },
                { type: "number", label: "values" },
                { id: "i0", type: "number", role: "interval" },
                { id: "i1", type: "number", role: "interval" },
                { id: "i2", type: "number", role: "interval" },
                { id: "i2", type: "number", role: "interval" },
                { id: "i2", type: "number", role: "interval" },
                { id: "i2", type: "number", role: "interval" },
              ],
              [1, 100, 90, 110, 85, 96, 104, 120],
              [2, 120, 95, 130, 90, 113, 124, 140],
              [3, 130, 105, 140, 100, 117, 133, 139],
              [4, 90, 85, 95, 85, 88, 92, 95],
              [5, 70, 74, 63, 67, 69, 70, 72],
              [6, 30, 39, 22, 21, 28, 34, 40],
              [7, 80, 77, 83, 70, 77, 85, 90],
              [8, 100, 90, 110, 85, 95, 102, 110],
            ]}
            options={{
              title: "Line intervals, default",
              curveType: "function",
              // lineWidth: 4,
              intervals: { style: "line" },
              legend: "none",
            }}
            rootProps={{ "data-testid": "1" }}
          />
        </div>
        <div className="item">
          <Chart
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["x", "dogs", "cats"],
              [0, 0, 0],
              [1, 10, 5],
              [2, 23, 15],
              [3, 17, 9],
              [4, 18, 10],
              [5, 9, 5],
              [6, 11, 3],
              [7, 27, 19],
            ]}
            options={{
              hAxis: {
                title: "Time",
              },
              vAxis: {
                title: "Popularity",
              },
              series: {
                1: { curveType: "function" },
              },
            }}
            rootProps={{ "data-testid": "2" }}
          />
        </div>
      </div>
    </Continer>
  );
});

export default Statistics;
