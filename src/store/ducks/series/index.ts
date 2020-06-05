import { Reducer } from "redux";
import { SeriesState, SeriesTypes } from "./types";

const INITIAL_STATE: SeriesState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<SeriesState> = (
  state = INITIAL_STATE,
  action
): SeriesState => {
  switch (action.type) {
    case SeriesTypes.GET_ALL_BY_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
