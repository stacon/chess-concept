import { compose } from "redux";
import { connect } from "react-redux";
import Piece from "react-chess-pieces";

import { squareClicked } from "../../../../../../models/game/actions";

const withSquareState = (WrappedComponent) => (props) => {
  const { id, piece, squareClicked } = props;

  const handleClick = () => {
    squareClicked(id);
  };

  return (
    <WrappedComponent
      {...props}
      Piece={() => <>{piece ? <Piece piece={piece} /> : null}</>}
      onClick={handleClick}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  squareClicked: (id) => dispatch(squareClicked(id)),
});

export { withSquareState };
export default compose(connect(null, mapDispatchToProps), withSquareState);
