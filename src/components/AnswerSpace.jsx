import React, {Component, useState} from 'react';


const AnswerSpace = (label, userInput, handleChange) => {

    return(
        <div>
            <label>
                <input
                    type="text"
                    name={label}
                    value={userInput}
                    placeholder="Guess"
                    onChange={handleChange}
                    className='textbox'
                />
                
            </label>
        </div>
    )
}

export default AnswerSpace;