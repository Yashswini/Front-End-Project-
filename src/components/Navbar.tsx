import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";

const Navbar: FunctionComponent = () => {
  return (
    <header className={styles.navbar}>
      <img
        className={styles.koinxLogoIcon}
        loading="lazy"
        alt=""
        src="/1-koinx-logo@2x.png"
      />
      <div className={styles.changeChameleon}>
        <div className={styles.cryptoTaxes}>Crypto Taxes</div>
        <div className={styles.freeTools}>Free Tools</div>
        <div className={styles.imgmargin}>
          <div className={styles.resourceCenter}>Resource Center</div>
        </div>
        <button className={styles.getstartedbtn}>
          <div className={styles.getStarted}>Get Started</div>
        </button>
      </div>
      <div className={styles.feedbackWrapper}>
        <div className={styles.feedback}>Feedback</div>
      </div>
    </header>
  );
};

export default Navbar;
