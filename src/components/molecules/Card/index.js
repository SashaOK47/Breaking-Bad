import React from "react";
import style from "./styles.module.scss";
import photo from "../../../assets/images/photo.jpg";

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.photoBlock}>
        <img className={style.photo} src={photo} alt="Photo" />
      </div>
      <div className={style.description}>
        <p className={style.status}>живой</p>
        <p className={style.name}>Андрей Панасюк</p>
        <time className={style.date} dateTime="2001-11-23">
          23.11.2001
        </time>
      </div>
    </div>
  );
};

export default Card;
