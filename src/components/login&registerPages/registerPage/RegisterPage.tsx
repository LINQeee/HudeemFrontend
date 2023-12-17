import classes from "./RegisterPage.module.sass";
import Logo from "../../UI/logo/Logo.tsx";
import manDancing from "../../../assets/indian-male-dancing.svg";
import LoginFormBox from "../loginFormBox/LoginFormBox.tsx";

const RegisterPage = () => {
    return (
        <div>
            <Logo className={classes.logo}/>
            <img className={classes.backgroundImage} src={manDancing} alt={"background"}/>
            <LoginFormBox onSuccessVerification={() => {}}/>
        </div>
    );
};

export default RegisterPage;