import PropTypes from "prop-types";
import style from "./styles.module.scss";
import Card from "../../molecules/Card";
import LinkBtn from "../../atoms/LinkBtn";

const CharactersSearch = ({
  charactersSearch,
  searchResult,
  clickHandlerCatalog,
  result,
  found,
}) => {
  return (
    <div className={style.charactersSearch}>
      {charactersSearch.length ? (
        <p className={style.result}>
          По вашему запросу <strong>"{searchResult}"</strong> {found}{" "}
          <strong>{charactersSearch.length}</strong> {result}
        </p>
      ) : null}

      {charactersSearch.length ? (
        <div className={style.characters}>
          {charactersSearch.map((character) => (
            <Card character={character} grid={true} key={character.char_id} />
          ))}
        </div>
      ) : (
        <p className={style.noResult}>
          По Вашему запросу <strong>"{searchResult}"</strong> результатов не
          найдено
        </p>
      )}
      <LinkBtn to="#" onClick={clickHandlerCatalog} />
    </div>
  );
};
CharactersSearch.propTypes = {
  charactersSearch: PropTypes.array,
  searchResult: PropTypes.string,
  clickHandlerCatalog: PropTypes.func,
};
export default CharactersSearch;
