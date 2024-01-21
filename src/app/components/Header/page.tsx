import React, { FC } from "react";
import styles from "./styles.module.css"
import { FiCreditCard } from "react-icons/fi";

type Props = {};

export const Header: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerLeft}>
        <img src="/assets/images/logogame.png" alt="" />
        <a className={styles.textMarketplace} href="#">Marketplace</a>
        <a className={styles.textWallet} href="#">Wallet</a>
      </div>
      <div className={styles.headerRight}>
        <FiCreditCard size={22} /><div className={styles.textConnect}>CONNECT WALLET</div>
      </div>
    </div>
  )
}