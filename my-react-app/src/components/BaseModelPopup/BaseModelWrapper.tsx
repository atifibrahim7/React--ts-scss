import React from "react";
import Model from "./Model";

interface BaseModelWrapperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseModelWrapper: React.FC<BaseModelWrapperProps> = ({isModalVisible , onBackdropClick }) => {
    if(!isModalVisible) {
        return null;}
    return (
    <Model onBackdropClick={onBackdropClick}  > 
    <div>   Model info</div>
    </Model>) ; 
}
export default BaseModelWrapper;