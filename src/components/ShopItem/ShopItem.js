import React from "react";
import styles from "./ShopItem.module.css";
import assets from "../../../src/assets/toiletpaper.svg";

const ShopItem = ({ shop }) => {
  return (
    <li className={styles.shopElement}>
      <div>
        <p className={styles.name}>{shop.name}</p>
        <p>{shop.address}</p>
        <p>{shop.price}</p>
      </div>
      <a className={styles.button} href={`https://www.${shop.name}.be`}>
        <img className={styles.icon} alt={assets} src={assets}></img>Shop now
      </a>
    </li>
  );
};

export default ShopItem;
