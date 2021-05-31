import React, { useEffect, useState } from 'react';
import Board from './Board';
import Navbar from './Navbar';

const Game = (props) => {
    const player1 = props.player1;
    const player2 = props.player2;
    const [firstPlayerWins, setFirstPlayerWins] = useState(0);
    const [sacondPlayerWins, setSacondPlayerWins] = useState(0);
    const [tieGames, setTieGames] = useState(0);

    const [whoIsPlaying, setWhoIsPlaying] = useState(player1);
    useEffect(() => {
        setWhoIsPlaying(player1)
    }, [player1]);

    const getWhoIsPlaying = (player) => {
        setWhoIsPlaying(player);
    }

    const getScores = (player1Wins, player2Wins, ties) => {
        setFirstPlayerWins(player1Wins);
        setSacondPlayerWins(player2Wins);
        setTieGames(ties);
    }
    return (
        <div>
            <Navbar firstPlayerWins={firstPlayerWins} sacondPlayerWins={sacondPlayerWins} tieGames={tieGames} player1={player1} player2={player2} />
            <h3 className="whoIsPlaying">Its {whoIsPlaying}' turn</h3>
            <Board getWhoIsPlaying={getWhoIsPlaying} getScores={getScores} player1={player1} player2={player2} />
        </div>
    );
};

export default Game;