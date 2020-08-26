import React from "react";
import { auth } from '../../../firebase';
import InfoButton from "./InfoButton";
import Mapbox from "../../../mapbox/Mapbox";

const ServiceInfo = () => {

    const user = (auth.currentUser);

    return (
        <div>
            <h1 className="userInfo"> Para: {user.email}</h1>
       <div>
       <Mapbox></Mapbox>
       </div>
       <InfoButton></InfoButton>
        </div>
    )
}

export default ServiceInfo;