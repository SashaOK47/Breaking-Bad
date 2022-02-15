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
  let found;
  if (charactersSearch.length === 1) {
    result = "результат";
    found = "найден";
  } else if (charactersSearch.length >= 2 && charactersSearch.length <= 4) {
    result = "результата";
  } else {
    result = "результатов";
    found = "найдено";
  }

  return (
    <CharactersSearch
      charactersSearch={charactersSearch}
      searchResult={searchResult}
      clickHandlerCatalog={clickHandlerCatalog}
      result={result}
      found={found}
    />
  );
};

export const container = CharactersSearchContainer;
