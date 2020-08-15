import React, {useState, useEffect} from 'react'

function Cell(props){
    const {date, color, day, weightMap, setWeightMap} = props;
    //RIGHT NOW, CHANGING WORKS AS LONG AS WE DO NOT CHANGE YEARS
    const [currentWeight, changeCurrentWeight] = useState(weightMap.has(date.getTime()) ? weightMap.get(date.getTime()): "");
    function weightChange(event){
        changeCurrentWeight(event.target.value);
    }
    useEffect(
        () => {
            changeCurrentWeight(weightMap.has(date.getTime()) ? weightMap.get(date.getTime()): "");
        },
        [date.getTime()],
    );
    useEffect(
        () => {
            if(!(currentWeight === ""))  setWeightMap(new Map([...new Map(weightMap.set(date.getTime(), currentWeight))].sort()));
            console.log(currentWeight)
            if(currentWeight === ""){
                weightMap.delete(date.getTime())
                setWeightMap(new Map(weightMap))
            } 
        },[currentWeight]
    );
    return(
        <td>
            <div className="Cell" style={{backgroundColor:color}}>
                <div className="cell-day">{day}</div>
                <input type="text" value={currentWeight} onChange={weightChange}style={{background:'transparent', border:'transparent', height:"10vh", width:"13.5vh"}}></input>
            </div>
        </td>
    )
}
export default Cell;