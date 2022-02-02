import style from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <time>{new Date().getFullYear()}</time>
        <p>@Aleksandr Okoronko</p>
      </div>
    </footer>
  );
};
export default Footer;
