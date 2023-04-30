import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export interface IBPDataPoint {
  isoDateString: string;
  systolic: number;
  diastolic: number;
}

export interface IBPChartProps{
    data: IBPDataPoint[]
}

const BloodPressureChart = (props : IBPChartProps) => {
  return (
    <LineChart width={600} height={400} data={props.data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="systolic" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default BloodPressureChart;