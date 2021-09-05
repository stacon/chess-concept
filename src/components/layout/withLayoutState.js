import { connect } from "react-redux";
import { compose } from "redux";
import { status, startGame, resetGame } from "../../models/game";
import GAME_STATUS from "../../reference-data/gameStatus";

const withLayoutState = (WrappedComponent) => (props) => {
  const { status, startGame, resetGame } = props;
  const actions = [];

  if (status === GAME_STATUS.NOT_STARTED) {
    actions.push({
      id: "place-pawn",
      label: "Place Pawn",
      color: "primary",
      onClick: startGame,
    });
  }

  if (status !== GAME_STATUS.NOT_STARTED) {
    actions.push({
      id: "reset",
      label: "Reset",
      color: "secondary",
      onClick: resetGame,
    });
  }

  return <WrappedComponent {...props} actions={actions} />;
};

const mapStateToProps = (state) => ({
  status: status(state),
});

const mapDispatchToProps = (dispatch) => ({
  startGame: () => dispatch(startGame()),
  resetGame: () => dispatch(resetGame()),
});

export { withLayoutState };
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLayoutState
);
