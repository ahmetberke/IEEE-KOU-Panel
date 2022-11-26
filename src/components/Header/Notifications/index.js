import React from "react";
import './index.scss'

function Notifications() {

    const hasNewNotifications = true;
    var notAlert;
    if (hasNewNotifications) {
        notAlert = <div className="whiteDot"><div className="redDot"></div></div>
    }

    return (
        <div className="Notifications">
            {notAlert}
            <img src="icons/notification.png" alt="notification"></img>
        </div>
    );
}

export default Notifications;