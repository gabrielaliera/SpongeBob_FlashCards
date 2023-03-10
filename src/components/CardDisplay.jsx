import React, {Component, useState} from 'react';


const CardDisplay = () => {

    return(
        <div>
            <div className={`card ${flip ? "flip" : ""}`} id={currentCard.difficulty} onClick={ () => setFlip(!flip)}>                   
                <div className="front">
                    {currentCard.question_image ?  
                    (<p>{currentCard.name}<br></br><img className="image" src={currentCard.question_image} alt={`Small image for card ${currentCard.id}`}/></p>) :
                    (<img className="image" src={currentCard.image} alt={`Small image for card ${currentCard.id}`}/>)}
                </div>
                <div className="back">
                    <p>{currentCard.name}</p>
                </div>
            </div>
            
        </div>
    )
}

export default CardDisplay;