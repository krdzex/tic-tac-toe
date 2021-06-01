import React, { useEffect, useState } from 'react';
import EndGame from './EndGame';
import History from './History';

const Board = (props) => {
    const [squers, setSquers] = useState(Array(9).fill(null));
    const [oNext, setONext] = useState(false);
    const player1 = props.player1;
    const player2 = props.player2;
    const [occupied, setOccupied] = useState(false);
    const [winner, setWinner] = useState("");
    const [availableSquers, setAvailableSquers] = useState(9);
    const [firstPlayerWins, setFirstPlayerWins] = useState(0);
    const [sacondPlayerWins, setSacondPlayerWins] = useState(0);
    const [tieGames, setTieGames] = useState(0);
    const [historyOfGames, setHistoryOfGames] = useState([]);

    const clickHandle = (e) => {
        if (availableSquers > 0) {
            if (e.target.innerText === "") {
                if (oNext === true) {
                    const squersCopy = squers.slice();
                    e.target.innerText = "o";
                    squersCopy[e.target.id] = "o";
                    setSquers(squersCopy)
                    setONext(false);
                    props.getWhoIsPlaying(player1)
                    setOccupied(false);
                    setAvailableSquers(availableSquers - 1)
                    chackingWinner(squersCopy);
                    return;
                } else {
                    const squersCopy = squers.slice();
                    e.target.innerText = "x";
                    squersCopy[e.target.id] = "x";
                    setSquers(squersCopy);
                    setONext(true);
                    props.getWhoIsPlaying(player2)
                    setOccupied(false);
                    setAvailableSquers(availableSquers - 1);
                    chackingWinner(squersCopy);
                    return;
                }
            }
            return setOccupied(true);
        }
    }

    const newGame = (resetAvailableSquere, resetWinner) => {
        setAvailableSquers(resetAvailableSquere);
        setWinner(resetWinner);
        setSquers(Array(9).fill(null));
        var x = document.getElementsByClassName("squers");
        for (var i = 0; i < squers.length; i++) {
            x[i].innerHTML = "";
        }
        setONext(false);
        props.getWhoIsPlaying(player1);
    }
    const chackingWinner = (squers) => {
        const winningCombinations =
            [[0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 4, 8], [2, 4, 6], [0, 3, 6],
            [1, 4, 7], [2, 5, 8]];
        for (var i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (squers[a] && squers[a] === squers[b] && squers[a] === squers[c]) {
                if (squers[a] === "x") {
                    setWinner(player1);
                    setAvailableSquers(0);
                    setFirstPlayerWins(firstPlayerWins + 1);
                    props.getScores(firstPlayerWins + 1, sacondPlayerWins, tieGames);
                    setHistoryOfGames([...historyOfGames, {
                        id: new Date().getTime(),
                        day: new Date().getDate(),
                        month: new Date().getMonth() + 1,
                        hour: new Date().getHours(),
                        minute: new Date().getMinutes(),
                        player1: player1,
                        player2: player2,
                        winner: player1
                    }
                    ])
                    return;
                } else {
                    setWinner(player2);
                    setAvailableSquers(0);
                    setSacondPlayerWins(sacondPlayerWins + 1);
                    props.getScores(firstPlayerWins, sacondPlayerWins + 1, tieGames);
                    setHistoryOfGames([...historyOfGames, {
                        id: new Date().getTime(),
                        day: new Date().getDate(),
                        month: new Date().getMonth() + 1,
                        hour: new Date().getHours(),
                        minute: new Date().getMinutes(),
                        player1: player1,
                        player2: player2,
                        winner: player2
                    }
                    ])
                    return;
                }
            }
        }
        if (availableSquers === 1 && winner === "") {
            setTieGames(tieGames + 1);
            props.getScores(firstPlayerWins, sacondPlayerWins, tieGames + 1);
            setHistoryOfGames([...historyOfGames, {
                id: new Date().getTime(),
                day: new Date().getDate(),
                month: new Date().getMonth() + 1,
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                player1: player1,
                player2: player2,
                winner: ""
            }
            ])
        }
    }
    useEffect(() => {
        localStorage.setItem("historyOfGames", JSON.stringify(historyOfGames));
    }, [historyOfGames])
    return (
        <div className="boardWrapper">
            <div className="grid">

                {squers.map((squers, id) => (
                    <div className='squers' id={id} onClick={clickHandle} key={id}>

                    </div>
                ))}
            </div>
            <div>
                {occupied && (<p>Choose unoccupied cell!</p>)}
            </div>


            <EndGame winner={winner} availableSquers={availableSquers} newGame={newGame} />
            <History historyOfGames={historyOfGames} setHistoryOfGames={setHistoryOfGames} />
        </div>

    );
};

export default Board;