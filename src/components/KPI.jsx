import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from "recharts";

const sampleData = [
  { name: "Jan", Sales: 4000, Revenue: 2400 },
  { name: "Feb", Sales: 3000, Revenue: 1398 },
  { name: "Mar", Sales: 2000, Revenue: 9800 },
  { name: "Apr", Sales: 2780, Revenue: 3908 },
  { name: "May", Sales: 1890, Revenue: 4800 },
  { name: "Jun", Sales: 2390, Revenue: 3800 },
];

const KPI = () => {
  return (
    <div className='mx-auto w-[50vw]'>
      <h2 className='text-3xl'>KPI Dashboard</h2>

      <div style={{ margin: "20px 0" }}>
        <h3>Sales and Revenue (Line Chart)</h3>
        <LineChart
          width={600}
          height={300}
          data={sampleData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
          <Line type="monotone" dataKey="Revenue" stroke="#82ca9d" />
        </LineChart>
      </div>

      <div>
        <h3>Sales Comparison (Bar Chart)</h3>
        <BarChart
          width={600}
          height={300}
          data={sampleData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Sales" fill="#8884d8" />
          <Bar dataKey="Revenue" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default KPI;
