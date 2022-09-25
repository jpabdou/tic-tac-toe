import React, {useState} from "react"

const style = {
    background: "lemonchiffon",
    border: "2px solid royalblue",
    borderRadius: "25%",
    width: "50px",
    height: "50px"
}


function Square(props) {
    
    return(
        <button style={style} onClick={props.onClick}>{props.value}</button>
    )
}
export default Square
