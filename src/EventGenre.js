import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from 'recharts';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setData(() => getData()); }, [events]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

    const data = genres.map(genre => {
      const value = events.filter(event => event.summary.split(' ').includes(genre)).length;
      return {name: genre, value};
    });
    return data;
  };

  const colors = ["#8c4bc3", "#47d16b", "#ffc668", "#e571b3", "#92f4f0"];

  return (
    <ResponsiveContainer height={400} >
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          // cx={200}
          // cy={200}
          labelLine={false}
          outerRadius={110}
          dataKey="value"
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} name={entry.name}/>
            ))
          }
        </Pie>
        <Legend 
          verticalAlign="top" 
          // align="center"
          iconType="line"
          />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;