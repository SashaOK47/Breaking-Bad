import style from "./styles.module.scss";

const Card = ({ card }) => {
  return (
    <div className={style.card}>
      <div className={style.photoBlock}>
        <img className={style.photo} src={card.img} alt="Photo" />
      </div>
      <div className={style.description}>
        <p className={style.status}>{card.status}</p>
        <p className={style.name}>{card.name}</p>
        <time className={style.date} dateTime="2001-11-23">
          {card.birthday}
        </time>
      </div>
    </div>
  );
};

export default Card;
