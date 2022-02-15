import React from "react";
import PropTypes from "prop-types";
import style from "./styles.module.scss";

const ToggleCountCard = ({ numbers, handleClick, itemsPerPage }) => {
  return (
    <div className={style.countCard}>
      <div className={style.list}>
        <span className={style.text}>Отобразить карточек: </span>
        <div className={style.btns}>
          {numbers.map((number) => {
            return (
              <button
                className={itemsPerPage === number ? style.active : null}
                key={number}
                id={number}
                onClick={handleClick}
              >
                {number}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
ToggleCountCard.propTypes = {
  numbers: PropTypes.array,
  handleClick: PropTypes.func,
  itemsPerPage: PropTypes.number,
};
export default ToggleCountCard;
