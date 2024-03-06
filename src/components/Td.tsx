import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Td.module.css";

export type TdType = {
  prop?: string;
  prop1?: string;
  nov102021About1Year?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propColor?: CSSProperties["color"];
};

const Td: FunctionComponent<TdType> = ({
  prop,
  prop1,
  nov102021About1Year,
  propWidth,
  propHeight,
  propColor,
}) => {
  const edasvgStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const spanStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.td}>
      <div className={styles.edasvgParent}>
        <div className={styles.edasvg} style={edasvgStyle}>
          <span className={styles.edasvgTxt}>
            <span>{prop}</span>
            <span className={styles.span} style={spanStyle}>
              {prop1}
            </span>
          </span>
        </div>
        <div className={styles.nov102021}>{nov102021About1Year}</div>
      </div>
    </div>
  );
};

export default Td;
