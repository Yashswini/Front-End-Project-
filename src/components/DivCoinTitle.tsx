import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DivCoinTitle.module.css";

export type DivCoinTitleType = {
  sandeep?: string;
  johnSmith?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const DivCoinTitle: FunctionComponent<DivCoinTitleType> = ({
  sandeep,
  johnSmith,
  propPadding,
}) => {
  const divIncreaseStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.divCoinTitle}>
      <div className={styles.divCointop}>
        <div className={styles.imgMargin}>
          <img
            className={styles.sandeepIcon}
            loading="lazy"
            alt=""
            src={sandeep}
          />
          <div className={styles.divIncrease} style={divIncreaseStyle}>
            <div className={styles.johnSmith}>{johnSmith}</div>
            <div className={styles.designationHere}>Designation here</div>
          </div>
        </div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
          fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
          nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
          neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
          quis consectetur. Tellus gravida ultricies feugiat sed eu egestas
          dolor est ipsum. Malesuada etiam mi gravida praesent interdu
        </div>
      </div>
    </div>
  );
};

export default DivCoinTitle;
