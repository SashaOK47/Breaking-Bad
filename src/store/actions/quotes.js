import Repository from "../../repository/index";
import {
  SET_RANDOM_QUOTE_BY_CHARACTER,
  IS_ERROR_QUOTE,
  IS_LOADER_QUOTE,
  SET_RANDOM_QUOTE,
} from "../actionTypes/quotes";

export const setRandomQuoteByCharacter = (value) => {
  return {
    type: SET_RANDOM_QUOTE_BY_CHARACTER,
    value,
  };
};
export const setRandomQuote = (value) => {
  return {
    type: SET_RANDOM_QUOTE,
    value,
  };
};
export const isErrorQuote = (value) => {
  return {
    type: IS_ERROR_QUOTE,
    value,
  };
};
export const isLoaderQuote = (value) => {
  return {
    type: IS_LOADER_QUOTE,
    value,
  };
};
export const getRandomQuoteByCharacterFromAPI = (name) => async (dispatch) => {
  dispatch(isErrorQuote(null));
  dispatch(isLoaderQuote(true));
  const { value, error } = await Repository.APIQuotes.getRandomQuoteByCharacter(
    name
  );
  if (error || !value) {
    dispatch(isErrorQuote(error));
  } else {
    dispatch(setRandomQuoteByCharacter(...value));
  }
  dispatch(isLoaderQuote(false));
};
export const getRandomQuoteFromAPI = () => async (dispatch) => {
  dispatch(isErrorQuote(null));
  dispatch(isLoaderQuote(true));
  const { value, error } = await Repository.APIQuotes.getRandomQuote();
  if (error || !value) {
    dispatch(isErrorQuote(error));
  } else {
    dispatch(setRandomQuote(...value));
  }
  dispatch(isLoaderQuote(false));
};
