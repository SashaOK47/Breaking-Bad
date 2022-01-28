import PropTypes from "prop-types";
import Card from "../../molecules/Card";
import style from "./styles.module.scss";

const CardList = ({ persons }) => {
  return (
    <div className={style.cardList}>
      {persons.map((person) => (
        <Card person={person} key={person.id} />
      ))}
    </div>
  );
};
CardList.propTypes = {
  cards: PropTypes.array,
};
export default CardList;
