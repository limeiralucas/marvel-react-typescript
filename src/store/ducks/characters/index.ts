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
      id: 1017100,
      name: "A-Bomb (HAS)",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        extension: "jpg",
      },
    },
    {
      id: 1009144,
      name: "(A.I.M.)",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
        extension: "jpg",
      },
    },
    {
      id: 1009147,
      name: "Aaron Stack",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg",
      },
    },
    {
      id: 1016823,
      name: "Abomination (Ultimate)",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg",
      },
    },
    {
      id: 1009148,
      name: "Absorbing Man",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7",
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
