import classes from "./Logo.module.sass";
import avocadoIcon from "../../../assets/avocado.svg";
import {FC} from "react";

interface LogoProps {
    className?: string;
}
const Logo: FC<LogoProps> = ({className}) => {

    const logoClassName = [classes.logo, className].join(" ");

    return (
        <div className={logoClassName}>
            <img src={avocadoIcon} alt={"logo"}/>
            <h3>hudeem</h3>
        </div>
    );
};

export default Logo;