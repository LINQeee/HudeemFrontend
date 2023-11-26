import classes from "./Header.module.scss";
import UserAvatar from "../userAvatar/UserAvatar.tsx";
import VerticalSeparator from "../../UI/verticalSeparator/VerticalSeparator.tsx";
import HeaderButton from "../../UI/headerButton/HeaderButton.tsx";

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