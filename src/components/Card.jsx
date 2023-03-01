//import { useState } from 'react'
import React from 'react'
import './Card.css'

const Card = (props) => {

    return(
        <div className="Card">
             <p>{props.name}</p>
             <img src={props.img}/>
             <button>Left</button>
             <button>Right</button>
        </div>
    )
}

export default Card;