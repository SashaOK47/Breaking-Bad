import { useEffect } from "react";
import CharactersPage from "./component";
import { useSelector, useDispatch } from "react-redux";
import { resetStoreAll } from "../../../store/actions/characters";

const CharactersPageContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetStoreAll());
  }, []);
  const charactersSearch = useSelector(
    (state) => state.characters.charactersSearch
  );

  return <CharactersPage charactersSearch={charactersSearch} />;
};

export const container = CharactersPageContainer;
