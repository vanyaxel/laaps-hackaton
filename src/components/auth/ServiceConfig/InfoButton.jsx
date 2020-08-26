import React from "react";
import ModalService from "./ModalService"
import Typography from '@material-ui/core/Typography';

const InfoButton = () => {

    const ValidateService = () => {

    }
    return (
        <div>
            <Typography 
            variant="h5" 
            gutterBottom> Tenemos -- lavadores en tu zona </Typography>
            <ModalService></ModalService>
        </div>
    )
}

export default InfoButton;