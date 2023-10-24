"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Settings from "./components/ui/settings";
import Guess from "./components/ui/guess";
import { useContext, useRef } from "react";

export default function Home() {
  const {isSubmitted} = useContext()

  return (
    <div className={styles.gridContainer}>
      <div className={styles.sideMenu}>
        <Settings />
      </div>
      <div className={styles.mainPanel}>
        {/* <Image
            src="/Nevada.png"
            alt="Picture of the author"
            fill
            style={{ objectFit: "contain" }}
          /> */}
      </div>
    </div>
  );
}
