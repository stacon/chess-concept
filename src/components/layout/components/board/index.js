import { withStyles } from "@material-ui/styles";

import Board from "./Board";
import styles from "./styles";
import withBoardState from "./withBoardState";

const BoardComponentStyled = withStyles(styles)(Board);
const BoardComponentStateful = withBoardState(BoardComponentStyled);

export { Board, BoardComponentStyled, BoardComponentStateful };
export default BoardComponentStateful;
