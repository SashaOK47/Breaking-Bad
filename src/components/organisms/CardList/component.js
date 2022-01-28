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
export default CardList;
