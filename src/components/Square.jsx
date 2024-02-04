// eslint-disable-next-line react/prop-types
const Square = ({ value, onClickSquare, isWinningSquare }) => {
  return (
    <button
      type="button"
      className={`square ${isWinningSquare ? 'winning' : ''}`}
      onClick={onClickSquare}
    >
      {value}
    </button>
  );
};

export default Square;
