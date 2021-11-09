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
export default TableCell;
