import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import SvgArrowRight from "../components/SvgArrowRight";
import FrameComponent from "../components/FrameComponent";
import styles from "./Bitcoin.module.css";

const Bitcoin: FunctionComponent = () => {
  return (
    <div className={styles.bitcoin}>
      <main className={styles.linkWrapper}>
        <Navbar />
        <section className={styles.spanhdcff}>
          <SvgArrowRight />
          <div className={styles.spanhdcffInner}>
            <div className={styles.chartItemContainerParent}>
              <div className={styles.chartItemContainer}>
                <div className={styles.coinContent}>
                  <div className={styles.nodeParentChart}>
                    <h3 className={styles.getStartedWith}>
                      Get Started with KoinX for FREE
                    </h3>
                    <div className={styles.withOurRange}>
                      With our range of features that you can equip for free,
                      KoinX allows you to be more educated and aware of your tax
                      reports.
                    </div>
                  </div>
                  <img
                    className={styles.containerHeightVariable}
                    alt=""
                    src="/frame-3.svg"
                  />
                  <button className={styles.textNodeCoinTitle}>
                    <div className={styles.getStartedFor}>
                      Get Started for FREE
                    </div>
                    <img
                      className={styles.iconlylightarrowRight}
                      alt=""
                      src="/iconlylightarrow--right.svg"
                    />
                  </button>
                </div>
              </div>
              <div className={styles.realisedProfitloss}>
                <div className={styles.buttonProceedToNext}>
                  <h3 className={styles.trendingCoins24h}>
                    Trending Coins (24h)
                  </h3>
                  <div className={styles.viewMoreWrapper}>
                    <div className={styles.viewMore}>View more</div>
                  </div>
                </div>
                <div className={styles.rectangleContainerHeader}>
                  <div className={styles.divchartitem}>
                    <div className={styles.link}>
                      <img
                        className={styles.component50Icon}
                        loading="lazy"
                        alt=""
                        src="/component-50.svg"
                      />
                      <div className={styles.ethereumeth}>Ethereum(ETH)</div>
                    </div>
                    <button className={styles.divcointopmargin}>
                      <img
                        className={styles.divcointopmarginChild}
                        alt=""
                        src="/polygon-2.svg"
                      />
                      <div className={styles.divcointitle}>8.21%</div>
                    </button>
                  </div>
                  <div className={styles.divchartitem1}>
                    <div className={styles.component50Parent}>
                      <img
                        className={styles.component50Icon1}
                        alt=""
                        src="/component-50-1@2x.png"
                      />
                      <div className={styles.bitcoinBtc}>Bitcoin (BTC)</div>
                    </div>
                    <button className={styles.vectorParent}>
                      <img
                        className={styles.frameChild}
                        alt=""
                        src="/polygon-2-2.svg"
                      />
                      <div className={styles.div}>5.26%</div>
                    </button>
                  </div>
                  <div className={styles.divchartitem2}>
                    <div className={styles.component50Group}>
                      <img
                        className={styles.component50Icon2}
                        alt=""
                        src="/component-50-2@2x.png"
                      />
                      <div className={styles.polygonMatic}>Polygon (MATIC)</div>
                    </div>
                    <button className={styles.vectorGroup}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/polygon-2-2.svg"
                      />
                      <div className={styles.div1}>4.32%</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FrameComponent />
    </div>
  );
};

export default Bitcoin;
