import React from "react";
import PropTypes from "prop-types";
import style from "./styles.module.scss";
import arrow from "../../../assets/icons/arrow.svg";

const Pagination = ({
  arrOfCurrButtons,
  currentPage,
  handlerBtnNext,
  handlerBtnPrev,
  handleClick,
}) => {
  return (
    <div className={style.pagination} data-test="pagination">
      <div className={style.paginationList}>
        {arrOfCurrButtons.map((item, index) => {
          let cls = style.paginationItem;
          if (currentPage == item) {
            cls += ` ${style.active}`;
          } else if (item === "...") {
            cls += ` ${style.disabled}`;
          }
          return (
            <button key={index} className={cls} onClick={handleClick}>
              {item}
            </button>
          );
        })}
      </div>
      <button className={style.btnPrev} onClick={handlerBtnPrev}>
        <img src={arrow} alt="Button Prev" />
      </button>
      <button className={style.btnNext} onClick={handlerBtnNext}>
        <img src={arrow} alt="Button Next" />
      </button>
    </div>
  );
};
Pagination.propTypes = {
  arrOfCurrButtons: PropTypes.array,
  currentPage: PropTypes.number,
  handlerBtnNext: PropTypes.func,
  handlerBtnPrev: PropTypes.func,
  handleClick: PropTypes.func,
};
export default Pagination;
