import React, { Component } from "react";
import CanvasJS from "./canvasjs.min";
import ExpenseContext from "../../context/expense/expenseContext";

export class ExpGraph extends Component {
  static contextType = ExpenseContext;

  componentDidMount() {
    this.drawChart();
    this.context.getExpList();
  }
  drawChart() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      zoomEnabled: true,
      theme: "dark2",
      title: {
        text: "Expense Chart"
      },
      axisX: {
        title: "Date (YYYY-MM-DD)",
        labelFormatter: function(e) {
          return CanvasJS.formatDate(e.value, "YYYY-MM-DD");
        },
        interval: 1
      },
      axisY: {
        logarithmic: true, //change it to false
        title: "Internet Users (Log)",
        titleFontColor: "#6D78AD",
        lineColor: "#6D78AD",
        gridThickness: 0,
        lineThickness: 1,
        includeZero: false,
        labelFormatter: addSymbols
      },
      axisY2: {
        title: "Internet Users",
        titleFontColor: "#51CDA0",
        logarithmic: true, //change it to true
        lineColor: "#51CDA0",
        gridThickness: 0,
        includeZero: false,
        lineThickness: 1,
        labelFormatter: addSymbols
      },
      legend: {
        verticalAlign: "top",
        fontSize: 16,
        dockInsidePlotArea: true
      },
      data: [
        {
          type: "spline",
          name: "Expenses",
          dataPoints: [
            { x: new Date(2020, 7, 3), y: 6500 },
            { x: new Date(2020, 7, 5), y: 700 },
            { x: new Date(2020, 7, 7), y: 710 },
            { x: new Date(2020, 7, 9), y: 658 }
          ]
        },
        {
          type: "line",

          axisYType: "secondary",
          showInLegend: true,
          name: "Savings",
          dataPoints: [
            { x: new Date(2020, 7, 3), y: 650 },
            { x: new Date(2020, 7, 5), y: 700 },
            { x: new Date(2020, 7, 7), y: 710 },
            { x: new Date(2020, 7, 9), y: 658 }
          ]
        }
      ]
    });
    chart.render();

    function addSymbols(e) {
      var suffixes = ["", "K", "M", "B"];

      var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
      if (order > suffixes.length - 1) order = suffixes.length - 1;

      var suffix = suffixes[order];
      return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
  }
  render() {
    return (
      <div>
        <div
          className="Graph"
          id="chartContainer"
          style={{ height: "300px", width: "100%" }}
        ></div>
        <div
          style={{
            marginTop: "16px",
            color: "dimgrey",
            fontSize: "9px",
            fontFamily: "Verdana, Arial, Helvetica, sans-serif",
            textDecoration: "none"
          }}
        >
          {/* Source:{" "}
          <a
            href="https://canvasjs.com/html5-javascript-chart-logarithmic-axis/"
            target="_blank"
            rel="noopener noreferrer"
            title="JavaScript Charts &amp; Graphs with Logarithmic axis "
          >
            https://canvasjs.com/html5-javascript-chart-logarithmic-axis/
          </a> */}
        </div>
      </div>
    );
  }
}

export default ExpGraph;
