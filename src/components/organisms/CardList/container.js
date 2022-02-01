import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import { getCharactersFromAPI } from "../../../store/actions/characters";

const CardListContainer = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);
  const isError = useSelector((state) => state.characters.isError);
  const isLoader = useSelector((state) => state.characters.isLoader);

  useEffect(() => {
    dispatch(getCharactersFromAPI());
  }, []);

  return isError ? (
    <div style={{ color: "red", textAlign: "center" }}>{isError}</div>
  ) : (
    <CardList characters={characters} isLoader={isLoader} />
  );
};

export const container = CardListContainer;
