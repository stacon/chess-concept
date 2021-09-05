import { Grid } from "@material-ui/core";

import { Square } from "./components";
import { darkBackground } from "./utils";

const rowId = (y) => `r-${y}`;

const Board = ({ classes, board }) => (
  <div className={classes.container}>
    {board.map((row, y) => (
      <Grid key={rowId(y)} container>
        {row.map((square, x) => (
          <Square
            key={square.id}
            id={square.id}
            darkBackground={darkBackground(y, x)}
            piece={square.piece}
            isHighlighted={square.isHighlighted}
          />
        ))}
        <br />
      </Grid>
    ))}
  </div>
);

export { Board };
export default Board;
