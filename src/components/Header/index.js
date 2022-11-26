import React from "react";
import './index.scss'
import Logout from "./Logout";
import Notifications from "./Notifications";

function Header() {
    return (
        <div className="Header">
            <div className="Brand">
                <h1>Lorem Ipsum is Awsome</h1>
                <h4>Lorem Ipsum is simply dummy text</h4>
            </div>
            <div className="Activity">
                <Notifications></Notifications>
                <Logout></Logout>
            </div>
        </div>
    );
}

export default Header;