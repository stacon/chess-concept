const darkBackground = (y, x) =>
  (y % 2 !== 0 && x % 2 === 0) || (y % 2 === 0 && x % 2 !== 0);

export { darkBackground };
export default darkBackground;
