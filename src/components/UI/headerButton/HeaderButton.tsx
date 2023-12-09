import classes from "./HeaderButton.module.sass";
import {FC, memo} from "react";

interface HeaderButtonProps {
    iconClasses: string;
}

const HeaderButton: FC<HeaderButtonProps> = memo(({iconClasses}) => {
    return (
        <button title={"notifications"} className={classes.headerButton}>
            <i className={iconClasses}></i>
        </button>
    );
});

export default HeaderButton;