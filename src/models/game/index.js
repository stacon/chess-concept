import reducer, { initialState } from "./reducer";
import epics from "./epics";
import {
  resetGame,
  squareClicked,
  setBoard,
  startGame,
  updateBoard,
  setGameStatus,
  removeBoardIndicators,
  onPlacePawn,
  selectPiece,
  setSelectedSquare,
  movePiece,
} from "./actions";
import { board, status, selectedSquare } from "./selectors";

export {
  reducer,
  initialState,
  epics,
  resetGame,
  squareClicked,
  setBoard,
  board,
  status,
  startGame,
  updateBoard,
  setGameStatus,
  removeBoardIndicators,
  onPlacePawn,
  selectPiece,
  setSelectedSquare,
  selectedSquare,
  movePiece,
};
