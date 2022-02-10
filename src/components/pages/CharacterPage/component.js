import style from "./styles.module.scss";
import Character from "../../organisms/Character";
import LinkBtn from "../../atoms/LinkBtn";

const CharacterPage = ({ character, isLoader }) => {
  return (
    <div className={style.characterPage}>
      <div className={style.container}>
        <LinkBtn to="/characters" />
        <Character character={character} isLoader={isLoader} />
      </div>
    </div>
  );
};
export default CharacterPage;
