import React, { useEffect, useState } from 'react';
import ReactFrappeChart from "react-frappe-charts";


function Graph(props){
    const {weightMap} = props;
    //var mapAsc = new Map([...weightMap].sort());
    // console.log(Array.from(weightMap.keys()));
    const labels = Array.from(weightMap.keys()).map((time) => new Date(time).getUTCDate())
    const values = Array.from(weightMap.values()).map((value) => parseFloat(value));
    // console.log(labels, values);
    const arr = [1]
    return(
        <ReactFrappeChart
        type="line"
        colors={["#21ba45"]}
        axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
        height={600}
        data={{
            labels: Array.from(weightMap.keys()).map((time) => new Date(time).toDateString()),
            datasets: [{name: "Weight", type:"line", values: Array.from(weightMap.values()).map((value) => parseFloat(value)) }]
        }}
        />
    )
}
export default Graph;