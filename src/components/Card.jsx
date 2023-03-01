import { useState } from 'react'
import React from 'react'
import './Card.css'
import House from '../assets/house.jpeg'

const Card = ({cards}) => {

    const [currentCard, setCurrentCard] = useState({id:0, name:"Flip card to see answer", image:"", question_image:House});

    const [flip, setFlip] = useState(false);

    const nextCard = () =>{
        let randomNextCard = Math.floor(Math.random() * cards.length)
        setCurrentCard(cards[randomNextCard])
        setFlip(false)
    };
    

    return(
        <div>
            <h3>Number of cards: {cards.length}</h3>
           <div   className={`card ${flip ? "flip" : ""}`} onClick={ () => setFlip(!flip)}>
                                
                <div className="front">
                    {currentCard.question_image ?  
                       (<p>{currentCard.name}<br></br><img className="image" src={currentCard.question_image} alt={`Small image for card ${currentCard.id}`}/></p>) :
                       (<img className="image" src={currentCard.image} alt={`Small image for card ${currentCard.id}`}/>)}
                    
                </div>
                <div className="back">
                    <p>{currentCard.name}</p>
                </div>
                
            </div>
           <button onClick={nextCard}>Next</button>
        </div>
    )
}

export default Card;