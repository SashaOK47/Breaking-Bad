import {
  SET_CHARACTERS,
  IS_ERROR,
  IS_LOADER,
  SET_CHARACTER,
} from "../actionTypes/characters";
const initialState = {
  characters: [],
  isLoader: false,
  isError: null,
  character: {},
};

const characters = (state = initialState, { type, value }) => {
  switch (type) {
    case SET_CHARACTERS:
      return { ...state, characters: value };
    case IS_ERROR:
      return { ...state, isError: value };
    case IS_LOADER:
      return { ...state, isLoader: value };
    case SET_CHARACTER:
      return { ...state, character: value };
    default:
      return state;
  }
};
export default characters;
