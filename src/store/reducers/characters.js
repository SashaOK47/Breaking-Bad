import {
  SET_CHARACTERS,
  IS_ERROR,
  IS_LOADER,
  SET_CHARACTER,
  IS_GRID,
  UPDATE_CURRENT_PAGE,
  UPDATE_ITEMS_PER_PAGE,
} from "../actionTypes/characters";
const initialState = {
  characters: [],
  isLoader: false,
  isError: null,
  character: {},
  isGrid: true,
  currentPage: 1,
  itemsPerPage: 10,
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
    case IS_GRID:
      return { ...state, isGrid: value };
    case UPDATE_CURRENT_PAGE:
      return { ...state, currentPage: value };
    case UPDATE_ITEMS_PER_PAGE:
      return { ...state, itemsPerPage: value };
    default:
      return state;
  }
};
export default characters;
