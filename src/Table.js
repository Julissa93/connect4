import React from "react";
import TableRow from "./TableRow";

const Table = ({ gameBoard, handleClick }) => {
  return (
    <table>
      <tbody>
        {gameBoard.map((row, rowIndex) => {
          return (
            <TableRow
              key={rowIndex}
              row={row}
              value={rowIndex}
              handleClick={handleClick}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
