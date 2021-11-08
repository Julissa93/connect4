const isValidCell = (row, col, board) => {
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[row].length
    ) {
      return false;
    }
    return true;
  };
//backslash diagonal
const checkBackslashDiagonal = (row, col, board, currPlayer) => {
  let visited = {};
  const checkDiagonalHelper = (row, col) => {
    if (
      isValidCell(row, col, board) === false || board[row][col] !== currPlayer ||
      visited[[row, col]]
    ) {
      return;
    }
    if (!visited[[row, col]]) {
      visited[[row, col]] = true;
      checkDiagonalHelper(row + 1, col + 1);
      checkDiagonalHelper(row - 1, col - 1);
    }
  };
  checkDiagonalHelper(row, col);
  return Object.keys(visited).length;
};

const checkForwardSlashDiagonal = (row, col, board, currPlacoler) => {
  let visited = {};
  const checkDiagonalHelper = (row, col) => {
    if (
      isValidCell(row, col, board) === false ||
      board[row][col] !== currPlacoler ||
      visited[[row, col]]
    ) {
      return;
    }
    if (!visited[[row, col]]) {
      visited[[row, col]] = true;
      checkDiagonalHelper(row + 1, col - 1);
      checkDiagonalHelper(row - 1, col + 1);
    }
  };
  checkDiagonalHelper(row, col);
  return Object.keys(visited).length;
};

const checkHorizontal = (row, col, board, currPlayer) => {
  let visited = {};
  const checkHorizontalHelper = (row, col) => {
    if (
      isValidCell(row, col, board) === false ||
      board[row][col] !== currPlayer ||
      visited[[row, col]]
    ) {
      return;
    }
    if (!visited[[row, col]]) {
      visited[[row, col]] = true;
      checkHorizontalHelper(row, col - 1);
      checkHorizontalHelper(row, col + 1);
    }
  };
  checkHorizontalHelper(row, col);
  return Object.keys(visited).length;
};

const checkVertical = (row, col, board, currPlayer) => {
  let visited = {};
  const checkVerticalHelper = (row, col) => {
    if (
      isValidCell(row, col, board) === false ||
      board[row][col] !== currPlayer ||
      visited[[row, col]]
    ) {
      return;
    }
    if (!visited[[row, col]]) {
      visited[[row, col]] = true;
      checkVerticalHelper(row + 1, col);
    }
  };

  checkVerticalHelper(row, col);
  return Object.keys(visited).length;
};

const checkIfGameIsWon = (row, col, board, currentPlayer) => {
    console.log('row, ', col, 'col, ', col)
  if (
    checkBackslashDiagonal(row, col, board, currentPlayer) === 4 ||
    checkForwardSlashDiagonal(row, col, board, currentPlayer) === 4 ||
    checkHorizontal(row, col, board, currentPlayer) === 4 ||
    checkVertical(row, col, board, currentPlayer) === 4
  ) {
    return true;
  }
  return false;
};

export default checkIfGameIsWon