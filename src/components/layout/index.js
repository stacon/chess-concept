import { withStyles } from "@material-ui/styles";
import Layout from "./Layout";
import styles from "./styles";
import withLayoutState from "./withLayoutState";

const LayoutComponentStyled = withStyles(styles)(Layout);
const LayoutComponentStateful = withLayoutState(LayoutComponentStyled);

export { Layout, LayoutComponentStyled, LayoutComponentStateful };
export default LayoutComponentStateful;
