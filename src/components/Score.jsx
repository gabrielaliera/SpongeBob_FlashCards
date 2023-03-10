import { Component, useState } from "react";
import './Score.css'

const Score = ({score, streak}) => {
    return(
        <div>
            <h3 className="streak">Current Streak: {score} Longest Streak: {streak}</h3>
        </div>
    )
}


export default Score;