import React from 'react'
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

  //convert object into the array...
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);


  // max method doesn't take the array of values..so we use the spread operator...
  const totalMaximum = Math.max(...dataPointValues)
  return (
    <div className="chart">
        {props.dataPoints.map((dataPoint) => (
            <ChartBar 
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue = {totalMaximum}
            label={dataPoint.label}
            />
        ))}
    </div>
  )
}

export default Chart