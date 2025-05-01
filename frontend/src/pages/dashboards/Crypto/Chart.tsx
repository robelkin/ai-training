import React, { useEffect } from "react";

import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import { Card, ButtonGroup, ToggleButton } from "react-bootstrap";

const data = [
  {
    data: [
      {
        x: new Date(2022, 1, 1),
        y: [51.98, 56.29, 51.59, 53.85],
      },
      {
        x: new Date(2022, 2, 1),
        y: [53.66, 54.99, 51.35, 52.95],
      },
      {
        x: new Date(2022, 3, 1),
        y: [52.96, 53.78, 51.54, 52.48],
      },
      {
        x: new Date(2022, 4, 1),
        y: [52.54, 52.79, 47.88, 49.24],
      },
      {
        x: new Date(2022, 5, 1),
        y: [49.1, 52.86, 47.7, 52.78],
      },
      {
        x: new Date(2022, 6, 1),
        y: [52.83, 53.48, 50.32, 52.29],
      },
      {
        x: new Date(2022, 7, 1),
        y: [52.2, 54.48, 51.64, 52.58],
      },
      {
        x: new Date(2022, 8, 1),
        y: [52.76, 57.35, 52.15, 57.03],
      },
      {
        x: new Date(2022, 9, 1),
        y: [57.04, 58.15, 48.88, 56.19],
      },
      {
        x: new Date(2022, 10, 1),
        y: [56.09, 58.85, 55.48, 58.79],
      },
      {
        x: new Date(2022, 11, 1),
        y: [58.78, 59.65, 58.23, 59.05],
      },
      {
        x: new Date(2023, 0, 1),
        y: [59.37, 61.11, 59.35, 60.34],
      },
      {
        x: new Date(2023, 1, 1),
        y: [60.4, 60.52, 56.71, 56.93],
      },
      {
        x: new Date(2023, 2, 1),
        y: [57.02, 59.71, 56.04, 56.82],
      },
      {
        x: new Date(2023, 3, 1),
        y: [56.97, 59.62, 54.77, 59.3],
      },
      {
        x: new Date(2023, 4, 1),
        y: [59.11, 62.29, 59.1, 59.85],
      },
      {
        x: new Date(2023, 5, 1),
        y: [59.97, 60.11, 55.66, 58.42],
      },
      {
        x: new Date(2023, 6, 1),
        y: [58.34, 60.93, 56.75, 57.42],
      },
      {
        x: new Date(2023, 7, 1),
        y: [57.76, 58.08, 53.18, 54.71],
      },
      {
        x: new Date(2023, 8, 1),
        y: [54.8, 61.42, 53.58, 57.35],
      },
      {
        x: new Date(2023, 9, 1),
        y: [57.56, 63.09, 57.0, 62.99],
      },
      {
        x: new Date(2023, 10, 1),
        y: [62.89, 63.42, 59.72, 61.76],
      },
      {
        x: new Date(2023, 11, 1),
        y: [61.71, 64.15, 61.29, 63.04],
      },
      {
        x: new Date(2024, 0, 1),
        y: [59.37, 61.11, 59.35, 60.34],
      },
      {
        x: new Date(2024, 1, 1),
        y: [60.4, 60.52, 56.71, 56.93],
      },
      {
        x: new Date(2024, 2, 1),
        y: [57.02, 59.71, 56.04, 56.82],
      },
      {
        x: new Date(2024, 3, 1),
        y: [56.97, 59.62, 54.77, 59.3],
      },
      {
        x: new Date(2024, 4, 1),
        y: [59.11, 62.29, 59.1, 59.85],
      },
      {
        x: new Date(2024, 5, 1),
        y: [59.97, 60.11, 55.66, 58.42],
      },
      {
        x: new Date(2024, 6, 1),
        y: [58.34, 60.93, 56.75, 57.42],
      },
      {
        x: new Date(2024, 7, 1),
        y: [57.76, 58.08, 51.18, 54.71],
      },
      {
        x: new Date(2024, 8, 1),
        y: [54.8, 61.42, 53.18, 57.35],
      },
      {
        x: new Date(2024, 9, 1),
        y: [57.56, 62.09, 57.0, 61.99],
      },
      {
        x: new Date(2024, 10, 1),
        y: [62.89, 63.42, 59.72, 61.76],
      },
      {
        x: new Date(2024, 11, 1),
        y: [61.71, 64.15, 61.29, 63.04],
      },
    ],
  },
];

const options: ApexOptions = {
  stroke: {
    width: 1,
  },
  xaxis: {
    type: "datetime",
  },
  colors: ["#0cc2aa", "#5fc27e", "#fcc100", "#f44455", "#5b7dff"],
};

const Chart = () => {
  useEffect(() => {
    // Trigger resize manually so chart doesn't fall off canvas
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <Card className="flex-fill">
      <Card.Header>
        <div className="card-actions float-end">
          <ButtonGroup>
            <ToggleButton
              id="1m"
              type="radio"
              variant="light"
              name="radio"
              value="1m"
              size="sm"
            >
              1m
            </ToggleButton>

            <ToggleButton
              id="5m"
              type="radio"
              variant="primary"
              name="radio"
              value="5m"
              size="sm"
              defaultChecked
            >
              5m
            </ToggleButton>

            <ToggleButton
              id="30m"
              type="radio"
              variant="light"
              name="radio"
              value="30m"
              size="sm"
            >
              30m
            </ToggleButton>

            <ToggleButton
              id="1h"
              type="radio"
              variant="light"
              name="radio"
              value="1h"
              size="sm"
            >
              1h
            </ToggleButton>

            <ToggleButton
              id="1d"
              type="radio"
              variant="light"
              name="radio"
              value="1d"
              size="sm"
            >
              1d
            </ToggleButton>
          </ButtonGroup>
        </div>
        <Card.Title className="mb-0">LTC/BTC</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <ApexCharts
            options={options}
            series={data}
            type="candlestick"
            height="450"
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Chart;
