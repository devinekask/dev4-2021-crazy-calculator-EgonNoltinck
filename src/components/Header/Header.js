import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header></header>
      <div className={style.container}>
        <h1 className={style.h1}>Crazy toiletpaper counter</h1>
        <p className={style.subtitle}>Do you have what it takes?</p>
      </div>
    </>
  );
};

export default Header;
