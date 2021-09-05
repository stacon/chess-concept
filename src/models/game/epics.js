import { combineEpics, ofType } from "redux-observable";
import { filter, map, pluck, concatMap } from "rxjs/operators";
import { cloneDeep } from "lodash";

import { GAME_STATUS, PIECES } from "../../reference-data/";
import {
  isValidSquareIdForPawnInitialPlacement,
  squareCoordinates,
  hasOwnPiece,
  availableMoves as getAvailableMoves,
} from "./utils";
import {
  squareClicked,
  startGame,
  updateBoard,
  setGameStatus,
  removeBoardIndicators,
  onPlacePawn,
  selectPiece,
  movePiece,
  setSelectedSquare,
} from "./actions";
import { board, selectedSquare, status } from "./selectors";

const onSquareClickedEpic = (action$, state$) =>
  action$.pipe(
    ofType(squareClicked.type),
    pluck("payload"),
    filter(() => status(state$.value) !== GAME_STATUS.NOT_STARTED),
    map((clickedSquareId) => {
      const isPlacingPawn =
        status(state$.value) === GAME_STATUS.SELECTING_STARTING_POSITION;
      const isSelectingPiece =
        status(state$.value) === GAME_STATUS.PLAYING &&
        !selectedSquare(state$.value);
      const isMovingPiece =
        status(state$.value) === GAME_STATUS.PLAYING &&
        selectedSquare(state$.value);

      if (isPlacingPawn) {
        return onPlacePawn(clickedSquareId);
      }

      if (isSelectingPiece) {
        return selectPiece(clickedSquareId);
      }

      if (isMovingPiece) {
        return movePiece(clickedSquareId);
      }
    })
  );

const onPlacePawnEpic = (action$, state$) =>
  action$.pipe(
    ofType(onPlacePawn.type),
    pluck("payload"),
    filter(isValidSquareIdForPawnInitialPlacement),
    concatMap((clickedSquareId) => {
      const boardCopy = cloneDeep(board(state$.value));
      const { y, x } = squareCoordinates(clickedSquareId);

      boardCopy[y][x].piece = PIECES.WHITE.PAWN;

      return [
        updateBoard(boardCopy),
        removeBoardIndicators(),
        setGameStatus(GAME_STATUS.PLAYING),
      ];
    })
  );

const onPieceSelectionEpic = (action$, state$) =>
  action$.pipe(
    ofType(selectPiece.type),
    pluck("payload"),
    filter((squareId) => hasOwnPiece(squareId, board(state$.value))),
    concatMap((squareId) => {
      const selectedSquareId = selectedSquare(state$.value);
      const hasSelectedTheSameSquare = selectedSquareId === squareId;

      if (hasSelectedTheSameSquare) {
        return [setSelectedSquare(null), removeBoardIndicators()];
      }

      const boardCopy = cloneDeep(board(state$.value));
      const { y, x } = squareCoordinates(squareId);
      const clickedSquare = boardCopy[y][x];
      clickedSquare.isHighlighted = !clickedSquare.isHighlighted;

      const availableMoves = getAvailableMoves(squareId, boardCopy);

      availableMoves.forEach(({ x: xDiff, y: yDiff }) => {
        const newX = x + xDiff;
        const newY = y + yDiff;

        boardCopy[newY][newX].isHighlighted = true;
      });

      if (!availableMoves.length) {
        return [removeBoardIndicators()];
      }

      return [setSelectedSquare(squareId), updateBoard(boardCopy)];
    })
  );

const onMovePieceEpic = (action$, state$) =>
  action$.pipe(
    ofType(movePiece.type),
    pluck("payload"),
    concatMap((squareToMoveAtId) => {
      const boardCopy = cloneDeep(board(state$.value));
      const { y: targetY, x: targetX } = squareCoordinates(squareToMoveAtId);

      const selectedSquareId = selectedSquare(state$.value);
      const { x: oldX, y: oldY } = squareCoordinates(selectedSquareId);

      const availableMoves = getAvailableMoves(selectedSquareId, boardCopy);
      const isMoveValid = availableMoves.some(({ x: xDiff, y: yDiff }) => {
        const newX = oldX + xDiff;
        const newY = oldY + yDiff;

        return newX === targetX && newY === targetY;
      });

      let actions = [];

      if (isMoveValid) {
        const movingPiece = boardCopy[oldY][oldX].piece;
        boardCopy[targetY][targetX].piece = movingPiece;
        boardCopy[oldY][oldX].piece = null;
        actions = [...actions, updateBoard(boardCopy)];
      }

      actions = [...actions, setSelectedSquare(null), removeBoardIndicators()];

      return actions;
    })
  );

const onRemoveIndicatorsEpic = (action$, state$) =>
  action$.pipe(
    ofType(removeBoardIndicators.type),
    map(() => {
      const boardCopy = cloneDeep(board(state$.value));
      boardCopy.forEach((row) =>
        row.forEach((square) => (square.isHighlighted = false))
      );

      return updateBoard(boardCopy);
    })
  );

const onGameStartEpic = (action$, state$) =>
  action$.pipe(
    ofType(startGame.type),
    concatMap(() => {
      const oldRows = board(state$.value);
      const highlightedRow = oldRows
        .filter((row, yIndex) => yIndex === 6)
        .map((row) =>
          row.map((square) => ({ ...square, isHighlighted: true }))
        );

      const newBoardState = [
        ...oldRows.slice(0, 6),
        ...highlightedRow,
        ...oldRows.slice(7),
      ];

      return [
        updateBoard(newBoardState),
        setGameStatus(GAME_STATUS.SELECTING_STARTING_POSITION),
      ];
    })
  );

export {
  onSquareClickedEpic,
  onGameStartEpic,
  onPlacePawnEpic,
  onRemoveIndicatorsEpic,
  onPieceSelectionEpic,
  onMovePieceEpic,
};
export default combineEpics(
  onSquareClickedEpic,
  onPieceSelectionEpic,
  onPlacePawnEpic,
  onGameStartEpic,
  onRemoveIndicatorsEpic,
  onMovePieceEpic
);
