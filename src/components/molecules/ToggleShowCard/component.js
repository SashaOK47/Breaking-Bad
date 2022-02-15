import React from "react";
import PropTypes from "prop-types";
import style from "./styles.module.scss";

const ToggleShowCard = ({
  grid,
  clickHandler,
  clickHandlerActive,
  enterHandlerActive,
  enterHandler,
}) => {
  let classActive = grid ? style.active : "";
  let noActive = !grid ? style.active : "";
  return (
    <div className={style.icons}>
      <button type="button" onKeyDown={enterHandler}>
        <svg
          className={noActive}
          onClick={clickHandler}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="22" height="9" rx="1" strokeWidth="2" />
          <rect x="1" y="14" width="22" height="9" rx="1" strokeWidth="2" />
        </svg>
      </button>
      <button type="button" onKeyDown={enterHandlerActive}>
        <svg
          className={classActive}
          onClick={clickHandlerActive}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="9" height="9" rx="1" strokeWidth="2" />
          <rect x="1" y="14" width="9" height="9" rx="1" strokeWidth="2" />
          <rect x="14" y="1" width="9" height="9" rx="1" strokeWidth="2" />
          <rect x="14" y="14" width="9" height="9" rx="1" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
};
ToggleShowCard.propTypes = {
  grid: PropTypes.bool,
  clickHandler: PropTypes.func,
  clickHandlerActive: PropTypes.func,
  enterHandlerActive: PropTypes.func,
  enterHandler: PropTypes.func,
};
export default ToggleShowCard;
