import classes from "./HeaderButton.module.scss";
import {FC} from "react";

interface HeaderButtonProps {
    iconClasses: string;
}

const HeaderButton: FC<HeaderButtonProps> = ({iconClasses}) => {
    return (
        <button className={classes.headerButton}>
            <i className={iconClasses}></i>
        </button>
    );
};

export default HeaderButton;