import React from "react";
import { auth } from '../../firebase';
import { TextField } from "@material-ui/core";
import Map from "./Map"
import InfoButton from "./InfoButton";

const ServiceInfo = () => {

    const user = (auth.currentUser);

    return (
        <div>
            <h1 className="userInfo"> Para: {user.email}</h1>
       <TextField
       aria-label="minimum height" 
       variant="outlined"
       multiline
       borderradius={16}
       border={1}
       placeholder="Dirección" />
       <div>
       <Map></Map>
       </div>
       <InfoButton></InfoButton>
        </div>
    )
}

export default ServiceInfo;