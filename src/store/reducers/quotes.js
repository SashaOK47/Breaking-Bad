import {
  SET_RANDOM_QUOTE_BY_CHARACTER,
  IS_ERROR_QUOTE,
  IS_LOADER_QUOTE,
  SET_RANDOM_QUOTE,
} from "../actionTypes/quotes";

const initialState = {
  quoteCharacter: {},
  randomQuote: {},
  isLoaderQuote: true,
  isErrorQuote: null,
};

const quotes = (state = initialState, { type, value }) => {
  switch (type) {
    case SET_RANDOM_QUOTE_BY_CHARACTER:
      return { ...state, quoteCharacter: value };
    case SET_RANDOM_QUOTE:
      return { ...state, randomQuote: value };
    case IS_ERROR_QUOTE:
      return { ...state, isErrorQuote: value };
    case IS_LOADER_QUOTE:
      return { ...state, isLoaderQuote: value };
    default:
      return state;
  }
};
export default quotes;
