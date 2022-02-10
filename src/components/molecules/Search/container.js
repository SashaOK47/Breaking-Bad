import Search from "./component";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCharactersSearch,
  setSearchQuery,
} from "../../../store/actions/characters";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);

  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  let searchCharacters = [];

  searchCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  const handleChangeInput = (e) => {
    setIsOpen(true);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    dispatch(setCharactersSearch(searchCharacters));
    dispatch(setSearchQuery(inputValue));
    setInputValue("");
  };

  return (
    <Search
      handleSubmit={handleSubmit}
      handleChangeInput={handleChangeInput}
      inputValue={inputValue}
      searchCharacters={searchCharacters}
      isOpen={isOpen}
    />
  );
};
export const container = SearchContainer;
