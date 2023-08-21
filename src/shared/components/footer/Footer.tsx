import classnames from "classnames";
import cl from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={cl.footer_wrapper}>
      <div className={cl.footer_text}>Veranika Klokava</div>
      <div className={cl.footer_text}>2023</div>
      <div className={cl.footer_links}>
        <a href="https://www.instagram.com/nika_klokava/?igshid=MmIzYWVlNDQ5Yg%3D%3D">
          <div className={classnames(cl.link, cl.instagram)} />
        </a>

        <a href="https://linkedin.com/in/veranika-klokava-858b5b287">
          <div className={classnames(cl.link, cl.linkedin)} />
        </a>
        <a href="https://github.com/NikaKlokava">
          <div className={classnames(cl.link, cl.github)} />
        </a>
      </div>
    </footer>
  );
};
