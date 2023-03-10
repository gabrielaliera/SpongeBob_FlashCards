import { Component , useState } from 'react';
import React from 'react';
import './Card.css';

import Button from './Button';
import CardDisplay from './CardDisplay';
import AnswerSpace from './AnswerSpace';
import Score from './Score';

const Card = ({cards}) => {

    const [currentCard, setCurrentCard] = useState(cards[0]);

    const [flip, setFlip] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0); 
    const [atStartIndex, setAtStartIndex] = useState(true);
    const [atEndIndex, setAtEndIndex] = useState(false);
    
    const [guess, setGuess] = useState("")
    const [score, setScore] = useState(0)
    const [longestStreak, setLongestStreak] = useState(0)

    
    
    const nextCardRandom = () =>{
        let randomNextCard = Math.floor(Math.random() * cards.length)
        setCurrentCard(cards[randomNextCard])
        setFlip(false)
    };

    const prevCard = () =>{
        setFlip(false);
        setGuess("");
        let index = currentIndex - 1;
        
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
        setFlip(false);
        setGuess("");  
        let index = currentIndex + 1;
        
       
        if(index >= cards.length){
            setAtEndIndex(true)
        } else {
           
            setCurrentIndex(index);
            setCurrentCard(cards[index]);
            setAtEndIndex(false);
            setAtStartIndex(false);
            
        }
        
    }

    const shuffleCard = () =>{
        let startCard = cards[0];
        cards.splice(0,1);

        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
        cards.unshift(startCard);
        setCurrentCard(startCard)
    }
    
    const onSubmit = () =>{
        
        if(currentCard.name.toLowerCase().includes(guess.toLowerCase())){
            setScore(score + 1)
            alert("Correct!");
        } else {
            setLongestStreak((longestStreak < score) ? score : longestStreak)
            setScore(0)
            alert("Wrong! Guess Again!")
        }
        setGuess("")
       
    }

    return(
        <div>
           <h3>Number of Cards: {cards.length}</h3>
           <Score score= {score} streak = {longestStreak}/>
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