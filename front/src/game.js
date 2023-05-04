

import React from 'react'
import {useState} from 'react'

function Game() {
  const [score, setScore] = useState(10);  

  
  const updateScore = (points) => {
    setScore(score + points);
  };

  
  const existingGameLogic = () => {

    updateScore(10);
 };

 const resetCounter = () => {
   setScore(0);
 };

 return (
    <div>
      <h1>My Game</h1>
      <p>Score: {score}</p>
      <button onClick={resetCounter}>Reset COUNTER</button>
      <button onClick={existingGameLogic}>Do Something</button>
    </div>
  );
}

export default Game; 
