import PropTypes from "prop-types";
import style from "./styles.module.scss";
import { Link } from "react-router-dom";

const Card = ({ character }) => {
  const { name, status, img, birthday } = character;
  return (
    <Link to={`/character/${character.char_id}`} className={style.card}>
      <div className={style.photoBlock}>
        <img className={style.photo} src={img} alt={name} />
      </div>
      <div className={style.description}>
        <p className={style.status}>{status}</p>
        <p className={style.name}>{name}</p>
        <time className={style.date}>{birthday}</time>
      </div>
    </Link>
  );
};
Card.propTypes = {
  character: PropTypes.object,
};
export default Card;
