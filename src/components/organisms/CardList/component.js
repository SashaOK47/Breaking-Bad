import PropTypes from "prop-types";
import style from "./styles.module.scss";
import Card from "../../molecules/Card";
import { Link } from "react-router-dom";

const CardList = ({ characters, isLoader }) => {
  return isLoader ? (
    <div className={style.loader}></div>
  ) : (
    <div className={style.cardList}>
      {characters.map((character) => (
        <Link
          to={`/character/${character.char_id}`}
          key={character.char_id}
          className={style.cardLink}
        >
          <Card character={character} />
        </Link>
      ))}
    </div>
  );
};
CardList.propTypes = {
  characters: PropTypes.array,
  isLoader: PropTypes.bool,
};
export default CardList;
