import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DivcoinMayLikeContainer.module.css";

export type DivcoinMayLikeContainerType = {
  youMayAlsoLike?: string;
  bnbpng?: string;
  bNB?: string;
  topMarginDiv?: string;
  imgMargin?: string;
  svg?: string;
  solanaSOLjpeg?: string;
  sOL?: string;
  chartItemWrapper?: string;
  divCointopmargin?: string;
  svg1?: string;
  xRPXRPpng?: string;
  xRP?: string;
  sVGFill?: string;
  divContainerMargin?: string;
  svg2?: string;
  cardanoADAjpeg?: string;
  aDA?: string;
  aVAX?: string;
  coinItemPrice?: string;
  svg3?: string;
  avalancheAVAXpng?: string;
  aVAX1?: string;
  prop?: string;
  buttonNextSlide?: string;
  svg4?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propPadding2?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propPadding3?: CSSProperties["padding"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding4?: CSSProperties["padding"];
  propColor?: CSSProperties["color"];
  propPadding5?: CSSProperties["padding"];
  propWidth1?: CSSProperties["width"];
  propTop?: CSSProperties["top"];
  propBottom?: CSSProperties["bottom"];
  propTop1?: CSSProperties["top"];
  propBottom1?: CSSProperties["bottom"];
};

const DivcoinMayLikeContainer: FunctionComponent<
  DivcoinMayLikeContainerType
> = ({
  youMayAlsoLike,
  bnbpng,
  bNB,
  topMarginDiv,
  imgMargin,
  svg,
  solanaSOLjpeg,
  sOL,
  chartItemWrapper,
  divCointopmargin,
  svg1,
  xRPXRPpng,
  xRP,
  sVGFill,
  divContainerMargin,
  svg2,
  cardanoADAjpeg,
  aDA,
  aVAX,
  coinItemPrice,
  svg3,
  avalancheAVAXpng,
  aVAX1,
  prop,
  buttonNextSlide,
  svg4,
  propPadding,
  propPadding1,
  propPadding2,
  propWidth,
  propPadding3,
  propBackgroundColor,
  propPadding4,
  propColor,
  propPadding5,
  propWidth1,
  propTop,
  propBottom,
  propTop1,
  propBottom1,
}) => {
  const divcoinTopStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const divcoinTop1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const divincreaseStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const divcoinTop2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding3,
    };
  }, [propWidth, propPadding3]);

  const divincrease1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding4,
    };
  }, [propBackgroundColor, propPadding4]);

  const sVGStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const divincrease2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding5,
    };
  }, [propPadding5]);

  const divcoinTop3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const buttonNextSlideStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const buttonNextSlide1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop1,
      bottom: propBottom1,
    };
  }, [propTop1, propBottom1]);

  return (
    <div className={styles.divcoinMayLikeContainer}>
      <div className={styles.divcoinMayLikeTitle}>
        <h3 className={styles.youMayAlso}>{youMayAlsoLike}</h3>
      </div>
      <div className={styles.divlikeCharts}>
        <div className={styles.divswiperContainer}>
          <div className={styles.divswiperWrapper}>
            <div className={styles.divchartItemmargin}>
              <div className={styles.divchartItem}>
                <div className={styles.link}>
                  <div className={styles.divitemWrapper}>
                    <div className={styles.divcoinContent}>
                      <div className={styles.divcoinTopmargin}>
                        <div
                          className={styles.divcoinTop}
                          style={divcoinTopStyle}
                        >
                          <div className={styles.divcoinTitle}>
                            <div className={styles.imgmargin}>
                              <img
                                className={styles.bnbpngIcon}
                                alt=""
                                src={bnbpng}
                              />
                            </div>
                            <div className={styles.spanh2dBaaa528e}>
                              <div className={styles.bnb}>{bNB}</div>
                            </div>
                          </div>
                          <div className={styles.divincrease}>
                            <div className={styles.spanh2d2af321bc}>
                              <div className={styles.topMarginDiv}>
                                {topMarginDiv}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.divcoinPrice}>
                        <div className={styles.imgMargin}>{imgMargin}</div>
                      </div>
                    </div>
                    <div className={styles.svg}>
                      <div className={styles.svgFill}>
                        <img
                          className={styles.svgIcon}
                          loading="lazy"
                          alt=""
                          src={svg}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divchartItemmargin1}>
              <div className={styles.divchartItem1}>
                <div className={styles.link1}>
                  <div className={styles.divitemWrapper1}>
                    <div className={styles.divcoinContent1}>
                      <div className={styles.divcoinTopmargin1}>
                        <div
                          className={styles.divcoinTop1}
                          style={divcoinTop1Style}
                        >
                          <div className={styles.divcoinTitle1}>
                            <div className={styles.imgmargin1}>
                              <img
                                className={styles.solanaSoljpegIcon}
                                alt=""
                                src={solanaSOLjpeg}
                              />
                            </div>
                            <div className={styles.spanh2d66c8fb74}>
                              <div className={styles.sol}>{sOL}</div>
                            </div>
                          </div>
                          <div
                            className={styles.divincrease1}
                            style={divincreaseStyle}
                          >
                            <div className={styles.spanh2dF2ad7ec5}>
                              <div className={styles.chartItemWrapper}>
                                {chartItemWrapper}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.divcoinPrice1}>
                        <div className={styles.divCointopmargin}>
                          {divCointopmargin}
                        </div>
                      </div>
                    </div>
                    <div className={styles.svg1}>
                      <div className={styles.svgFill1}>
                        <img
                          className={styles.svgIcon1}
                          loading="lazy"
                          alt=""
                          src={svg1}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divchartItemmargin2}>
              <div className={styles.divchartItem2}>
                <div className={styles.link2}>
                  <div className={styles.divitemWrapper2}>
                    <div className={styles.divcoinContent2}>
                      <div className={styles.divcoinTopmargin2}>
                        <div
                          className={styles.divcoinTop2}
                          style={divcoinTop2Style}
                        >
                          <div className={styles.divcoinTitle2}>
                            <div className={styles.imgmargin2}>
                              <img
                                className={styles.xrpXrppngIcon}
                                alt=""
                                src={xRPXRPpng}
                              />
                            </div>
                            <div className={styles.spanh2d64ba46e9}>
                              <div className={styles.xrp}>{xRP}</div>
                            </div>
                          </div>
                          <div
                            className={styles.divincrease2}
                            style={divincrease1Style}
                          >
                            <div className={styles.spanh2d47bd3297}>
                              <div className={styles.sVG} style={sVGStyle}>
                                {sVGFill}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.divcoinPrice2}>
                        <div className={styles.divContainerMargin}>
                          {divContainerMargin}
                        </div>
                      </div>
                    </div>
                    <div className={styles.svg2}>
                      <div className={styles.svgFill2}>
                        <img
                          className={styles.svgIcon2}
                          loading="lazy"
                          alt=""
                          src={svg2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divchartItemmargin3}>
              <div className={styles.divchartItem3}>
                <div className={styles.link3}>
                  <div className={styles.divitemWrapper3}>
                    <div className={styles.divcoinContent3}>
                      <div className={styles.divcoinTopmargin3}>
                        <div className={styles.divcoinTop3}>
                          <div className={styles.divcoinTitle3}>
                            <div className={styles.imgmargin3}>
                              <img
                                className={styles.cardanoAdajpegIcon}
                                alt=""
                                src={cardanoADAjpeg}
                              />
                            </div>
                            <div className={styles.spanh2dA0371697}>
                              <div className={styles.ada}>{aDA}</div>
                            </div>
                          </div>
                          <div
                            className={styles.divincrease3}
                            style={divincrease2Style}
                          >
                            <div className={styles.spanh2dF5876622}>
                              <div className={styles.aVA}>{aVAX}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.divcoinPrice3}>
                        <div className={styles.coinItemPrice}>
                          {coinItemPrice}
                        </div>
                      </div>
                    </div>
                    <div className={styles.svg3}>
                      <div className={styles.svgFill3}>
                        <img className={styles.svgIcon3} alt="" src={svg3} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divchartItemmargin4}>
              <div className={styles.divchartItem4}>
                <div className={styles.link4}>
                  <div className={styles.divitemWrapper4}>
                    <div className={styles.divcoinContent4}>
                      <div className={styles.divcoinTopmargin4}>
                        <div
                          className={styles.divcoinTop4}
                          style={divcoinTop3Style}
                        >
                          <div className={styles.divcoinTitle4}>
                            <div className={styles.imgmargin4}>
                              <img
                                className={styles.avalancheAvaxpngIcon}
                                alt=""
                                src={avalancheAVAXpng}
                              />
                            </div>
                            <div className={styles.spanh2d59f57d28}>
                              <div className={styles.avax}>{aVAX1}</div>
                            </div>
                          </div>
                          <div className={styles.divincrease4}>
                            <div className={styles.spanh2d908e7f81}>
                              <div className={styles.div}>{prop}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.divcoinPrice4}>
                        <div className={styles.buttonNextSlide}>
                          {buttonNextSlide}
                        </div>
                      </div>
                    </div>
                    <div className={styles.svg4}>
                      <div className={styles.svgFill4}>
                        <img className={styles.svgIcon4} alt="" src={svg4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonNextSlide1} style={buttonNextSlideStyle}>
          <div className={styles.e0d847asvg}>
            <div className={styles.e0d847asvgFill}>
              <img
                className={styles.e0d847asvgIcon}
                alt=""
                src="/e0d847asvg.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonNextSlide2} style={buttonNextSlide1Style}>
          <div className={styles.e0d847asvg1}>
            <div className={styles.e0d847asvgFill1}>
              <img
                className={styles.e0d847asvgIcon1}
                alt=""
                src="/e0d847asvg.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivcoinMayLikeContainer;
