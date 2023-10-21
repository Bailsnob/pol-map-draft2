import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.sideMenu}>
        <div>
          <span className={styles.sideButtonLabel}>bg</span>
          <input type="color" className={styles.sideButtonInput} />
        </div>
        <div>
          <span className={styles.sideButtonLabel}>ch</span>
          <input type="color" className={styles.sideButtonInput} />
        </div>
        <div>
          <input
            type="number"
            min="0"
            value="2"
            className={styles.sideButtonStrokeWidth}
          />
        </div>
        <div>
          <label for="sideButtonDingo">dingo</label>
          <input type="checkbox" id="sideButtonDingo" />
        </div>
      </div>
      <div className={styles.mainPanel}>
          <Image
            src="/Nevada.png"
            alt="Picture of the author"
            fill
            style={{ objectFit: "contain" }}
          />
      </div>
    </div>
  );
}
