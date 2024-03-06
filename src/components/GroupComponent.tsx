import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  divincrease?: string;
  calculateYourProfits?: string;

  /** Style props */
  propBackground?: CSSProperties["background"];
  propBackground1?: CSSProperties["background"];
  propPadding?: CSSProperties["padding"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  divincrease,
  calculateYourProfits,
  propBackground,
  propBackground1,
  propPadding,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground1,
    };
  }, [propBackground1]);

  const divitemwrapperStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.frameChild} style={rectangleDivStyle} />
      <img
        className={styles.divincreaseIcon}
        loading="lazy"
        alt=""
        src={divincrease}
      />
      <div className={styles.coinTitleDivWrapper}>
        <div className={styles.coinTitleDiv}>
          <b className={styles.calculateYourProfits}>{calculateYourProfits}</b>
          <button className={styles.divitemwrapper} style={divitemwrapperStyle}>
            <div className={styles.checkNow}>Check Now</div>
            <img
              className={styles.iconlylightarrowRight}
              alt=""
              src="/iconlylightarrow--right.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
