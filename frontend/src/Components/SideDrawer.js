import './SideDrawer.css';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const SideDrawer = ({ show, click }) => {

    const sideDrawerClass = ["sidedrawer"];
    if (show) {
        sideDrawerClass.push("show");
    }
    //  const cart = useSelector(state => state.cart)
    //  const {cartItems}  = cart;

    //  const getCartCount = () => {
    //      return cartItems.reduce((qty, item) => qty + Number(item.qty) , 0);
    //  }
    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sideDrawer-items" onClick={click}>
                <li>
                    <Link to="/">
                        News</Link>
                </li>
                <li>
                    <Link to="/Education">
                        Education</Link>
                </li>
                <li>
                    <Link to="/Analysis">Analysis</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer