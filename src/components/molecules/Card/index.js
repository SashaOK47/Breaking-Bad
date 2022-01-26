import React from "react";
import classes from './styles.module.scss';
import photo from '../../../assets/images/photo.jpg';

const Card = () => {
  return(
    <div className={classes.card}>
      <div className={classes.photoBlock}>
        <img className={classes.photo} src={photo} alt="Photo" />
      </div>
      <div className={classes.description}>
        <p className={classes.status}>Живой</p>
        <p className={classes.name}>Андрей Панасюк</p>
        <time className={classes.date} dateTime="2001-11-23">23.11.2001</time>
      </div>
    </div>
  );
};

export default Card;
