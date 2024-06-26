import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 200, pv: 980, amt: 2000 },
    { name: 'Page D', uv: 278, pv: 3908, amt: 3490 },
];

const Charts = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      {/* <YAxis width={1000} height={700} data={newdata}/> */}
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}


export default Charts;