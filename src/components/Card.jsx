import { Component , useState } from 'react';
import React from 'react';
import './Card.css';
import House from '../assets/house.jpeg';
import Button from './Button';

const Card = ({cards}) => {

    const [currentCard, setCurrentCard] = useState({id:0, name:"Flip card to see answer", image:"", question_image:House});

    const [flip, setFlip] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0); 
    const [atStartIndex, setAtStartIndex] = useState(true);
    const [atEndIndex, setAtEndIndex] = useState(false);
    
    
    const nextCardRandom = () =>{
        let randomNextCard = Math.floor(Math.random() * cards.length)
        setCurrentCard(cards[randomNextCard])
        setFlip(false)
    };

    const prevCard = () =>{
        let index = currentIndex - 1;
        //Card will loop around to end of array ( 0 -> 12)
        if(index < 0){
            setAtStartIndex(true)
        } else {
            setCurrentIndex(index);
            setCurrentCard(cards[index]);
            setAtEndIndex(false);
            setAtStartIndex(false);
            setFlip(false);  
        }
    };

    const nextCard = () => {
        let index = currentIndex + 1;
        
        //Card will loop around to beginning of array ( 12 -> 0)
        if(index >= cards.length){
            setAtEndIndex(true)
        } else {
            setCurrentIndex(index);
            setCurrentCard(cards[index]);
            setAtEndIndex(false);
            setAtStartIndex(false);
            setFlip(false);  
        }
    }

    const shuffleCard = () =>{

    }
    

    return(
        <div>
            <h3>Number of cards: {cards.length}</h3>
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
         
           <Button
                disableBegin= {atStartIndex}
                disableEnd = {atEndIndex}
                next = {nextCard}
                prev ={prevCard}
                shuffle ={shuffleCard}
           />
           
        </div>
    )
}

export default Card;