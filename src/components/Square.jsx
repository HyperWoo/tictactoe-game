// eslint-disable-next-line react/prop-types
const Square = ({ value, onClickSquare }) => {
  return (
    <button type="button" className="square" onClick={onClickSquare}>
      {value}
    </button>
  );
};

export default Square;
