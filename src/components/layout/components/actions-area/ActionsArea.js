import { Button, Grid } from "@material-ui/core";

const ActionsArea = ({ classes, actions }) => (
  <Grid item>
    {actions.map(({ id, onClick, color, label }) => (
      <Button
        key={id}
        variant="contained"
        color={color}
        onClick={onClick}
        classes={{ root: classes.button }}
      >
        {label}
      </Button>
    ))}
  </Grid>
);

export { ActionsArea };
export default ActionsArea;
