const styles = ({ palette }) => ({
  "@global": {
    "@keyframes pulse": {
      "0%": {
        border: `2px solid ${palette.grey[300]}`,
      },
      "50%": {
        border: `2px solid ${palette.grey[400]}`,
      },
      "100%": {
        border: `2px solid ${palette.grey[300]}`,
      },
    },
  },
  square: {
    display: "flex",
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    border: "2px solid transparent",
    minHeight: 60,
    minWidth: 60,
  },
  darkBackground: {
    backgroundColor: palette.grey[100],
  },
  selected: {},
  highlighted: {
    animation: "pulse 2s ease-in-out infinite",
  },
});

export default styles;
