import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const PieChartComponent: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <PieChart width={300} height={300}>
      <Pie
        dataKey="value"
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        innerRadius={60}
        startAngle={0}
        endAngle={360}
        fill="#8884d8"
        title="Initial Distribution"
        label
      >
        {data.map((entry, index) => ( 
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;