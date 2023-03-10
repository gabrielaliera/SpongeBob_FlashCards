import React, { Component, useState } from "react";

const Button = ({disableBegin, disableEnd, prev, next, shuffle}) => {


    return (
        <div>
           <button className="previousCard" disabled={disableBegin} onClick={prev}>Previous</button>
           
           <button className="nextCard" disabled={disableEnd} onClick={next}>Next</button>
           
           <button onClick={shuffle}>Shuffle Deck</button> 
        </div>

    )
}

export default Button;