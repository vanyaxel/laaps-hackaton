import React from "react";
import { auth } from '../../../firebase';
import InfoButton from "./InfoButton";
import Mapbox from "../../../mapbox/Mapbox";
import './ServiceInfo.css'

const ServiceInfo = () => {

    const user = (auth.currentUser);

    return (
        <div className="mapContainer">
            <p className="userInfo"> {user.email} </p>
       <Mapbox></Mapbox>
       <InfoButton></InfoButton>
        </div>
    )
}

export default ServiceInfo;