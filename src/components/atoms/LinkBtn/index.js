import React from "react";
import style from "./styles.module.scss";
import { Link } from "react-router-dom";

const LinkBtn = (props) => {
  return (
    <Link className={style.linkBtn} {...props}>
      Назад в Каталог
    </Link>
  );
};
export default LinkBtn;
