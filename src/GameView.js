import React, { Component } from "react";
import checkIfGameIsWon from "./CheckWins";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 1,
      isWon: false,
      gameBoard: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ],
    };
  }

  reset = () => {
    const { gameBoard } = this.state;
    let newBoard = [];
    for (let i = 0; i < gameBoard.length; i++) {
      newBoard[i] = new Array(gameBoard[i].length).fill(null);
    }
    this.setState({ gameBoard: newBoard });
  };

  togglePlayer = () => {
    const { currentPlayer } = this.state;
    if (currentPlayer === 1) {
      this.setState({ currentPlayer: 0 });
    } else {
      this.setState({ currentPlayer: 1 });
    }
  };

  checkForWin = (x, y) => {
    const { gameBoard, currentPlayer } = this.state;
    if (checkIfGameIsWon(x, y, gameBoard, currentPlayer) === true) {
      this.setState({ isWon: true });
      return true;
    }
    return false;
  };

  handleClick = (col) => {
    const { currentPlayer } = this.state;
    if (currentPlayer === 1) {
      this.dropChecker(col);
    }
  };

  dropChecker = (selectedColumn) => {
    let { gameBoard, isWon, currentPlayer } = this.state;
    let x, y;
    if (isWon === true) {
      console.log("game is won cannot continue");
      return;
    }
    if (gameBoard[0][selectedColumn] !== null) {
      console.log("column is full!! try again :(");
      return;
    } else if (gameBoard[gameBoard.length - 1][selectedColumn] === null) {
      gameBoard[gameBoard.length - 1][selectedColumn] = currentPlayer;
      x = gameBoard.length - 1;
      y = selectedColumn;
    } else {
      for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i][selectedColumn] !== null) {
          gameBoard[i - 1][selectedColumn] = currentPlayer;
          x = i - 1;
          y = selectedColumn;
          break;
        }
      }
    }

    if (this.checkForWin(x, y) === false) {
      this.togglePlayer();
    }

    this.setState({ gameBoard });
  };

  randomizer = () => {
    const { gameBoard } = this.state;
    const column = Math.floor(Math.random() * gameBoard.length);
    this.dropChecker(column);
  };

  getCurrentPlayer = () => {
    const { currentPlayer } = this.state;
    if (currentPlayer === 1) {
      return "Player 1";
    } else {
      return "AI";
    }
  };

  componentDidUpdate(prevState, prevProps) {
    const { currentPlayer } = this.state;
    if (currentPlayer === 0) {
      setTimeout(() => this.randomizer(), 3000);
    }
  }

  render() {
    let { gameBoard, isWon } = this.state;
    let currPlayer = this.getCurrentPlayer();
    return (
      <div className="container">
          <h1>Connect 4</h1>
        <div className="heading" >
          {isWon === true ? (
            <h2>WINNER: {currPlayer}</h2>
          ) : (
            <h2>Current Player: {currPlayer}</h2>
          )}
        
        <button onClick={this.reset}>Reset</button>
        </div>
        <table>
          <tbody>
            {gameBoard.map((row, rowIndex) => {
              return (
                <TableRow
                  key={rowIndex}
                  row={row}
                  value={rowIndex}
                  handleClick={this.handleClick}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const TableRow = ({ row, value, handleClick }) => {
  return (
    <tr>
      {row.map((col, colIndex) => (
        <TableCell
          key={colIndex}
          col={col}
          colIndex={colIndex}
          handleClick={handleClick}
        />
      ))}
    </tr>
  );
};

const TableCell = ({ col, colIndex, handleClick }) => {
  let color = "white";
  if (col === 1) {
    color = "red";
  } else if (col === 0) {
    color = "blue";
  }
  return (
    <td value={col} onClick={() => handleClick(colIndex, col)}>
      <div className={color}></div>
    </td>
  );
};
