import style from "./styles.module.scss";
import { useParams, useNavigate } from "react-router-dom";

const CharacterPage = () => {
  const { char_id } = useParams();
  const navigate = useNavigate();

  return (
    <div className={style.persona}>
      <button
        onClick={() => navigate(-1)}
        style={{ padding: ".3rem .7rem", marginTop: "1rem" }}
      >
        Back
      </button>
      <h1 style={{ textAlign: "center" }}>PersonaPage</h1>
      <h2>ID character: {char_id}</h2>
    </div>
  );
};
export default CharacterPage;
