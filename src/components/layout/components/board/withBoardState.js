import { connect } from "react-redux";
import { board } from "../../../../models/game";

const mapStateToProps = (state) => ({
  board: board(state),
});

export default connect(mapStateToProps);
