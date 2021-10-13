import React from "react";
import { Chart } from "react-google-charts";
import "../screens/Statistics.css";
const Statistics = () => {
  let Year = "שנה";
  let Sales = "מכירות";
  let Expenses = "הוצאות";
  let Profit = "רווחים";
  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
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
      />{" "}
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          [Year, Sales, Expenses, Profit],
          ["2014", 1000, 400, 200],
          ["2015", 1170, 460, 250],
          ["2016", 660, 1120, 300],
          ["2017", 1030, 540, 350],
        ]}
        options={{
          // Material design options
          chart: {
            title: "Company Performance",
            subtitle: "Sales, Expenses, and Profit: 2014-2017",
          },
          colors: ["#FB7A21"],
          //   backgroundColor: "red",
        }}
        // For tests
        rootProps={{ "data-testid": "2" }}
      />
    </div>
    // <div className="grid">
    //   <div className="column">
    //     {/* <div className="item"></div>
    //     <div className="item1"></div> */}
    //     <div className="item">
    //       <Chart
    //         width={"500px"}
    //         height={"300px"}
    //         chartType="Bar"
    //         loader={<div>Loading Chart</div>}
    //         data={[
    //           [Year, Sales, Expenses, Profit],
    //           ["2014", 1000, 400, 200],
    //           ["2015", 1170, 460, 250],
    //           ["2016", 660, 1120, 300],
    //           ["2017", 1030, 540, 350],
    //         ]}
    //         options={{
    //           // Material design options
    //           chart: {
    //             title: "Company Performance",
    //             subtitle: "Sales, Expenses, and Profit: 2014-2017",
    //           },
    //           colors: ["#FB7A21"],
    //           //   backgroundColor: "red",
    //         }}
    //         // For tests
    //         rootProps={{ "data-testid": "2" }}
    //       />
    //     </div>
    //     <div className="item">
    //       <Chart
    //         width={"500px"}
    //         height={"300px"}
    //         chartType="PieChart"
    //         loader={<div>Loading Chart</div>}
    //         data={[
    //           ["Task", "Hours per Day"],
    //           ["Work", 11],
    //           ["Eat", 2],
    //           ["Commute", 2],
    //           ["Watch TV", 2],
    //           ["Sleep", 7],
    //         ]}
    //         options={{
    //           title: "My Daily Activities",
    //           // Just add this option
    //           is3D: true,
    //         }}
    //         rootProps={{ "data-testid": "2" }}
    //       />
    //     </div>
    //   </div>
    //   <div className="column">
    //     <div className="item3"></div>
    //   </div>
    // </div>
  );
};

export default Statistics;
