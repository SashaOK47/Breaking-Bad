import Repository from "../../repository/index";
import { SET_CHARACTERS, IS_LOADER, IS_ERROR } from "../actionTypes/characters";

export const setCharacters = (value) => {
  return {
    type: SET_CHARACTERS,
    value,
  };
};
export const isLoader = (value) => {
  return {
    type: IS_LOADER,
    value,
  };
};
export const isError = (value) => {
  return {
    type: IS_ERROR,
    value,
  };
};

export const getCharactersFromAPI = () => async (dispatch) => {
  dispatch(isLoader(true));
  const { value, error } = await Repository.APICore.getCharacters();
  if (error || !value) {
    dispatch(isError(error));
  } else dispatch(setCharacters(value));
  dispatch(isLoader(false));
  // setTimeout(() => {
  //   dispatch(isLoader(false));
  // }, 2000);
};
