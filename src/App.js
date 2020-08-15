import React, {useState} from 'react';
import './App.css';
import Calendar from './components/Calendar'
import Graph from './components/Graph'



function App() {
  const [weightMap, setWeightMap] = useState(new Map());
  return (
    <div className="App">
      <Calendar weightMap={weightMap} setWeightMap={setWeightMap}></Calendar>
      {weightMap.size > 0 && <Graph weightMap={weightMap}></Graph>}
    </div>
  );
}

export default App;
