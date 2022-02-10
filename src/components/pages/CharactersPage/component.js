import style from "./styles.module.scss";
import CardList from "../../organisms/CardList";
import Search from "../../molecules/Search";
import CharactersSearch from "../../organisms/CharactersSearch";

const CharactersPage = ({ charactersSearch }) => {
  return (
    <div className={style.caharacterPage}>
      <div className={style.container}>
        <Search />
        {charactersSearch ? (
          <CharactersSearch charactersSearch={charactersSearch} />
        ) : (
          <CardList />
        )}
      </div>
    </div>
  );
};

export default CharactersPage;
