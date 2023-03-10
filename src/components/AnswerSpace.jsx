import React, {Component, useState} from 'react';


const AnswerSpace = ({currentValue, handleChange, submit}) => {

    return(
        <div>
            <label>
                <input
                    type="text"
                    name="answer"
                    value={currentValue}
                    placeholder="Guess the answer..."
                    onChange={handleChange}
                    className='textbox'
                />
                
            </label>
            <button type="submit" onClick={submit}>Submit</button>
        </div>
    )
}

export default AnswerSpace;