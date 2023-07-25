import cl from "./header.module.css";

export const Header = () => {
  return <header className={cl.header_wrapper}>
    <h1 className={cl.header_title}>Tetris</h1>
  </header>;
};
