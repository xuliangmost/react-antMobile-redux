import createReducer from '../../tools/createReducer'
import * as types from "./types";

export const a = createReducer(null, {
  [types.HHH] (state, action) {
    return action.payload
  }
});