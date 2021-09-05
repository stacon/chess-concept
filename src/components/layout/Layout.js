import { Grid } from "@material-ui/core";

import { ActionsArea, Board, Info } from "./components";

const Layout = ({ classes, actions }) => (
  <Grid
    container
    className={classes.container}
    justifyContent="center"
    alignItems="center"
  >
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      className={classes.boardAreaContainer}
    >
      <div className={classes.boardContainer}>
        <Board />
      </div>
      <ActionsArea actions={actions} />
    </Grid>
    <Info />
  </Grid>
);

export { Layout };
export default Layout;
