import { withStyles } from "@material-ui/core";

import Square from "./Square";
import styles from "./styles";
import withSquareState from "./withSquareState";

const SquareComponentStyled = withStyles(styles)(Square);
const SquareComponentStateful = withSquareState(SquareComponentStyled);

export { Square, SquareComponentStyled, SquareComponentStateful };
export default SquareComponentStateful;
