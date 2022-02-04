import style from "./styles.module.scss";
import CardList from "../../organisms/CardList";

const CharactersPage = () => {
  return (
    <div className={style.caharacterPage}>
      <div className={style.container}>
        <h2 className={style.title}>Каталог</h2>
        <CardList />
      </div>
    </div>
  );
};

export default CharactersPage;
