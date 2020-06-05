import { action } from "typesafe-actions";
import { CharactersTypes, Character } from "./types";

export const getAllRequest = () => action(CharactersTypes.GET_ALL_REQUEST);
export const getAllSuccess = (data: Character[]) =>
  action(CharactersTypes.GET_ALL_SUCCESS, { data });
export const getAllFailure = () => action(CharactersTypes.GET_FAILURE);

export const getRequest = () => action(CharactersTypes.GET_REQUEST);
export const getSuccess = () => action(CharactersTypes.GET_SUCCESS);
export const getFailure = () => action(CharactersTypes.GET_FAILURE);
