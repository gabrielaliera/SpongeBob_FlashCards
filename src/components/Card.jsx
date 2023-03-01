import { useState } from 'react'
import React from 'react'
import './Card.css'
import House from '../assets/house.jpeg'

const Card = ({cards}) => {

    const [currentCard, setCurrentCard] = useState({id:0, name:"Click to Start", image:House});

    const [flip, setFlip] = useState(false);

    const nextCard = () =>{
        let randomNextCard = Math.floor(Math.random() * cards.length)
        setCurrentCard(cards[randomNextCard])
        setFlip(false)
    };
    

    return(
        <div>
            <h3>Number of cards:{cards.length}</h3>
           <div   className={`card ${flip ? "flip" : ""}`} onClick={ () => setCardSide(!cardSide)}>
                 
               
                <div className="front">
                    <p>{currentCard.name}</p>
                
                </div>
                <div className="back">
                    <img className="image" src={currentCard.image} alt={`Small image for card ${currentCard.id}`}/>
                </div>
            </div>
           <button onClick={nextCard}>Next</button>
        </div>
    )
}

export default Card;