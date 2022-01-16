import createReducer from "../create-reducers";
import { SELECT_VIDEO_SINGLE } from "./actions";

const initialState = "";

const videoSingle = createReducer(initialState, {
  [SELECT_VIDEO_SINGLE]: (state, action) => action.payload.id,
});

export default videoSingle;
