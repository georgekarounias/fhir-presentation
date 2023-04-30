import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export interface IDataPoint {
  time: string;
  value: number;
};

export interface ISingleValueChartProps{
    data: IDataPoint[];
}

const SingleValueChart = (props : ISingleValueChartProps) => {
  return (
    <LineChart
      width={500}
      height={300}
      data={props.data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="time" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
};

export default SingleValueChart;