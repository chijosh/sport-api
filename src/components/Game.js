import React from "react";


export const Game = ({ eventName, eventSport, eventGroup }) => (
    <div>
        <div className="card-container ">{eventName} {eventSport} {eventGroup}</div>
    </div>
);


