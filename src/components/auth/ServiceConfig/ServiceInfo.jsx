import React from "react";
import { auth } from '../../../firebase';
import Map from "./Map"
import InfoButton from "./InfoButton";

const ServiceInfo = () => {

    const user = (auth.currentUser);

    return (
        <div>
            <h1 className="userInfo"> Para: {user.displayName}</h1>
       <div>
       <Map></Map>
       </div>
       <InfoButton></InfoButton>
        </div>
    )
}

export default ServiceInfo;