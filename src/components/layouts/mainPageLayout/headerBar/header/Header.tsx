import classes from "./Header.module.sass";
import UserAvatar from "../userAvatar/UserAvatar.tsx";
import HeaderButton from "../../../../UI/layoutUI/headerButton/HeaderButton.tsx";
import VerticalSeparator from "../../../../UI/layoutUI/verticalSeparator/VerticalSeparator.tsx";

const Header = () => {
    return (
        <header className={classes.header}>
            <HeaderButton iconClasses={"fa-light fa-bell"}/>
            <VerticalSeparator/>
            <UserAvatar/>
        </header>
    );
};

export default Header;