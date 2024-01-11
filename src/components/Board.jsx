/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  //PLAYER STATUS
  const [isXNext, setIsXNext] = useState(false);

  const handelSquareClick = clickedPosition => {
    //'null', '❌', '⭕'
    if (squares[clickedPosition]) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? '❌' : '⭕';
        }
        return squareValue;
      });
    });
    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  const renderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClickSquare={() => handelSquareClick(position)}
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
