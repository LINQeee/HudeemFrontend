import classes from "./Logo.module.sass";
import avocadoIcon from "../../../assets/avocado.svg";

const Logo = () => {
    return (
        <div className={classes.logo}>
            <img src={avocadoIcon} alt={"logo"}/>
            <h3>hudeem</h3>
        </div>
    );
};

export default Logo;