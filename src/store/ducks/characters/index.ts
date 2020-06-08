import { Reducer } from "redux";
import { CharactersState, CharactersTypes } from "./types";

const INITIAL_STATE: CharactersState = {
  data: [],
  loading: true,
  error: false,
  characterSelected: undefined,
};

const reducer: Reducer<CharactersState> = (
  state = INITIAL_STATE,
  action
): CharactersState => {
  switch (action.type) {
    case CharactersTypes.GET_ALL_REQUEST:
    case CharactersTypes.SEARCH_REQUEST:
      return {
        ...state,
        characterSelected: undefined,
        loading: true,
      };
    case CharactersTypes.GET_ALL_SUCCESS:
    case CharactersTypes.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case CharactersTypes.GET_REQUEST:
      return { ...state, characterSelected: undefined, loading: true };
    case CharactersTypes.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        characterSelected: action.payload.character,
      };
    default:
      return state;
  }
};

export default reducer;
