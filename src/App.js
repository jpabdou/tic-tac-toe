import React, { useState } from "react";
import './App.css';
import Game from "./Components/Game"

// React component start with a capital letter so that JSX recognizes a React component
// A state is data that lives in a component
// props are an object of parameters from parent to child

function App() {
  // 1) board state ->  nested array 
  const [board, setBoard] = useState([0, 0 , 0, 0, 0, 0, 0, 0,0])
  const [turn, setTurn] = useState(1)
  const [player, setPlayer] = useState(0)

  return (
    <div>
      <Game player = {player} setPlayer = {setPlayer} board={board} setBoard={setBoard} turn ={turn} setTurn = {setTurn}/>
    </div>
  );
}

export default App;
