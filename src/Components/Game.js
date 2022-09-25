import React, {useState} from "react"
import Square from "./Square"

import winner from "./Winner"
const style = {
    borderRadius: "25%",
    display: "grid",
    gridTemplate: "repeat(3,55px) / repeat(3,55px)"
}



function Game(props) {
    const [board, setBoard] = useState([" ", " " , " ", " ", " ", " ", " ", " "," "])
    const [player, setPlayer] = useState("X")
    
    console.log(props)
    const gameState = []

    // console.log(gameState)
    
    return (
        <div style={style}>
        {board.map((element, idx) => 
         <Square key={idx} value={element} onClick={()=>{
            if (board[idx] === " ") {
            board[idx] = player
            setBoard([...board])
            if (winner(board)) {
                alert(`${player} HAS WON`)
            } 
            setPlayer(player === "X" ? "O" : "X")
        } else {
                alert("This square is taken")
            }
         }} />
         )}
        </div>
        
    )
}

export default Game;
