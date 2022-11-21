import { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Data } from '../../types/data';

type Props = {
  data: Data[];
};

export const StackedBarChartComp: FC<Props> = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={data}
      margin={{
        top: 50,
        right: 50,
        left: 20,
        bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3" vertical={false} />
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis axisLine={false} tickLine={false} />
      <Tooltip />
      <Legend />
      <Bar dataKey="schools" stackId="a" fill="#615dbb" />
      <Bar dataKey="kindergartens" stackId="a" fill="#8884d8" />
      <Bar dataKey="universities" stackId="a" fill="#9793ea" />
    </BarChart>
  </ResponsiveContainer>
);
