import CharacterPage from "./component";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacterByIdFromAPI } from "../../../store/actions/characters";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";

const CharacterPageContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characters.character);
  const isLoader = useSelector((state) => state.characters.isLoader);

  useEffect(() => {
    dispatch(getCharacterByIdFromAPI(id));
  }, [id]);

  return !character ? (
    <NotFound />
  ) : (
    <CharacterPage character={character} isLoader={isLoader} />
  );
};

export const container = CharacterPageContainer;
