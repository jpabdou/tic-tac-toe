import React, {useState} from "react"
import Square from "./Square"

const style = {
    borderRadius: "25%",
    display: "grid",
    gridTemplate: "repeat(3,55px) / repeat(3,55px)"
}



function Game(props) {
    
    console.log(props)
    const gameState = []

    // console.log(gameState)
    
    return (
        <div style={style}>
        {props.board.map((element, idx) => 
         <Square key={idx} gameState={gameState} pos={idx} player = {props.player} setPlayer = {props.setPlayer} turn ={props.turn} setTurn = {props.setTurn} />
         )}
        </div>
        
    )
}

export default Game
