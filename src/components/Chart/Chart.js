import React from "react";
import ChartBar from './ChartBar';

const Chart=props=>{
    const dataPOintValue=props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximum=Math.max(...dataPOintValue);

    return (
    <div>

    {props.dataPoints.map(dataPoint=>(
    <ChartBar 
    key={dataPoint.label}
    value={dataPoint.value} 
    maxValue={totalMaximum} 
    label={dataPoint.label}
    />
    ))}

    </div>

);
};

export default Chart;