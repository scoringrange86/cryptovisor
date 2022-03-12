import "./DropdownItem.css"
import { Link } from "react-router-dom"

// Need to design/ implement link
const DropdownItem = (props) => {

    return (
        <Link to="#" className="dropdown-item"> {props.children}</Link>
    )
}

export default DropdownItem