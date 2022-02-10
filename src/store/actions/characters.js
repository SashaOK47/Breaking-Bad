import Repository from "../../repository/index";
import {
  SET_CHARACTERS,
  IS_LOADER,
  IS_ERROR,
  SET_CHARACTER,
  IS_GRID,
  UPDATE_CURRENT_PAGE,
  UPDATE_ITEMS_PER_PAGE,
  SET_CHARACTERS_SEARCH,
  SET_SEARCH_QUERY,
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
export const UpdateCurrentPage = (value) => {
  return {
    type: UPDATE_CURRENT_PAGE,
    value,
  };
};
export const UpdateItemsPerPage = (value) => {
  return {
    type: UPDATE_ITEMS_PER_PAGE,
    value,
  };
};
export const setCharactersSearch = (value) => {
  return {
    type: SET_CHARACTERS_SEARCH,
    value,
  };
};
export const setSearchQuery = (value) => {
  return {
    type: SET_SEARCH_QUERY,
    value,
  };
};
export const resetStoreAll = () => (dispatch) => {
  dispatch(setCharactersSearch(null));
  dispatch(UpdateItemsPerPage(10));
  dispatch(UpdateCurrentPage(1));
};
export const getCharactersFromAPI = () => async (dispatch) => {
  dispatch(isError(null));
  dispatch(isLoader(true));
  const { value, error } = await Repository.APICharacters.getCharacters();
  if (error || !value) {
    dispatch(isError(error));
  } else {
    const filterValue = value.filter(
      (character) => character.name !== "Holly White"
    );
    dispatch(setCharacters(filterValue));
    dispatch(isLoader(false));
  }
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
