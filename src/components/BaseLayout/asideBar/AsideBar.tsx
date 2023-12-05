import classes from "./AsideBar.module.scss";
import AsideButton from "../../UI/asideButton/AsideButton.tsx";

const AsideBar = () => {
    return (
        <aside className={classes.asideBar}>
            <div className={classes.logo}>Logo</div>
            <AsideButton content={"Home"} iconClasses={"fa-light fa-house"} active={true} onClick={() => {}}/>
            <AsideButton content={"Goals"} iconClasses={"fa-light fa-bullseye-arrow"} onClick={() => {}}/>
        </aside>
    );
};

export default AsideBar;