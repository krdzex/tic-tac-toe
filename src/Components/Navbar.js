import React from 'react';

const Navbar = (props) => {
    return (
        <div>
            <p>{props.igrac1}: {props.firstPlayerWins} --- {props.igrac2}: {props.sacondPlayerWins} ---- Ties:{props.tieGames}</p>
        </div>
    );
};

export default Navbar;