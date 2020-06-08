export enum CharactersTypes {
  GET_ALL_REQUEST = "@characters/GET_ALL_REQUEST",
  GET_ALL_SUCCESS = "@characters/GET_ALL_SUCCESS",
  GET_ALL_FAILURE = "@characters/GET_ALL_FAILURE",

  SEARCH_REQUEST = "@characters/SEARCH_REQUEST",
  SEARCH_SUCCESS = "@characters/SEARCH_SUCCESS",
  SEARCH_FAILURE = "@characters/SEARCH_FAILURE",

  GET_REQUEST = "@characters/GET_REQUEST",
  GET_SUCCESS = "@characters/GET_SUCCESS",
  GET_FAILURE = "@characters/GET_FAILURE",

  SELECT_CHARACTER = "@characters/SELECT_CHARACTER",
}

interface CharacterThumbnail {
  path: string;
  extension: string;
}

export interface Character {
  id: number;
  name: string;
  thumbnail: CharacterThumbnail;
}

export interface CharactersState {
  readonly data: Character[];
  readonly loading: boolean;
  readonly error: boolean;
  readonly characterSelected: Character | undefined;
}
