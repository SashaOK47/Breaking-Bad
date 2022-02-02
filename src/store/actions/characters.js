import Repository from "../../repository/index";
import {
  SET_CHARACTERS,
  IS_LOADER,
  IS_ERROR,
  SET_CHARACTER,
} from "../actionTypes/characters";

export const setCharacters = (value) => {
  return {
    type: SET_CHARACTERS,
    value,
  };
};
export const setCharacter = (value) => {
  return {
    type: SET_CHARACTER,
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
  dispatch(isError(null));
  dispatch(isLoader(true));
  const { value, error } = await Repository.APICore.getCharacters();
  if (error || !value) {
    dispatch(isError(error));
  } else dispatch(setCharacters(value));
  dispatch(isLoader(false));
};
export const getCharacterByIdFromAPI = (id) => async (dispatch) => {
  dispatch(isError(null));
  dispatch(isLoader(true));
  const { value, error } = await Repository.APICore.getCharacterById(id);
  if (error || !value) {
    dispatch(isError(error));
  } else {
    dispatch(setCharacter(...value));
  }
  dispatch(isLoader(false));
};
