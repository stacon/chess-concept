import { handleActions } from "redux-actions";

import {
  resetGame,
  updateBoard,
  setGameStatus,
  setSelectedSquare,
} from "./actions";
import { getInitialBoardWithIDs } from "./utils";
import GAME_STATUS from "../../reference-data/gameStatus";

const initialState = {
  board: getInitialBoardWithIDs(),
  status: GAME_STATUS.NOT_STARTED,
  selectedSquare: null,
};

const reducer = handleActions(
  {
    [resetGame.type]: () => ({
      ...initialState,
    }),
    [updateBoard.type]: (state, { payload: newBoard }) => ({
      ...state,
      board: newBoard,
    }),
    [setGameStatus.type]: (state, { payload: newStatus }) => ({
      ...state,
      status: newStatus,
    }),
    [setSelectedSquare.type]: (state, { payload: selectedSquare }) => ({
      ...state,
      selectedSquare,
    }),
  },
  initialState
);

export { reducer, initialState };
export default reducer;
