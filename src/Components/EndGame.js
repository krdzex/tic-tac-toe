import React from 'react';

const EndGame = (props) => {
    const showWinner = () => {
        if (props.winner === "") {

            return "DRAW!";
        } else {
            return "The " + props.winner + " wins";
        }
    }
    const startNewGame = () => {
        props.newGame(9, "");
        props.setHistoryOfGames([...props.historyOfGames, {
            id: new Date().getTime(),
            day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            player1: props.player1,
            player2: props.player2,
            winner: props.winner
        }
        ])
    }
    return (
        <div>
            { props.availableSquers === 0 && (
                <div className="endGame">
                    <h3 >{showWinner()}</h3>
                    <button onClick={startNewGame}>Wanna try again?</button>
                </div>
            )}
        </div>

    );
};

export default EndGame;