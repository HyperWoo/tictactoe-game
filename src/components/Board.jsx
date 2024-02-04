import Square from './Square';

const Board = ({ squares, handelSquareClick, winningSquares }) => {
  const renderSquare = position => {
    // [0, 1 ,2]
    const isWinningSquare = winningSquares.includes(position);

    return (
      <Square
        value={squares[position]}
        onClickSquare={() => handelSquareClick(position)}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
