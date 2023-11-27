import classes from "./ActionButton.module.scss";
import {FC} from "react";
import {StyleType} from "../../../utils/StyleType.ts";

interface SubmitButtonProps {
    label: string;
    iconClasses: string;
    styleType: StyleType;
}

const ActionButton: FC<SubmitButtonProps> = ({label, iconClasses, styleType}) => {

    const className = [
        classes.actionButton,
        styleType === StyleType.PRIMARY ? classes.primary : undefined,
        styleType === StyleType.SECONDARY ? classes.secondary : undefined
    ].join(" ");

    return (
        <button className={className}>
            <i className={iconClasses}></i>
            <span>{label}</span>
        </button>
    );
};

export default ActionButton;