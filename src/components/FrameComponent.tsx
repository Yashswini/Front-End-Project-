import { FunctionComponent, useEffect, useState } from "react";
import DivcoinMayLikeContainer from "./DivcoinMayLikeContainer";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  const [coinsData, setCoinsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/coins?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true');
        const data = await response.json();
        
        
        // Assuming 'bitcoin' is the key you want to retrieve from the API response
        setCoinsData(data.bitcoin);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
  return (
    <footer className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.youMayAlsoLike}>
        <DivcoinMayLikeContainer
          youMayAlsoLike="You May Also Like"
          bnbpng="/bnbpng@2x.png"
          bNB="BNB"
          topMarginDiv="+0.52%"
          imgMargin="$319.34"
          svg="/202401031434svg@2x.png"
          solanaSOLjpeg="/solana-soljpeg@2x.png"
          sOL="SOL"
          chartItemWrapper="-2.89%"
          divCointopmargin="$109.33"
          svg1="/202401031436svg@2x.png"
          xRPXRPpng="/xrp-xrppng@2x.png"
          xRP="XRP"
          sVGFill="+0.78%"
          divContainerMargin="$0.634810"
          svg2="/202401031435svg@2x.png"
          cardanoADAjpeg="/cardano-adajpeg@2x.png"
          aDA="ADA"
          aVAX="-1.57%"
          coinItemPrice="$0.614869"
          svg3="/202401031434svg-1@2x.png"
          avalancheAVAXpng="/avalanche-avaxpng@2x.png"
          aVAX1="AVAX"
          prop="-3.78%"
          buttonNextSlide="$41.05"
          svg4="/202401031437svg@2x.png"
        />
        <DivcoinMayLikeContainer
          youMayAlsoLike="Trending Coins"
          bnbpng="/bitcoin-btcpng@2x.png"
          bNB="BTC"
          topMarginDiv="+0.10%"
          imgMargin="$45,332.83"
          svg="/202401031434svg-2@2x.png"
          solanaSOLjpeg="/ethereumethpng@2x.png"
          sOL="ETH"
          chartItemWrapper="-0.21%"
          divCointopmargin="$2,375.15"
          svg1="/202401031435svg-1@2x.png"
          xRPXRPpng="/lidostakedether-stethpng@2x.png"
          xRP="stETH"
          sVGFill="-0.34%"
          divContainerMargin="$2,371.72"
          svg2="/202401031437svg-1@2x.png"
          cardanoADAjpeg="/uniswap-unipng@2x.png"
          aDA="UNI"
          aVAX="-4.02%"
          coinItemPrice="$7.3192"
          svg3="/202401031437svg-2@2x.png"
          avalancheAVAXpng="/centrifuge-cfgjpeg@2x.png"
          aVAX1="CFG"
          prop="-1.76%"
          buttonNextSlide="$0.773600"
          svg4="/202401031437svg-3@2x.png"
          propPadding="unset"
          propPadding1="unset"
          propPadding2="2.75px var(--padding-9xs) 2.25px"
          propWidth="129px"
          propPadding3="unset"
          propBackgroundColor="rgba(238, 104, 85, 0.1)"
          propPadding4="2.75px var(--padding-9xs) 2.25px"
          propColor="#e96975"
          propPadding5="2.75px var(--padding-10xs) 2.25px var(--padding-9xs)"
          propWidth1="112px"
          propTop="36.31%"
          propBottom="36.19%"
          propTop1="63.81%"
          propBottom1="8.69%"
        />
      </div>
    </footer>
  );
};

export default FrameComponent;
