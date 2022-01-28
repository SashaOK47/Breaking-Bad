import style from "./styles.module.scss";

const Card = ({ person }) => {
  return (
    <div className={style.card}>
      <div className={style.photoBlock}>
        <img className={style.photo} src={person.img} alt={person.name} />
      </div>
      <div className={style.description}>
        <p className={style.status}>{person.status}</p>
        <p className={style.name}>{person.name}</p>
        <time className={style.date} dateTime="2001-11-23">
          {person.birthday}
        </time>
      </div>
    </div>
  );
};

export default Card;
