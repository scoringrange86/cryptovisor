import './LeftPanel.css'
import { Link } from 'react-router-dom';

const LeftPanel = () => {
    return (
        <div className="leftpanel-wrapper">
            <div className="left-panel-list">
                <div className="left-panel-article" style={{ marginTop: "200px" }}>
                    <p>
                        What is CryptoCurrency?
                    </p>
                    <p4>
                        Crytpocurrency is a digital currency used to exchange goods and services online.
                        This asset is secured through cryptography.
                    </p4>
                    <Link className="left-panel-btn" to="/Education">Learn More</Link>
                </div>
                <div className="left-panel-article">
                    <p>
                        What is BlockChain?
                    </p>
                    <p4>
                        BlockChain is the underlying technology that drives cryptocurrency. It is a decentralized database that stores information in a chain of blocks.
                    </p4>
                    <Link className="left-panel-btn" to="/Education">Learn More</Link>
                </div>
                <div className="left-panel-article">
                    <p>
                        What is a Consensus Mechanism?
                    </p>
                    <p4>
                        A consensus mechanism is the fail-safe mechanism used by a coin to confirm transactions on its database.
                    </p4>
                    <Link className="left-panel-btn" to="/Education">Learn More</Link>
                </div>
                <div className="left-panel-article">
                    <p>
                        What is DeFi?
                    </p>
                    <p4>
                        Decentralized Finance, also known as DeFi, is a form of finance that doesn’t involved financial middlemen such as banks, exchanges, and brokerages.
                    </p4>
                    <Link className="left-panel-btn" to="/Education">Learn More</Link>
                </div>
            </div>
        </div>
    )
}

export default LeftPanel