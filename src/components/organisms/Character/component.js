import PropTypes from "prop-types";
import style from "./styles.module.scss";
import Loader from "../../atoms/Loader";
import React from "react";

const Character = ({ character, isLoader, quote, isLoaderQuote }) => {
  const { img, name, status, nickname, birthday } = character;
  return isLoader ? (
    <Loader />
  ) : (
    <div>
      <div className={style.character}>
        <div className={style.photo}>
          <img className={style.img} src={img} alt={name} />
        </div>
        <div className={style.description}>
          <p className={style.status}>{status}</p>
          <p className={style.name}>{name}</p>
          <time className={style.date}>
            <span>Дата рождения:</span> {birthday}
          </time>
          <p className={style.nickname}>
            <span>Ник-нейм:</span> {nickname}
          </p>
          <blockquote className={style.quote}>
            {isLoaderQuote && !isLoader ? (
              <Loader />
            ) : (
              <span>
                Цитата:
                <span> {quote}</span>
              </span>
            )}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

Character.propTypes = {
  character: PropTypes.object,
  isLoader: PropTypes.bool,
  quote: PropTypes.string,
  isLoaderQuote: PropTypes.bool,
};
export default Character;
