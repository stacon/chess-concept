import cloneDeep from "lodash.clonedeep";
import { squareCoordinates } from ".";
import { PIECES } from "../../../reference-data";
import { whitePawn } from "./movements/pawn";

const availableMoves = (squareId, board) => {
  const boardCopy = cloneDeep(board);
  const { y, x } = squareCoordinates(squareId);
  const { piece } = board[y][x];

  switch (piece) {
    case PIECES.WHITE.PAWN: {
      return whitePawn(y, x, boardCopy);
    }
    default:
      return [];
  }
};

export { availableMoves };
export default availableMoves;
