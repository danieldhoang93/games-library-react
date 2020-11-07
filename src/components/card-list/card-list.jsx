import React from 'react';
import './card-list.css';
import { Card } from '../card/card';

export const CardList = props => (
    <div className='card-list'>
        {props.gamesLibrary.map(game => (
            <Card key={game.id} game={game}></Card>
        ))}
    </div>
)