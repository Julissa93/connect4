import React, { Component } from "react";

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

  checkDiagonal = (x, y) => {
    console.log(`board[${x}][${y}] = ` , this.state.gameBoard[x][y])
    let count = 0, {gameBoard, currentPlayer} = this.state.gameBoard
    //left diagonal

    //right diagonal 
    if(count === 4) {
        this.setState({isWon: true})
    }
  }

  handleClick = (col) => {
    let gameBoardCopy = this.state.gameBoard;
    let x, y
    if (gameBoardCopy[0][col] !== null) {
      //if cell at the top of the column selected is equal to anything other than null then the column is considered full
      console.log("column is full!! try again :(");
      return;
    } else if (gameBoardCopy[gameBoardCopy.length - 1][col] === null) {
      //if cell at the bottom of the column selected is equal to 0 then the column is considered empty
      gameBoardCopy[gameBoardCopy.length - 1][col] = this.state.currentPlayer;
      x = gameBoardCopy.length - 1
      y = col
    } else {
      //look for next avail space
      //number of available spaces in a given column is = number of rows in gameBoard
      for (let i = 0; i < gameBoardCopy.length; i++) {
        if (gameBoardCopy[i][col] !== null) {
          gameBoardCopy[i - 1][col] = this.state.currentPlayer;
          x = i - 1
          y = col
          break;
        }
      }
    }

    //check if game is won? idk
    //check diagonal by passing coordinates of the recently dropped checker
    this.checkDiagonal(x, y)
    //check horizontal
    //check vertical

    //toggle player
    if (this.state.currentPlayer === 1) {
      //player 1s turn
      this.setState({ currentPlayer: 0 }); //after p1 goes, it's p2s turn
    } else {
      this.setState({ currentPlayer: 1 });
    }

    this.setState({ gameBoard: gameBoardCopy });
  };

  render() {
    let { gameBoard, currentPlayer } = this.state;
    return (
      <div>
        {currentPlayer === 1 ? (
          <h3> Current Player: Player 1 </h3>
        ) : (
          <h3>Current Player: AI</h3>
        )}
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
  let color = "";
  if (col === 1) {
    color = "red";
  } else if (col === 0) {
    color = "blue";
  }
  return (
    <td
      className={color}
      value={col}
      onClick={() => handleClick(colIndex, col)}
    ></td>
  );
};
