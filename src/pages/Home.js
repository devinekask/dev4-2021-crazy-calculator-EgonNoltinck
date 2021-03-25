import { useEffect, useState } from "react";
import Tree from "../components/Tree";
import Header from "../components/Header/Header.js";
import styles from "./Home.module.css";

const Home = () => {
  const [trees, setTrees] = useState(new Array(1).fill(true));
  const [quantity, setQuantity] = useState(1);
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  const [toiletRolls, setToiletRolls] = useState(0);
  const [toiletRollsText, setToiletRollsText] = useState("");

  useEffect(() => {
    const newTrees = new Array(quantity).fill(true);
    setTrees(newTrees);
  }, [quantity]);

  const getToiletRollsText = (totalRolls) => {
    if (totalRolls < 10) {
      return "Small Cabinet";
    }
    if (totalRolls < 30) {
      return "Big Cabinet";
    }
    if (totalRolls < 60) {
      return "Small storage room";
    }
    if (totalRolls < 120) {
      return "Small room";
    }
    if (totalRolls <= 240) {
      return "Big room";
    }
    return "lots";
  };

  useEffect(() => {
    const treeSize = ((width / 100) * (height / 100)) / 2;
    const totalSize = treeSize * quantity;
    const rollsPerM2 = 10;
    const totalRolls = Math.ceil(totalSize * rollsPerM2);
    const newText = getToiletRollsText(totalRolls);
    setToiletRollsText(newText);

    setToiletRolls(totalRolls);
  }, [quantity, width, height]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.currentTarget.value);
    setQuantity(value);
  };

  const handleHeightChange = (e) => {
    const value = parseInt(e.currentTarget.value);
    setHeight(value);
  };

  const handleWidthChange = (e) => {
    const value = parseInt(e.currentTarget.value);
    setWidth(value);
  };
  return (
    <div>
      <Header />
      <div className={styles.grid}>
        <div className={styles.quantity}>
          <label className={styles.label} htmlFor="quantity">
            Quantity: {quantity}
          </label>
          <input
            id="quantity"
            value={quantity}
            type="range"
            min="1"
            max="12"
            onChange={handleQuantityChange}
          />
        </div>
        <div className={styles.height}>
          <label className={styles.label} htmlFor="height">
            Height: {height} cm
          </label>
          <input
            id="height"
            value={height}
            type="range"
            min="50"
            max="200"
            onChange={handleHeightChange}
          />
        </div>
        <div className={styles.width}>
          <label className={styles.label} htmlFor="width">
            Width: {width} cm
          </label>
          <input
            id="width"
            value={width}
            type="range"
            min="50"
            max="200"
            onChange={handleWidthChange}
          />
        </div>

        <div className={styles.trees}>
          {trees.map((tree, key) => (
            <Tree key={key} height={height} width={width} color={key % 2} />
          ))}
        </div>
        <div className={styles.count}>
          <p className={`${styles.rolls} ${styles.rolls_count}`}>
            Rolls: <span>{toiletRolls}</span>
          </p>
          <p className={styles.rolls}>
            Storage: <span>{toiletRollsText}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
