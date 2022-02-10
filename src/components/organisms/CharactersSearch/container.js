import CharactersSearch from "./component";
import { useSelector } from "react-redux";
import { resetStoreAll } from "../../../store/actions/characters";
import { useDispatch } from "react-redux";

const CharactersSearchContainer = ({ charactersSearch }) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.characters.searchQuery);

  let searchResult;
  searchResult = searchQuery;

  const clickHandlerCatalog = () => {
    dispatch(resetStoreAll());
  };

  let result;
  if (charactersSearch.length === 1) {
    result = "результат";
  } else if (charactersSearch.length >= 2 && charactersSearch.length <= 4) {
    result = "результата";
  } else {
    result = "результатов";
  }

  return (
    <CharactersSearch
      charactersSearch={charactersSearch}
      searchResult={searchResult}
      clickHandlerCatalog={clickHandlerCatalog}
      result={result}
    />
  );
};

export const container = CharactersSearchContainer;
