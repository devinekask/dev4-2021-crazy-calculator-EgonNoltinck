import React from "react";
import styles from "./ShopItem.module.css";

const ShopItem = ({ shop }) => {
  return (
    <li className={styles.shopElement}>
      {/* <img
        className={styles.logo}
        src={shop.logo}
        alt={"logo " + shop.name}
        width="100"
      /> */}
      <p className={styles.name}>{shop.name}</p>
      <p>{shop.address}</p>
      <p>{shop.price}</p>
    </li>
  );
};

export default ShopItem;
