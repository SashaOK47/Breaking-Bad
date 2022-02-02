import PropTypes from "prop-types";
import style from "./styles.module.scss";
import Card from "../../molecules/Card";
import Loader from "../../atoms/Loader";

const CardList = ({ characters, isLoader }) => {
  return isLoader ? (
    <Loader />
  ) : (
    <div className={style.cardList}>
      {characters.map((character) => (
        <Card character={character} key={character.char_id} />
      ))}
    </div>
  );
};
CardList.propTypes = {
  characters: PropTypes.array,
  isLoader: PropTypes.bool,
};
export default CardList;
