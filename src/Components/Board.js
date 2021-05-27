import React, { useCallback, useEffect, useState } from 'react';
import EndGame from './EndGame';
const Board = (props) => {
    const [squers, setSquers] = useState(Array(9).fill(null));
    const [oNext, setONext] = useState(false);
    const igrac1 = props.igrac1;
    const igrac2 = props.igrac2;
    const [occupied, setOccupied] = useState(false);
    const [winner, setWinner] = useState("");
    const [availableSquers, setAvailableSquers] = useState(9);

    const chackingWinner = useCallback(() => {
        const winningCombinations =
            [[0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 4, 8], [2, 4, 6], [0, 3, 6],
            [1, 4, 7], [2, 5, 8]];
        for (var i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (squers[a] && squers[a] === squers[b] && squers[a] === squers[c]) {
                if (squers[a] === "x") {
                    setWinner(igrac1);
                } else {
                    setWinner(igrac2);
                }
            }
        }
    }, [igrac1, igrac2, squers])


    const da = (e) => {
        if (availableSquers > 0) {
            if (e.target.innerText === "") {
                if (oNext === true) {
                    const squersCopy = [...squers];
                    e.target.innerText = "o";
                    squersCopy[e.target.id] = "o";
                    setSquers(squersCopy)
                    setONext(false);
                    props.getWhoIsPlaying(igrac1)
                    setOccupied(false);
                    setAvailableSquers(availableSquers - 1)
                    return;
                } else {
                    const squersCopy = [...squers];
                    e.target.innerText = "x";
                    squersCopy[e.target.id] = "x";
                    setSquers(squersCopy)
                    setONext(true);
                    props.getWhoIsPlaying(igrac2)
                    setOccupied(false);
                    setAvailableSquers(availableSquers - 1)
                    return;
                }
            }
            return setOccupied(true);
        }
        return setWinner("Tied")
    }
    console.log(availableSquers)
    useEffect(() => {

        if (availableSquers === 0) {
            setWinner("Tied")
            chackingWinner();
        } else {
            chackingWinner();
        }
    }, [setWinner, chackingWinner, availableSquers]);

    return (<div>
        <div className="grid">
            {squers.map((squers, id) => (
                <div className='squers' id={id} onClick={da} key={id}>

                </div>
            ))}
        </div>
        <div>
            {occupied && (<p>That squere is occupied</p>)}
        </div>
        <EndGame winner={winner} />
    </div>

    );
};

export default Board;