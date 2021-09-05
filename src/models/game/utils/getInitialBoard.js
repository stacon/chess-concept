/**
 * @param {string} rowDescription using FEN row description
 * @returns {string[][]} board
 */
const boardRow = (rowDescription) => {
  const rowParts = rowDescription.split("");

  return rowParts.reduce((row, part) => {
    if (!isNaN(Number(part))) {
      const numberOfEmptySquares = Number(part);

      return [
        ...row,
        ...Array(numberOfEmptySquares).fill({
          piece: null,
          isHighlighted: false,
        }),
      ];
    }
    return [...row, { piece: part, isHighlighted: false }];
  }, []);
};

const emptyRow = () => boardRow("8");

const getInitialBoard = () => [
  emptyRow(),
  boardRow("2p5"),
  ...Array(6).fill(emptyRow()),
];

export { getInitialBoard };
export default getInitialBoard;
