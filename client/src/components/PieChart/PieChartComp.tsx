import { FC } from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
} from 'recharts';
import { Data } from '../../types/data';

type Props = {
  data: Data[];
};

const getSum = (city: string, data: Data[]) => {
  const findCity: Data | undefined = data.find((item) => item.name === city);

  if (findCity) {
    return findCity?.kindergartens + findCity?.schools + findCity?.universities;
  }

  return;
};

export const PieChartComp: FC<Props> = ({ data }) => {
  const newData = [
    { name: 'Kyiv', value: getSum('Kyiv', data) },
    { name: 'Kharkiv', value: getSum('Kharkiv', data) },
    { name: 'Odessa', value: getSum('Odessa', data) },
  ];

  const colors = ['#8884d8', '#9793ea', '#615dbb'];

  return (
    <ResponsiveContainer>
      <PieChart
        data={newData}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 20,
        }}
      >
        <Tooltip />
        <Legend />
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={newData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
