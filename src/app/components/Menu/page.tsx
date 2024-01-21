"use client"
import React, { FC, useState, useEffect } from "react";
import styles from "./styles.module.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { blockScroll } from "@/app/utils/helper/scroll";
import { BiFilterAlt } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdStar } from "react-icons/md";

type Props = {};

export const Menu: FC<Props> = () => {

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    blockScroll(isMenuOpen);
    return () => {
      blockScroll(false);
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.container}>
      <div className={styles.headerRight}>
        <ul>
          <li className={styles.textHouses}>
            <a href="#">HOUSES</a>
          </li>
          <li className={styles.textItem}>
            <a href="#">ITEM</a>
          </li>
          <li className={styles.textItem}>
            <a href="#">FASHION SETS</a>
          </li>
        </ul>
      </div>
      <div className={styles.iconNavbar}>
        <GiHamburgerMenu size={45} onClick={toggleMenu} />
      </div>
      <div className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.title}>
          <BiFilterAlt size={55} />
          <p>FILTERS</p>
          <p className={styles.textClear}>Clear all</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.textRarity}>
          <p>RARITY</p><IoMdArrowDropdown size={55} />
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
          <p>SKIN RARITY</p><IoMdArrowDropdown size={55} />
        </div>
        <div className={styles.star}>
        <p><MdStar size={55} /></p><input type="checkbox" />
        </div>
        <div className={styles.star}>
        <p><MdStar size={55} /><MdStar size={55} /></p><input type="checkbox" />
        </div>
        <div className={styles.star}>
        <p><MdStar size={55} /><MdStar size={55} /><MdStar size={55} /></p><input type="checkbox" />
        </div>
        <div className={styles.star}>
        <p><MdStar size={55} /><MdStar size={55} /><MdStar size={55} /><MdStar size={55} /></p><input type="checkbox" />
        </div>
        <div className={styles.star}>
        <p><MdStar size={55} /><MdStar size={55} /><MdStar size={55} /><MdStar size={55} /><MdStar size={55} /></p><input type="checkbox" />
        </div>
        <div className={styles.linee}></div>
        <div className={styles.textRarity}>
          <p>PRICE RANGE</p><IoMdArrowDropdown size={55} />
        </div>
        <div className={styles.price}>
          <div className={styles.priceMin}>0</div>-<div className={styles.priceMax}>1.000</div>
        </div>
      </div>
    </div>
  )
}