import React from "react";
import Typography from '@material-ui/core/Typography';
import ModalService from "./ModalService";
import "./ServiceInfo.css";


const InfoButton = () => {

    return (
        <div className="infos">
            <ModalService></ModalService>
        </div>
    );
};

export default InfoButton;