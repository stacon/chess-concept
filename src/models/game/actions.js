import { ActionCreator } from "../utils";

const namespacedActionCreator = ActionCreator("//models/BOARD");

const setBoard = namespacedActionCreator("SET_BOARD");
const resetGame = namespacedActionCreator("RESET_GAME");
const squareClicked = namespacedActionCreator("SQUARE_CLICKED");
const startGame = namespacedActionCreator("START_GAME");
const updateBoard = namespacedActionCreator("UPDATE_BOARD");
const setGameStatus = namespacedActionCreator("SET_GAME_STATUS");
const removeBoardIndicators = namespacedActionCreator(
  "REMOVE_BOARD_INDICATORS"
);
const onPlacePawn = namespacedActionCreator("ON_PLACE_PAWN");
const selectPiece = namespacedActionCreator("SELECT_PIECE");
const movePiece = namespacedActionCreator("MOVE_PIECE");
const setSelectedSquare = namespacedActionCreator("SET_SELECTED_SQUARE");

export {
  setBoard,
  resetGame,
  squareClicked,
  startGame,
  updateBoard,
  setGameStatus,
  removeBoardIndicators,
  onPlacePawn,
  selectPiece,
  movePiece,
  setSelectedSquare,
};
