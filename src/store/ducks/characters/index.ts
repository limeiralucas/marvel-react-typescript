import { Reducer } from "redux";
import { CharactersState, CharactersTypes } from "./types";

const INITIAL_STATE: CharactersState = {
  data: [],
  loading: true,
  error: false,
  characterSelected: {
    id: 1009148,
    name: "Absorbing Man",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7",
      extension: "jpg",
    },
  },
};

const reducer: Reducer<CharactersState> = (
  state = INITIAL_STATE,
  action
): CharactersState => {
  switch (action.type) {
    case CharactersTypes.GET_ALL_SUCCESS:
    case CharactersTypes.SEARCH_SUCCESS:
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
