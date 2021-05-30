import React from 'react';

const History = (props) => {

    window.onload = function () {
        const data = JSON.parse(localStorage.getItem("historyOfGames"));
        if (data !== null) {
            props.setHistoryOfGames(data);
        }
    }
    return (
        <div>
            <h3>History of all games: </h3>
            {props.historyOfGames.map((historyOfGames, id) => (
                <div className='games' id={id} key={id}>
                    <p>{historyOfGames.day}.{historyOfGames.month}  {historyOfGames.hour}:{historyOfGames.minute}   {historyOfGames.player1} vs {historyOfGames.player2} : {historyOfGames.winner === "" ? "tied" : historyOfGames.winner + " won"} </p>
                </div>
            ))}
        </div>
    );
};

export default History;