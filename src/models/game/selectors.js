const board = ({ game }) => game?.board;
const status = ({ game }) => game?.status;
const selectedSquare = ({ game }) => game?.selectedSquare;

export { board, selectedSquare, status };
