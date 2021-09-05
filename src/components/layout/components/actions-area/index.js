import { withStyles } from "@material-ui/core";

import ActionsArea from "./ActionsArea";
import styles from "./styles";

const ActionsAreaComponentStyled = withStyles(styles)(ActionsArea);

export { ActionsArea, ActionsAreaComponentStyled };
export default ActionsAreaComponentStyled;
