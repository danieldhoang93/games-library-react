import React from 'react';
import './card.css';

export const Card = props => (
    <div className="card-container">
        <img className="card-image" alt="game cover" src={ props.game.background_image }/>
        <h2>{ props.game.name }</h2>
        <h4>Rating: { props.game.rating }</h4>
    </div>

)