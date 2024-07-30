import { useState } from 'react';
import React from 'react'
import './App.css'
export const App = () => {
const [Count, setCount]=useState(0);

function addFun(){
  setCount(Count + 1);
}
function subFun(){
  setCount(Count - 1);
}
function resFun(){
  setCount(0);
}

  return (
    <div className="App">
    <div className="box">
<p>{Count}</p>
<button onClick={addFun} className="Add">ADD</button>
<button onClick={subFun} className="Sub">SUB</button>

<button onClick={resFun} className="Res">RESET</button>
<p>{Count +10}</p>
    </div>
    </div>
  );
}


export default App;
