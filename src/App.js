import logo from './logo.svg';
import './App.css';
import Color from './components/Color';
import Boxes from './components/Boxes';
import React, { useState } from 'react';

function App() {
  const [boxes, setBoxes]=useState([]);
  const addToState = (color)=>{
   setBoxes(boxes.concat(color)) ;
  }
  return (
    <div className="App">
      
      <Color addToState={addToState} ></Color>
      <Boxes boxes={boxes}></Boxes>
   
    </div>
  );
}

export default App;
