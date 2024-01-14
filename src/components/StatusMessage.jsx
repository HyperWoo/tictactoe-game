const statusMessage = ({ winner, isXNext, squares }) => {
  const noMovesLeft = squares.every(squareValue => squareValue != null);

  const nextPlayer = isXNext ? '❌' : '⭕';

  const renderStatusMessage = () => {
    if (winner) {
      return <div>Winner is {winner}</div>;
    }
    if (!winner && noMovesLeft) {
      return <div>Draw 😨</div>;
    }
    if (!winner && !noMovesLeft) {
      return <div>Next Player is {nextPlayer}</div>;
    }
    return null;
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};

export default statusMessage;
