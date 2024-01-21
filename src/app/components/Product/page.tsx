import React, { FC } from "react";
import styles from "./styles.module.css"
import { MdStar } from "react-icons/md";

type Props = {
  category: string,
  name: string,
  images: string,
};

export const Product: FC<Props> = ({ category, name, images }) => {

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Epic':
        return '#374aaa';
      case 'Mythical':
        return '#7437AA';
      case 'Legendary':
        return '#E0D92C';
      case 'Common':
        return '#8F8F8F';
      case 'Rare':
        return '#88C745';
      default:
        return '#374aaa';
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.titleLeft}>
          <p className={styles.textOwned}>
            Owned by
          </p>
          <p className={styles.textBe2E}>
            0x21 ...Be2E
          </p>
        </div>
        <div className={styles.titleRight} style={{ backgroundColor: getCategoryColor(category) }}>
          {category}
        </div>
      </div>
      <div className={styles.product} style={{ backgroundColor: getCategoryColor(category) }}>
        <img src={images} alt="" />
        <div className={styles.starBottom}>
          <p><MdStar size={30} /><MdStar size={30} /><MdStar size={30} /><MdStar size={30} /><MdStar size={30} /></p>
        </div>
      </div>
      <div className={styles.nameProduct}>{name}</div>
      <div className={styles.tagsProduct}>#1000</div>
      <div className={styles.priceProduct}>
        <img src="/assets/images/coin.png" alt="" /><p>300 MYT</p>
      </div>


    </div>
  )
}