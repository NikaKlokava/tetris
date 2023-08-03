import classnames from "classnames";
import cl from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={cl.footer_wrapper}>
      <div className={cl.footer_text}>Veranika Klokava</div>
      <div className={cl.footer_text}>2023</div>
      <div className={cl.footer_links}>
        <div className={classnames(cl.link, cl.instagram)} />
        <div className={classnames(cl.link, cl.linkedin)} />
        <div className={classnames(cl.link, cl.github)} />
      </div>
    </footer>
  );
};
