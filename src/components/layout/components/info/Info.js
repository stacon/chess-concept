import { Grid, Typography } from "@material-ui/core";

const Info = () => (
  <Grid item>
    <Typography variant="overline">
      <a href="https://github.com/stacon/chess-concept" target="_blank">
        One Pawn Chess concept
      </a>{" "}
      created by{" "}
      <a href="https://github.com/stacon" target="_blank">
        stacon
      </a>
    </Typography>
  </Grid>
);

export { Info };
export default Info;
