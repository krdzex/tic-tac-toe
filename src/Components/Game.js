import React, { useState } from 'react';
import Board from './Board';

const Game = (props) => {
    const igrac1 = props.player1;
    const igrac2 = props.player2;

    const [whoIsPlaying, setWhoIsPlaying] = useState(igrac1);

    const getWhoIsPlaying = (player) => {
        setWhoIsPlaying(player);
    }
    return (
        <div>
            <p>Trenutno igra: {whoIsPlaying}</p>
            <Board getWhoIsPlaying={getWhoIsPlaying} igrac1={igrac1} igrac2={igrac2} />
        </div>
    );
};

export default Game;