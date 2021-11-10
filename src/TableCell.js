const TableCell = ({ col, colIndex, handleClick }) => {
  let color = "";
  if (col === 1) {
    color = "red";
  } else if (col === 0) {
    color = "yellow";
  }
  return (
    <td value={col} onClick={() => handleClick(colIndex, col)}>
        <div className={`cell ${color}`}></div>
    </td>
  );
};
export default TableCell;
