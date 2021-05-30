import React from 'react';

const EndGame = (props) => {
    const showWinner = () => {
        if (props.winner === "") {

            return "Game is tied!";
        } else {
            return "You are winner " + props.winner;
        }
    }
    console.log(props.historyOfGames)
    const startNewGame = () => {
        props.newGame(9, "");
        console.log([props.historyOfGames])
        props.setHistoryOfGames([...props.historyOfGames, {
            id: new Date().getTime(),
            day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            player1: props.igrac1,
            player2: props.igrac2,
            winner: props.winner
        }
        ])
    }





    return (
        <div>
            { props.availableSquers === 0 && (
                <div className="left">
                    <p>{showWinner()}</p>
                    <button onClick={startNewGame}>Wanna try again?</button>
                </div>
            )}

            <div>

            </div>
        </div>

    );
};

export default EndGame;