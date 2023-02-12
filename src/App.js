import React from "react";
import "./App.css";
import ReactEcharts from "echarts-for-react";

function App() {
  return (
    <div className="App">
      <div>
        <ReactEcharts
          option={{
            title: {
              text: "Bar EChart Example",
            },
            tooltip: {},
            legend: {
              data: ["Percentage of Malic Acid present"],
            },
            xAxis: {
              name: "Alcohol",
              data: [
                "Base liquors",
                "Beer",
                "Wines and fortified wines",
                "Liqueurs",
              ],
            },
            yAxis: {
              name: "Malic Acid",
            },
            series: [
              {
                name: "Percentage of Malic Acid present",
                type: "bar",
                data: ["80", "20", "60", "50"],
              },
            ],
          }}
        />
      </div>
      <div>
        <ReactEcharts
          option={{
            title: {
              text: "Scatter EChart Example",
            },
            tooltip: {},
            legend: {
              data: ["Coler Intensity in terms of hue"],
            },
            xAxis: {
              scale: true,
              name: "Color Intensity",
            },
            yAxis: {
              scale: true,
              name: "Hue",
            },
            series: [
              {
                name: "Coler Intensity in terms of hue",
                type: "scatter",
                data: [
                  [161.2, 51.6],
                  [167.5, 59.0],
                  [159.5, 49.2],
                  [157.0, 63.0],
                  [155.8, 53.6],
                  [170.0, 59.0],
                  [159.1, 47.6],
                  [166.0, 69.8],
                  [176.2, 66.8],
                  [160.2, 75.2],
                  [172.5, 55.2],
                  [170.9, 54.2],
                  [172.9, 62.5],
                  [153.4, 42.0],
                  [160.0, 50.0],
                ],
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default App;
