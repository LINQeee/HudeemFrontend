import classes from "./AsideBar.module.sass";
import Logo from "../../../UI/logo/Logo.tsx";
import AsideButton from "../../../UI/layoutUI/asideButton/AsideButton.tsx";

const AsideBar = () => {
    return (
        <aside className={classes.asideBar}>
            <Logo/>
            <AsideButton content={"Home"} iconClasses={"fa-light fa-house"} active={true} onClick={() => {}}/>
            <AsideButton content={"Goals"} iconClasses={"fa-light fa-bullseye-arrow"} onClick={() => {}}/>
        </aside>
    );
};

export default AsideBar;