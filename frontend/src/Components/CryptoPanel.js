import './CryptoPanel.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"

const CryptoPanel = () => {

    const [coins, setCoins] = useState(
        [
            { symbol: "BTC/USD", percentChange: "%2.75", price: "$50,000", positiveChange: false, id: 1 },
            { symbol: "XRP/USD", percentChange: "%.05", price: "$1.04", positiveChange: true, id: 2 },
            { symbol: "USDC/USD", percentChange: "%1.15", price: "$1.00", positiveChange: true, id: 3 },
            { symbol: "BTC/USD", percentChange: "%2.75", price: "$50,000", positiveChange: false, id: 4 },
            { symbol: "XRP/USD", percentChange: "%.05", price: "$1.04", positiveChange: true, id: 5 },
            { symbol: "USDC/USD", percentChange: "%1.15", price: "$1.00", positiveChange: true, id: 6 },
            { symbol: "BTC/USD", percentChange: "%2.75", price: "$50,000", positiveChange: false, id: 7 }
        ]

    )

    useEffect(() => {
        fetch('http://localhost:5000/api/cryptoData').then(response => {
            return response.json()
        }).then((data) => {
            setCoins(data);
        })
            .catch(error => console.log(error))
    }
        , []
    )
    return (
        <div className="cryptopanel-wrapper">
            <nav className="cryptoNav">
                {
                    coins.map((coin) => (
                        <Link className="crypto-panel-btn" to="#" key={coin.id}>
                            <div className="crypto-data-wrapper">
                                <div className="crypto-data-top-row">
                                    <p>{coin.symbol}</p>
                                    <p className={`crypto-data-${coin.positiveChange ? "positive" : "negative"}-percentage`}>{coin.percentChange}</p>
                                </div>
                                <p className="crypto-data-bottom-row">{coin.price}</p>
                            </div>
                        </Link>
                    )
                    )
                }
            </nav>
        </div>
    )
}

export default CryptoPanel