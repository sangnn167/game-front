import React, { FC } from "react";
import styles from "./styles.module.css"
import { BiFilterAlt } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdStar } from "react-icons/md";

type Props = {};

export const Navbar: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <BiFilterAlt size={30} />
        <p>FILTERS</p>
        <p className={styles.textClear}>Clear all</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.descripbe}>
        <div className={styles.textRarity}>
          <p>RARITY</p><IoMdArrowDropdown />
        </div>
        <div className={styles.textEpic}>
          <p>Epic</p><input type="checkbox" />
        </div>
        <div className={styles.textEpic}>
          <p>Mythical</p><input type="checkbox" />
        </div>
        <div className={styles.textEpic}>
          <p>Legendary</p><input type="checkbox" />
        </div>
        <div className={styles.linee}></div>
        <div className={styles.textRarity}>
          <p>SKIN RARITY</p><IoMdArrowDropdown />
        </div>
        <div className={styles.star}>
          <p><MdStar size={30} /></p><input type="checkbox" />
        </div>
        <div className={styles.star}>
          <p><MdStar size={30} /><MdStar size={30} /></p><input type="checkbox" />
        </div>
        <div className={styles.star}>
          <p><MdStar size={30} /><MdStar size={30} /><MdStar size={30} /></p><input type="checkbox" />
        </div>
        <div className={styles.star}>
          <p><MdStar size={30} /><MdStar size={30} /><MdStar size={30} /><MdStar size={30} /></p><input type="checkbox" />
        </div>
        <div className={styles.starBottom}>
          <p><MdStar size={30} /><MdStar size={30} /><MdStar size={30} /><MdStar size={30} /><MdStar size={30} /></p><input type="checkbox" />
        </div>
        <div className={styles.linee}></div>
        <div className={styles.textPrice}>
          <p>PRICE RANGE</p><IoMdArrowDropdown />
        </div>
        <div className={styles.price}>
          <div className={styles.priceMin}>0</div>-<div className={styles.priceMax}>1.000</div>
        </div>
      </div>
    </div>
  )
}