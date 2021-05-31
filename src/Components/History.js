import React from 'react';

const History = (props) => {

    window.onload = function () {
        const data = JSON.parse(localStorage.getItem("historyOfGames"));
        if (data !== null) {
            props.setHistoryOfGames(data);
        }
    }
    return (
        <div className="history">
            <h3>History of all games: </h3>
            {props.historyOfGames.map((historyOfGames, id) => (
                <div className='games' key={id}>
                    <h4>{historyOfGames.day}.{historyOfGames.month}  {historyOfGames.hour}:{historyOfGames.minute}  &emsp;|&emsp; {historyOfGames.player1}&ensp; vs &ensp;{historyOfGames.player2}  &emsp;|&emsp;  {historyOfGames.winner === "" ? "tied" : historyOfGames.winner + " won"}</h4>
                </div>
            ))}
        </div>
    );
};

export default History;