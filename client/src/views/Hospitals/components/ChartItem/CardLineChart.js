import React from 'react';
import {Line, LineChart,} from 'recharts';
import theme from '../../../../theme'



function CardLineChart({chartData}) {
  return (
    <LineChart width={300} height={150} data={chartData.data} margin={theme.spacing(1)}>
      <Line type="monotone" dataKey="pv"
            stroke={(chartData.positiveChange) ? theme.palette.success.light : theme.palette.error.light}
            strokeWidth={2}/>
    </LineChart>
  );
}

export default CardLineChart
