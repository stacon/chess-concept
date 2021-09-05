const Square = ({ classes, Piece, onClick, isHighlighted, darkBackground }) => (
  <div
    className={`${classes.square}  ${
      darkBackground ? classes.darkBackground : ""
    }`}
    onClick={onClick}
  >
    <div
      className={`${classes.innerContainer} ${
        isHighlighted ? classes.highlighted : ""
      }`}
    >
      {Piece && <Piece />}
    </div>
  </div>
);

export { Square };
export default Square;
