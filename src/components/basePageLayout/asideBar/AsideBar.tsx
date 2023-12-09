import classes from "./AsideBar.module.sass";
import AsideButton from "../../UI/asideButton/AsideButton.tsx";
import Logo from "../../UI/logo/Logo.tsx";

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