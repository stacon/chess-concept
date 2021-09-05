import { PIECES } from "../../../../reference-data";

const STARTING_COLUMN_INDEX = 0;
const ENDING_COLUMN_INDEX = 7;
const WHITE_PAWN_START_Y_INDEX = 6;
const WHITE_PAWN_END_Y_INDEX = 0;

const BLACK_PAWN_START_Y_INDEX = 1;
const BLACK_PAWN_END_Y_INDEX = 7;

const pawn = (color) => (yIndex, xIndex, board) => {
  const isWhite = color === PIECES.WHITE.color;

  const startingRow = isWhite
    ? WHITE_PAWN_START_Y_INDEX
    : BLACK_PAWN_START_Y_INDEX;

  const endingRow = isWhite ? WHITE_PAWN_END_Y_INDEX : BLACK_PAWN_END_Y_INDEX;

  const moveModifier = isWhite ? -1 : 1;

  const PAWN_MOVES = {
    INITIAL: { y: moveModifier * 2, x: 0 },
    SIMPLE: { y: moveModifier, x: 0 },
    ATTACK_LEFT: { y: moveModifier, x: -1 },
    ATTACK_RIGHT: { y: moveModifier, x: 1 },
  };

  let availableMoves = [];

  const reachedEndingRow = yIndex === endingRow;
  const onStartingColumn = xIndex === STARTING_COLUMN_INDEX;
  const onEndingColumn = xIndex === ENDING_COLUMN_INDEX;

  if (reachedEndingRow) return availableMoves;

  const hasPiece1StepAhead = !!board[yIndex + moveModifier][xIndex].piece;
  const hasPiece2StepsAhead =
    !!board[yIndex + moveModifier * 2]?.[xIndex].piece;
  const hasEnemyPieceOnFrontLeft =
    !onStartingColumn && !!board[yIndex + moveModifier]?.[xIndex - 1].piece;
  const hasEnemyPieceOnFrontRight =
    !onEndingColumn && !!board[yIndex + moveModifier]?.[xIndex + 1].piece;

  const isOnStartingRow = yIndex === startingRow;
  if (isOnStartingRow && !hasPiece2StepsAhead && !hasPiece1StepAhead) {
    availableMoves = [...availableMoves, PAWN_MOVES.INITIAL];
  }
  if (!hasPiece1StepAhead) {
    availableMoves = [...availableMoves, PAWN_MOVES.SIMPLE];
  }
  if (hasEnemyPieceOnFrontLeft) {
    availableMoves = [...availableMoves, PAWN_MOVES.ATTACK_LEFT];
  }
  if (hasEnemyPieceOnFrontRight) {
    availableMoves = [...availableMoves, PAWN_MOVES.ATTACK_RIGHT];
  }

  return availableMoves;
};

const whitePawn = pawn(PIECES.WHITE.color);
const blackPawn = pawn(PIECES.BLACK.color);

export { pawn, whitePawn, blackPawn };
export default pawn;
