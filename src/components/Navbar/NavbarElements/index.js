import { useState } from "react";
import "./index.scss"
import NavbarElement from "./NavbarElement";

function NavbarElements() {

    const elements = [
        {id: 1, name: "Home", path: "/"},
        {id: 2, name: "Contents", path: "/contents"},
        {id: 3, name: "Announcements", path: "/announcements"},
        {id: 4, name: "Events", path: "/events"}
    ]

    const [selectedElementID, setSelectedElementID] = useState(elements.filter(e => e.path === window.location.pathname)[0].id);

    const handleChangeSelectedItem = (id) => {
        setSelectedElementID(elements.fiter(e => e.path === window.location.pathname)[0].id);
    }

    const listNavbarElements = elements.map((element) => (
        <NavbarElement to={element.path} handleChangeSelectedItem={handleChangeSelectedItem} key={element.id} element={element} isSelected={Boolean(selectedElementID===element.id)} />
    ));

    return (
        <div className="NavbarElements">
            {listNavbarElements}
        </div>
    );
}

export default NavbarElements;