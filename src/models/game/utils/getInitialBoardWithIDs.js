import { getInitialBoard } from ".";

const getInitialBoardWithIDs = () => {
  const board = getInitialBoard();
  const newBoard = board.map((row, rowIndex) =>
    row.map((square, columnIndex) => ({
      ...square,
      id: `${rowIndex}-${columnIndex}`,
    }))
  );

  return newBoard;
};

export { getInitialBoardWithIDs };
export default getInitialBoardWithIDs;
