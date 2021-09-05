import { combineEpics } from "redux-observable";
import {
  reducer as gameReducer,
  epics as gameEpics,
  initialState as gameInitialState,
} from "../models/game";

const initialReducer = {
  game: gameReducer,
};

const initialState = {
  game: gameInitialState,
};

const initialEpics = combineEpics(gameEpics);

export { initialReducer, initialEpics, initialState };
