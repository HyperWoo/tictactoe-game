import './style.scss';
import { useState } from 'react';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  //PLAYER STATUS
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);

  const handelSquareClick = clickedPosition => {
    //'null', '❌', '⭕'
    if (squares[clickedPosition] || winner) {
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

  return (
    <div className="app">
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares}/>
      <Board squares={squares} handelSquareClick={handelSquareClick} />
    </div>
  );
}

export default App;
