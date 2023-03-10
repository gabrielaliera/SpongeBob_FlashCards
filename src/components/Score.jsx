import { Component, useState } from "react";

const Score = ({streak, longestStreak}) => {
    return(
        <div>
            <h3>Current Streak: {streak} Longest Streak: {longestStreak}</h3>
        </div>
    )
}


export default Score;