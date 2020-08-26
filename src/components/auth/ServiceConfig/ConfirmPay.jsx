import React from "react";
import { auth } from '../../../firebase';
import Mapbox from "../../../mapbox/Mapbox";
import Typography from "@material-ui/core/Typography"
import { withRouter } from "react-router-dom";

const ConfirmPay = () => {
    const user = (auth.currentUser)

    return (
        <div>
            <p> {user.email} </p>
            <Mapbox></Mapbox>
            <Typography 
            variant="h5">Lavado exterior con encerado</Typography>
            <Typography
            variant="h6">Precio por servicio:</Typography>
            <Typography
            variant="h5">$130</Typography>
            <p>Recuerda dar propina si estás satisfecho con el servicio</p>
        
        </div>
    )
}

export default withRouter(ConfirmPay);
