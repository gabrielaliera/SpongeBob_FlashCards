import { Component , useState } from 'react';
import React from 'react';
import './Card.css';

import Button from './Button';
import CardDisplay from './CardDisplay';
import AnswerSpace from './AnswerSpace';

const Card = ({cards}) => {

    const [currentCard, setCurrentCard] = useState(cards[0]);

    const [flip, setFlip] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0); 
    const [atStartIndex, setAtStartIndex] = useState(true);
    const [atEndIndex, setAtEndIndex] = useState(false);
    
    const [guess, setGuess] = useState("")

    
    
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
    
    const onSubmit = () =>{
        
    }

    return(
        <div>
           <h3>Number of cards: {cards.length}</h3>
           <CardDisplay flip={flip} currentCard={currentCard} setFlip={setFlip}/> 
           <AnswerSpace 
            currentValue={guess} 
            handleChange = {(e) => setGuess(e.target.value)}
            submit={onSubmit} />
           
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