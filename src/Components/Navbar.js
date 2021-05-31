import React from 'react';

const Navbar = (props) => {
    return (
        <div className="navBar">
            <h3>&emsp;&emsp;&emsp;Tic Tac Toe&emsp;&emsp;&emsp;{props.player1}: {props.firstPlayerWins} &emsp;&emsp;&emsp;&emsp; {props.player2}: {props.sacondPlayerWins} &emsp;&emsp;&emsp;&emsp; Ties:{props.tieGames}</h3>
            <hr />
        </div>
    );
};

export default Navbar;