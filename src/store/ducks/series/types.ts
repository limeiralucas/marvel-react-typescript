export enum SeriesTypes {
  GET_ALL_BY_CHARACTER_REQUEST = "@series/GET_ALL_BY_CHARACTER_REQUEST",
  GET_ALL_BY_CHARACTER_SUCCESS = "@series/GET_ALL_BY_CHARACTER_SUCCESS",
  GET_ALL_BY_CHARACTER_FAILURE = "@series/GET_ALL_BY_CHARACTER_FAILURE",
}

interface SerieThumbnail {
  path: string;
  extension: string;
}
export interface Serie {
  id: number;
  title: string;
  thumbnail: SerieThumbnail;
}

export interface SeriesState {
  readonly data: Serie[];
  readonly loading: boolean;
  readonly error: boolean;
}
