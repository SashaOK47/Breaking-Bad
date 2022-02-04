import style from "./styles.module.scss";
import { Link } from "react-router-dom";
import Character from "../../organisms/Character";

const CharacterPage = ({ character, isLoader }) => {
  return (
    <div className={style.characterPage}>
      <div className={style.container}>
        <Link className={style.characterLink} to="/characters">
          Назад в Каталог
        </Link>
        <Character character={character} isLoader={isLoader} />
      </div>
    </div>
  );
};
export default CharacterPage;
