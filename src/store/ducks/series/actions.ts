import { action } from "typesafe-actions";
import { SeriesTypes, Serie } from "./types";

export const getAllByCharacterRequest = (characterId: number) =>
  action(SeriesTypes.GET_ALL_BY_CHARACTER_REQUEST, { characterId });
export const getAllByCharacterSuccess = (data: Serie[]) =>
  action(SeriesTypes.GET_ALL_BY_CHARACTER_SUCCESS, { data });
export const getAllByCharacterFailure = () =>
  action(SeriesTypes.GET_ALL_BY_CHARACTER_FAILURE);
