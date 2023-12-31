import classes from "./AsideButton.module.sass";
import {FC, memo} from "react";

interface AsideButtonProps {
    content: string;
    iconClasses: string;
    active?: boolean;
    onClick: () => void;
}

const AsideButton: FC<AsideButtonProps> = memo(({content, iconClasses, active, onClick }) => {

    const className = [classes.asideButton, active ? classes.active : undefined].join(" ");

    return (
        <button className={className} onClick={onClick}>
            <i className={iconClasses}></i>
            <span>{content}</span>
        </button>
    );
});

export default AsideButton;