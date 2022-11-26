import { Link } from "react-router-dom";
import "./index.scss"

function NavbarElement(props) {
    
    const element = props.element;
    const isSelected = props.isSelected;
    const handleChangeSelectedItem = props.handleChangeSelectedItem;
    const path = props.to;

    return (
        <Link to={path} onClick={e => handleChangeSelectedItem(element.id)} className={`NavbarElement ${isSelected ? "SelectedNavbarElement" : ""}`}>
            { element.name }
        </Link>
    );
}

export default NavbarElement;