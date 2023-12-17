import classes from "./LoginPage.module.sass";
import Logo from "../../UI/logo/Logo.tsx";
import manDancing from "../../../assets/indian-male-dancing.svg";
import "./LoginPage.sass";
import Cookies from "universal-cookie";
import {plusDays} from "../../../services/DateService.ts";
import {useNavigate} from "react-router-dom";
import LoginFormBox from "../loginFormBox/LoginFormBox.tsx";

const LoginPage = () => {

    const navigate = useNavigate();

    const cookies = new Cookies(null, {path: "/", expires: plusDays(new Date(), 30)})

    const saveCredentials = (codeHash: string, email: string) => {
        cookies.set("code", codeHash);
        cookies.set("email", email);
        navigate("/dashboard");
    }

    return (
        <div className={classes.loginPage}>
            <Logo className={classes.logo}/>
            <img className={classes.backgroundImage} src={manDancing} alt={"background"}/>
            <LoginFormBox onSuccessVerification={saveCredentials}/>
        </div>
    );
};

export default LoginPage;