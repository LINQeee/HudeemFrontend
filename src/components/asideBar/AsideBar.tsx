import classes from "./AsideBar.module.scss";
import AsideButton from "../UI/asideButton/AsideButton.tsx";

const AsideBar = () => {
    return (
        <aside className={classes.asideBar}>
            <div className={classes.logo}>Logo</div>
            <AsideButton content={"Home"} iconClasses={"fa-light fa-house"} active={true}/>
            <AsideButton content={"Goals"} iconClasses={"fa-light fa-bullseye-arrow"}/>
        </aside>
    );
};

export default AsideBar;