import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import { getCharactersFromAPI } from "../../../store/actions/characters";
import Error from "../../atoms/Error";

const CardListContainer = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);
  const currentPage = useSelector((state) => state.characters.currentPage);
  const itemsPerPage = useSelector((state) => state.characters.itemsPerPage);
  const isError = useSelector((state) => state.characters.isError);
  const isLoader = useSelector((state) => state.characters.isLoader);
  const grid = useSelector((state) => state.characters.isGrid);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const charactersOfPage = characters.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    dispatch(getCharactersFromAPI());
  }, []);

  return isError ? (
    <Error message={isError} />
  ) : (
    <CardList characters={charactersOfPage} isLoader={isLoader} grid={grid} />
  );
};

export const container = CardListContainer;
