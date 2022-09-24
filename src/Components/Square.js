import React, {useState} from "react"
import winner from "./Winner"
const style = {
    background: "lemonchiffon",
    border: "2px solid royalblue",
    borderRadius: "25%",
    width: "50px",
    height: "50px"
}


function progress(props, setter) {
    document.querySelectorAll("button").forEach(element=>props.gameState.push(element.textContent))

    if (props.player === 1) {
        setter("X")
    } else {
        setter("O")
    }
    winner(props.gameState)
    console.log(props.gameState)
    props.setTurn(props.turn +1)
    props.setPlayer(props.turn%2)   
}


function Square(props) {
    
    const [ownership, setOwnership] = useState("")
    return(
        <button style={style} onClick={()=>{ownership ? alert("Pick another squre") : progress(props, setOwnership)}}>{ownership}</button>
    )
}
export default Square
