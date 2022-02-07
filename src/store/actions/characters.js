import Repository from "../../repository/index";
import {
  SET_CHARACTERS,
  IS_LOADER,
  IS_ERROR,
  SET_CHARACTER,
  IS_GRID,
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
export const toggleGridtoList = (value) => {
  return {
    type: IS_GRID,
    value,
  };
};

export const getCharactersFromAPI = () => async (dispatch) => {
  dispatch(isError(null));
  dispatch(isLoader(true));
  const { value, error } = await Repository.APICharacters.getCharacters();
  if (error || !value) {
    dispatch(isError(error));
  } else dispatch(setCharacters(value));
  dispatch(isLoader(false));
};
export const getCharacterByIdFromAPI = (id) => async (dispatch) => {
  dispatch(isError(null));
  dispatch(isLoader(true));
  const { value, error } = await Repository.APICharacters.getCharacterById(id);
  if (error || !value) {
    dispatch(isError(error));
  } else {
    dispatch(setCharacter(...value));
  }
  dispatch(isLoader(false));
};
// export const toggleGridtoList = () => (dispatch) => {
//   dispatch(isLoader(true));
//   dispatch(toggleView());
//   setTimeout(() => {
//     dispatch(isLoader(false));
//   }, 300);
// }
