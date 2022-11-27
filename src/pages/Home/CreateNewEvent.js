import React from "react";
import './index.scss';
import { Link } from "react-router-dom";

function CreateNewEvent(){
    return (
        <Link to="/events" className="CreateNewEvent impBox">
            <div className="text">
                <div className="smallText">
                    + ADD NEW
                </div>
                <div className="bigText">
                    EVENT
                </div>
            </div>
            <div className="icon">
                <img src="icons/calendar.png" alt="calendar"></img>
            </div>
        </Link>
    );
}

export default CreateNewEvent;