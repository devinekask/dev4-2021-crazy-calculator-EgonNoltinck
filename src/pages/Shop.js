import Header from "../components/Header/Header.js";
import ShopItem from "../components/ShopItem/ShopItem";
import styles from "./Shop.module.css";
// import assets from "../../src/assets/toiletpaper.svg"


const shopsData = [
  {
    name: "Colruyt",
    address: "Sint-Sebastiaanslaan 2, 8500 Kortrijk",
    // logo:
    //   "https://www.pro-cured.be/wp-content/uploads/2019/01/1280px-Colruyt_logo.svg.png",
    price: "€0,20/stk",
  },
  {
    name: "Delhaize",
    address: "Pater Beckstraat 47, 8500 Kortrijk",
    // logo:
    //   "https://www.uni-learning.com/wp-content/uploads/2018/10/Delhaize-logo-762x560.jpg",
    price: "€0,26/stk",
  },
  {
    name: "Aldi",
    address: "Sint-Denijsestraat 103, 8500 Kortrijk",
    // logo:
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Aldi_Nord_201x_logo.svg/1200px-Aldi_Nord_201x_logo.svg.png",
    price: "€0,18/stk",
  },
  {
    name: "Lidl",
    address: "Sint-Sebastiaanslaan 1, 8500 Kortrijk",
    // logo:
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Lidl_logo.png/480px-Lidl_logo.png",
    price: "€0,19/stk",
  },
  {
    name: "Albert Heijn",
    address: "Ringlaan 34, 8500 Kortrijk",
    // logo:
    //   "http://static.ahold.com/media/002226900/000/002226916_001_Albert_Heijn_logo-min.png",
    price: "€0,24/stk",
  },
  {
    name: "Carrefour",
    address: "Walle 2, 8500 Kortrijk",
    // logo:
    //   "https://www.safeshops.be/wp-content/uploads/2017/07/Carrefour-logo.png",
    price: "€0,29/stk",
  },
  {
    name: "Spar",
    address: "Engelse Wandeling 1A, 8500 Kortrijk",
    // logo:
      // "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Spar-logo.svg/1024px-Spar-logo.svg.png",
    price: "€0,28/stk",
  },
  {
    name: "Action",
    address: "Magdalenastraat 15b, 8500 Kortrijk",
    // logo:
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Action_Nederland_Logo_2020.svg/1200px-Action_Nederland_Logo_2020.svg.png",
    price: "€0,18/stk",
  },
];

//<img alt={assets} src={assets}></img>;

const Shop = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>Stores</h2>
        <ul className={styles.wrap}>
          {shopsData.map((shop, key) => (
            <ShopItem key={key} shop={shop} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Shop;
