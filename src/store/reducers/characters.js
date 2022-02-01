import { SET_CHARACTERS, IS_ERROR, IS_LOADER } from "../actionTypes/characters";
const initialState = {
  characters: [],
  isLoader: false,
  isError: null,
};

const cards = (state = initialState, { type, value }) => {
  switch (type) {
    case SET_CHARACTERS:
      return { ...state, characters: value };
    case IS_ERROR:
      return { ...state, isError: value };
    case IS_LOADER:
      return { ...state, isLoader: value };
    default:
      return state;
  }
};
export default cards;
