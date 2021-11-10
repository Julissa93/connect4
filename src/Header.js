import React from "react";

const Header = ({ isWon, currPlayer, reset }) => {
  return (
    <div className="heading">
      <h1>Connect 4</h1>
      <div className="scoreboard">
        {isWon === true ? (
          <h2>&#127881; WINNER: {currPlayer} &#127881;</h2>
        ) : (
          <h2>Current Player: {currPlayer}</h2>
        )}
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Header;