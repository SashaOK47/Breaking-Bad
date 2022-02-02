import style from "./styles.module.scss";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className={style.notFound}>
      <p className={style.message}>404 Not Found</p>
      <Link className={style.link} to="/">
        На главную
      </Link>
    </div>
  );
};
export default NotFound;
