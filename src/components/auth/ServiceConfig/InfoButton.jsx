import React from "react";
import ModalService from "./ModalService"
import "./ServiceInfo.css"

const InfoButton = () => {

    return (
        <div className="infos">
            <p> Tenemos -- lavadores en tu zona </p>
            <ModalService></ModalService>
        </div>
    )
}

export default InfoButton;