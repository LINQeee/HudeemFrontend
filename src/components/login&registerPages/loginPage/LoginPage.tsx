import classes from "./LoginPage.module.sass";
import Logo from "../../UI/logo/Logo.tsx";
import manDancing from "../../../assets/indian-male-dancing.svg";
import LoginForm from "../loginForm/LoginForm.tsx";
import {IInputError} from "../../../utils/types/InputErrorType.ts";

const LoginPage = () => {

    const submitForm = (email: string, password: string, rememberMe: boolean, ip: string): Promise<IInputError> => new Promise(resolve => {
    });

    return (
        <div className={classes.loginPage}>
            <Logo className={classes.logo}/>
            <img className={classes.backgroundImage} src={manDancing} alt={"background"}/>
            <div className={classes.formBox}>
                <LoginForm onSubmitForm={submitForm}/>
            </div>
        </div>
    );
};

export default LoginPage;