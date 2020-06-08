import { Reducer } from "redux";
import { SeriesState, SeriesTypes } from "./types";

const INITIAL_STATE: SeriesState = {
  data: [
    {
      id: 1991,
      title: "Avengers (1963 - 1996)",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/10/519baa6d1890a",
        extension: "jpg",
      },
    },
  ],
  loading: false,
  error: false,
};

const reducer: Reducer<SeriesState> = (
  state = INITIAL_STATE,
  action
): SeriesState => {
  switch (action.type) {
    case SeriesTypes.GET_ALL_BY_CHARACTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
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
