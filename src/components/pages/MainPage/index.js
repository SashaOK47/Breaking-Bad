import React from "react";
import style from "./styles.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img from "../../../assets/images/main-bg.webp";

const MainPage = () => {
  return (
    <main className={style.mainPage}>
      <LazyLoadImage src={img} className={style.img} alt="Main background" />
    </main>
  );
};

export default MainPage;
