import classes from "./ActionButton.module.scss";
import React, {FC} from "react";
import {StyleType} from "../../../types&enums/StyleTypeEnum.ts";

interface SubmitButtonProps {
    label: string;
    iconClasses: string;
    styleType: StyleType;
    onClick: () => void;
}

const ActionButton: FC<SubmitButtonProps> = ({label, iconClasses, styleType, onClick}) => {

    const className = [
        classes.actionButton,
        styleType === StyleType.PRIMARY ? classes.primary : undefined,
        styleType === StyleType.SECONDARY ? classes.secondary : undefined
    ].join(" ");

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClick();
    }

    return (
        <button className={className} onClick={clickHandler}>
            <i className={iconClasses}></i>
            <span>{label}</span>
        </button>
    );
};

export default ActionButton;