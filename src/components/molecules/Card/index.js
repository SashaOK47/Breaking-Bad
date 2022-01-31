import PropTypes from "prop-types";
import style from "./styles.module.scss";

const Card = ({ person }) => {
  const { name, status, img, birthday } = person;
  return (
    <div className={style.card}>
      <div className={style.photoBlock}>
        <img className={style.photo} src={img} alt={name} />
      </div>
      <div className={style.description}>
        <p className={style.status}>{status}</p>
        <p className={style.name}>{name}</p>
        <time className={style.date} dateTime="2001-11-23">
          {birthday}
        </time>
      </div>
    </div>
  );
};
Card.propTypes = {
  cards: PropTypes.object,
};
export default Card;
