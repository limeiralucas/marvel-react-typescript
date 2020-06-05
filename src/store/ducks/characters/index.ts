import { Reducer } from "redux";
import { CharactersState, CharactersTypes } from "./types";

const INITIAL_STATE: CharactersState = {
  data: [
    {
      id: 1009146,
      name: "Abomination (Emil Blonsky)",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
        extension: "jpg",
      },
    },
    {
      id: 1009146,
      name: "Abomination (Emil Blonsky)",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
        extension: "jpg",
      },
    },
    {
      id: 1009146,
      name: "Abomination (Emil Blonsky)",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
        extension: "jpg",
      },
    },
    {
      id: 1009146,
      name: "Abomination (Emil Blonsky)",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
        extension: "jpg",
      },
    },
    {
      id: 1009146,
      name: "Abomination (Emil Blonsky)",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
        extension: "jpg",
      },
    },
    {
      id: 1009146,
      name: "Abomination (Emil Blonsky)",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
        extension: "jpg",
      },
    },
  ],
  loading: false,
  error: false,
};

const reducer: Reducer<CharactersState> = (
  state = INITIAL_STATE,
  action
): CharactersState => {
  switch (action.type) {
    case CharactersTypes.GET_ALL_SUCCESS:
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
