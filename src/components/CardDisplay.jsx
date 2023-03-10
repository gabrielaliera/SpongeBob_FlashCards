import React, {Component, useState} from 'react';


const CardDisplay = ({flip, currentCard, setFlip}) => {

    return(
        <div>
            <div className={`card ${flip ? "flip" : ""}`} id={currentCard.difficulty} onClick={ () => setFlip(!flip)}>                   
                <div className="front">
                    { currentCard.image ?  (
                       <img className="image" src={currentCard.image} alt={`Small image for card ${currentCard.id}`}/> 
                    ) : (
                        <p>{currentCard.name}</p>  
                    )}
                </div>
                <div className="back">
                    { currentCard.question_image ?  (
                       <img className="image" src={currentCard.question_image} alt={`Small image for card ${currentCard.id}`}/> 
                    ) : (
                        <p>{currentCard.name}</p>  
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default CardDisplay;