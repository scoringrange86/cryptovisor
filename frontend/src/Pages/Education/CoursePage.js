import "./CoursePage.css"
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";

const CoursePage = () => {

    // const location = useLocation()
    // const {} = location.state

    return (
        <>
        <div className="hero">
                <div className="header">
                    <h1 className="title"> Digital Ledger </h1>
                    <p className="title-message" >
                        A hardware wallet is the most secure way to hold your crypto. These are devices that look similar to usb flash drives (or the old juke phone). They are the most secure way to hold your coins because the wallet isn’t connected to the internet unless you’re using it, unlike a crypto exchange or software wallter. Our recommend brand is the Ledger Nano X because it can hod over 64 apps (coins).
                    </p>
                </div>
            </div>
            <div className="takeaways-wrapper">
                <h2 className="subtitle"> Key Takeaways</h2>
                <h3> Digital Ledgers:</h3>
                <p className="subtitle-message"> The most secure way to hold your crypto since it's offline</p>
                <h3>Recommend Brands:</h3>
                <p>Ledger Nano X, Ledger Nano S</p>
            </div>
            </>
    )
}

export default CoursePage