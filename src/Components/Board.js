import React, { useEffect, useState } from 'react';
import EndGame from './EndGame';
import History from './History';
import Navbar from './Navbar';
const Board = (props) => {
    const [squers, setSquers] = useState(Array(9).fill(null));
    const [oNext, setONext] = useState(false);
    const igrac1 = props.igrac1;
    const igrac2 = props.igrac2;
    const [occupied, setOccupied] = useState(false);
    const [winner, setWinner] = useState("");
    const [availableSquers, setAvailableSquers] = useState(9);
    const [firstPlayerWins, setFirstPlayerWins] = useState(0);
    const [sacondPlayerWins, setSacondPlayerWins] = useState(0);
    const [tieGames, setTieGames] = useState(0);
    const [historyOfGames, setHistoryOfGames] = useState([]);



    const da = (e) => {
        if (availableSquers > 0) {
            if (e.target.innerText === "") {
                if (oNext === true) {
                    const squersCopy = squers.slice();
                    e.target.innerText = "o";
                    squersCopy[e.target.id] = "o";
                    setSquers(squersCopy)
                    setONext(false);
                    props.getWhoIsPlaying(igrac1)
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
                    props.getWhoIsPlaying(igrac2)
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
        props.getWhoIsPlaying(igrac1);
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
                    setWinner(igrac1);
                    setAvailableSquers(0);
                    setFirstPlayerWins(firstPlayerWins + 1);

                    return;
                } else {
                    setWinner(igrac2);
                    setAvailableSquers(0);
                    setSacondPlayerWins(sacondPlayerWins + 1);
                    return;
                }
            }
        }
        if (availableSquers === 1 && winner === "") {
            setTieGames(tieGames + 1)
        }
    }
    useEffect(() => {
        localStorage.setItem("historyOfGames", JSON.stringify(historyOfGames));
    }, [historyOfGames])
    return (
        <div>
            <Navbar firstPlayerWins={firstPlayerWins} sacondPlayerWins={sacondPlayerWins} tieGames={tieGames} igrac1={igrac1} igrac2={igrac2} />
            <div className="grid">

                {squers.map((squers, id) => (
                    <div className='squers' id={id} onClick={da} key={id}>

                    </div>
                ))}
            </div>
            <div>
                {occupied && (<p>That squere is occupied</p>)}
            </div>


            <EndGame winner={winner} availableSquers={availableSquers} igrac1={igrac1} igrac2={igrac2} setHistoryOfGames={setHistoryOfGames} historyOfGames={historyOfGames} newGame={newGame} />
            <History historyOfGames={historyOfGames} setHistoryOfGames={setHistoryOfGames} />
        </div>

    );
};

export default Board;