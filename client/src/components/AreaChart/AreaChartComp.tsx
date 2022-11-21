import { FC } from 'react';
import {
  AreaChart,
  Area,
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

export const AreaChartComp: FC<Props> = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart
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
      <Area type="monotone" dataKey="schools" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
);
