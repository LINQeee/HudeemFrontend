import classes from "./AsideButton.module.scss";
import {FC} from "react";

interface AsideButtonProps {
    content: string;
    iconClasses: string;
    active?: boolean;
}

const AsideButton: FC<AsideButtonProps> = ({content, iconClasses, active }) => {

    const className = [classes.asideButton, active ? classes.active : undefined].join(" ");

    return (
        <button className={className}>
            <i className={iconClasses}></i>
            <span>{content}</span>
        </button>
    );
};

export default AsideButton;