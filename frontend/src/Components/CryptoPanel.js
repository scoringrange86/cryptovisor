import './CryptoPanel.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"
import { useTheme } from '@mui/material/styles';
import { useMediaQuery} from '@mui/material';
// import { makeStyles } from '@mui/styles';

// use usestyles to handle crypto panel data array size ?
// makeStyles is deprecated
// can use sx prop or styled() as a workaround ? 
const CryptoPanel = () => {
    // calls on the theme passed into the function, in this case we want to access the breakpoints
    const theme = useTheme();

    const useStyles = () => ({
        arraySize: 7
        
        // {
        //     size: 7,
        //     [theme.breakpoints.up("xs")]: {
        //         size: 3,
        //     },
        //     [theme.breakpoints.up("s")]: {
        //         size: 4,
        //     },
        //     [theme.breakpoints.up("md")]: {
        //         size: 5,
        //     },
        //     [theme.breakpoints.up("lg")]: {
        //         size: 6,
        //     },
        //     [theme.breakpoints.up("xl")]: {
        //         size: 7,
        //     }
        // }
    }
    
    );

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
            // run media query 
            // create new data array and insert number of values based on query
            // insert data into setCoins
            var size; 
            console.log("Array size: ",useStyles.arraySize)
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