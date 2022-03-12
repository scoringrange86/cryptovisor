import "./CoinAnalysisPage.css"
import downwardTrend from "../../images/downwardTrend.png"
import onehour from "../../images/onehour.png"
import oneday from "../../images/oneday.png"
import oneweek from "../../images/oneweek.png"

const CoinAnalysisPage = () => {

    return (
        <div className="coin-analysis-wrapper">
            <h1>Will Stellar Lumens Continue on the Downtrend</h1>
            <div className="article-signature">
                <div className="article-author">
                    by
                    <span className="article-author-name">Jimmy Mickens</span>
                </div>
                <p className="article-author-time">Sep 19, 2021 at 4p.m. EST</p>
            </div>
            <img src={downwardTrend} alt="" className="image" />
            <h2 className="summary">Summary of XLM/USDT price action</h2>
            <p className="summary-content"> Stellar Lumens is in a Longterm Bearish direction according to the 1W Chart with no momentum shift in sight
                XLM/USDT is trading below $0.32 and below the 9EMA on the 1D chart
                Support and Resistance Levels:
                Short term: Support - $NA // Resistance - $0.3090
                Medium term: Support - $0.3136 // Resistance - $0.40
                Long term: Support - $0.23 // Resistance - $0.70
            </p>
            <h2 className="one-hour-chart">XLM/USDT Short Term (1hr Chart)</h2>
            <img src={onehour} alt="" className="image" />
            <p className="image-description">Pair: XLM/USDT — Time Period: 1hr — Time Frame: 24hrs</p>
            <p className="article-content"> Looking at XLM/USDT over the past 24hrs, you can see that XLM has been on a serious downtrend, having decreased by approximately 5.20%.

                The CCI20 is hinting at a potential recovery but only of about 1-2% as it reaches towards the -100 level.

                The MACD indicator on the 1hr chart above indicates a further decline in price as the moment continues downward. The MACD Level and Signal are showing no sign of curling upwards anytime soon.

                For the short term, XLM/USDT does not represent a solid bullish investment. But keep yours eyes open for a shift in the MACD Level and Signal indicators as the momentum could shift at any moment.
            </p>
            <h2 className="one-day-chart">XLM/USDT Medium Term (1D Chart)</h2>
            <img src={oneday} alt="" className="image" />
            <p className="image-description">Pair: XLM/USDT — Time Period: 1D — Time Frame: 27Days</p>
            <p className="article-content">
                Looking at XLM/USDT over the past 27Days, you can see that XLM has been on a choppy ride but following a downtrend. The price action is showing an over decline of approximately 17%. With major swings of almost 26% at the peak of $0.71 and -11% at a current low of $0.2965.

                The CCI20 is hinting at further decline but only of about 1-2% as it crosses downwards on -100 level.

                The MACD indicator on the 1D chart above indicates a further decline in price as the moment continues downward. The MACD Level and Signal are showing no sign of curling upwards anytime soon.

                For the medium term, XLM/USDT does not represent a solid bullish investment. I would not anticipate a shift in the MACD which would continue the downtrend of XLM/USDT.
            </p>
            <h2 className="one-week-chart">XLM/USDT Today (1W Chart)</h2>
            <img src={oneweek} alt="" className="image" />
            <p className="image-description">Pair: XLM/USDT — Time Period: 1W — Time Frame: 6-months</p>
            <p className="article-content">
                Looking at XLM/USDT over the past 6-months, you can see that XLM has some extreme high and relative lows. The price has decreased by approximately 25.20% with major swings of almost 66% at the peak of $0.71 and -48% at a low of $0.2330.

                The CCI20 is hinting at a potential of stability but only if the CCI can curl back towards the 0 level.

                The MACD indicator on the 1W chart above indicates a further decline in price as the moment continues downward. The MACD Level and Signal are showing no sign of curling upwards anytime soon.

                For the long term, XLM/USDT does not represent a solid bullish investment. Following the price actions recent rejection at the $0.3994 mark, XLM looks to be on a slippery slow down. But keep yours eyes open for a shift in the MACD Level and Signal indicators if the CCI curls back towards the 0 level,

            </p>
            <h2 className="references">Referenced Articles:</h2>
            <p>https://www.tradingview.com</p>
        </div>
    )
}

export default CoinAnalysisPage