import PropTypes from "prop-types";
import style from "./styles.module.scss";

const Card = ({ character }) => {
  const { name, status, img, birthday } = character;
  return (
    <div className={style.card}>
      <div className={style.photoBlock}>
        <img className={style.photo} src={img} alt={name} />
      </div>
      <div className={style.description}>
        <p className={style.status}>{status}</p>
        <p className={style.name}>{name}</p>
        <time className={style.date}>{birthday}</time>
      </div>
    </div>
  );
};
Card.propTypes = {
  character: PropTypes.object,
};
export default Card;
