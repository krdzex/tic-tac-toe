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