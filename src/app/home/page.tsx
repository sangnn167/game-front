import React, { FC } from "react";
import styles from "./styles.module.css"
import product from "../mock/product.json"
import { Header } from "../components/Header/page";
import { Menu } from "../components/Menu/page";
import { Navbar } from "../components/Navbar/page";
import { BiFilterAlt } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Product } from "../components/Product/page";

type Props = {};

const Home: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <Menu />
      <div className={styles.content}>
        <Navbar />
        <div className={styles.product}>
          <div className={styles.topProduct}>
            <div className={styles.topLeft}>
              <BiFilterAlt size={30} />
              <p>Sort by</p>
              <div className={styles.filter}><p>Lasted</p> <IoMdArrowDropdown /></div>
            </div>
            <div className={styles.topRight}>
              <img src="/assets/images/coin.png" alt="" /><p>1</p>=<div className={styles.priceUsd}>200.000USD</div>
            </div>
          </div>
          <div className={styles.productsCard}>
            {product.map((products) => (
              <div key={products.id}>
                <Product category={products.category} name={products.name} images={products.images} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;