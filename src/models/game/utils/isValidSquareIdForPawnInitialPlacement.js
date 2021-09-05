import squareCoordinates from "./squareCoordinates";

const isValidSquareIdForPawnInitialPlacement = (squareId) =>
  squareCoordinates(squareId).y === 6;

export { isValidSquareIdForPawnInitialPlacement };
export default isValidSquareIdForPawnInitialPlacement;
