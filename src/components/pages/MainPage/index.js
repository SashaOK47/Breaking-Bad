import style from "./styles.module.scss";
import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Link to="/characters">Characters Page</Link>
      <h1 style={{ textAlign: "center" }}>Main Page</h1>
    </div>
  );
};

export default MainPage;
