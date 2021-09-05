import { PIECES } from "../../../reference-data";
import squareCoordinates from "./squareCoordinates";

const hasOwnPiece = (squareId, board) => {
  const { y, x } = squareCoordinates(squareId);
  const piece = board[y][x].piece;

  const whitePieces = Object.values(PIECES.WHITE);
  return piece !== null && whitePieces.includes(piece);
};

export { hasOwnPiece };
export default hasOwnPiece;
