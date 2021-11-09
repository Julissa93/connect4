import TableCell from './TableCell';

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

export default TableRow