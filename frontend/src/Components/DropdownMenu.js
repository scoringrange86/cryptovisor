import './DropdownMenu.css'
import DropdownItem from './DropdownItem'

// Need to design/implement link
const DropdownMenu = (props) => {

    const pages = props.pages
    return (
        <div className={`dropdown-menu${props.isOpen ? "-show" : "-hidden"}`}>
            {pages.map(
                (page) => (
                    <DropdownItem>{page}</DropdownItem>
                )
            )}
        </div>
    )
}

export default DropdownMenu