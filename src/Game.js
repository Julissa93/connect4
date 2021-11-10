import React, { Component } from "react";
import checkIfGameIsWon from "./utils";
import Table from "./Table";
import Header from "./Header";

export default class GameView extends Component {
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
      ]
    };
  }

  reset = () => {
    const { gameBoard } = this.state;
    let newBoard = [];
    for (let i = 0; i < gameBoard.length; i++) {
      newBoard[i] = new Array(gameBoard[i].length).fill(null);
    }
    this.setState({ gameBoard: newBoard, currentPlayer: 1, isWon: false });
  };

  togglePlayer = () => {
    const { currentPlayer } = this.state;
    if (currentPlayer === 1) {
      this.setState({ currentPlayer: 0 });
    } else {
      this.setState({ currentPlayer: 1 });
    }
  };

  checkForWin = (row, column) => {
    const { gameBoard, currentPlayer } = this.state;
    if (checkIfGameIsWon(row, column, gameBoard, currentPlayer) === true) {
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
    const { gameBoard, isWon, currentPlayer } = this.state;
    const columnIsFull = gameBoard[0][selectedColumn] !== null ? true : false;
    let gameBoardCopy = gameBoard;
    let row = gameBoardCopy.length - 1;
    let nextAvailableSpace;

    if (isWon === true) {
      return;
    }
    if (columnIsFull) {
      return;
    } else {
      while (row >= 0) {
        if (gameBoardCopy[row][selectedColumn] === null) {
          nextAvailableSpace = row;
          gameBoardCopy[nextAvailableSpace][selectedColumn] = currentPlayer;
          break;
        }
        row--;
      }
      if (this.checkForWin(nextAvailableSpace, selectedColumn) === false) {
        this.togglePlayer();
      }
      this.setState({ gameBoard: gameBoardCopy });
    }
  };

  randomizer = () => {
    const { gameBoard } = this.state;
    const column = Math.floor(Math.random() * gameBoard.length);
    this.dropChecker(column);
  };

  getCurrentPlayer = () => {
    const { currentPlayer } = this.state;
    if (currentPlayer === 1) {
      return "Human";
    } else {
      return "AI";
    }
  };

  componentDidUpdate(prevState, prevProps) {
    const { currentPlayer } = this.state;
    if (currentPlayer === 0) {
      setTimeout(() => this.randomizer(), 2000);
    }
  }

  render() {
    const { gameBoard, isWon } = this.state;
    const currPlayer = this.getCurrentPlayer();
    return (
      <div className="container">
        <Header currPlayer={currPlayer} isWon={isWon} reset={this.reset} />
        <Table gameBoard={gameBoard} handleClick={this.handleClick} />
      </div>
    );
  }
}
