import classes from "../modules/FormLayout.module.sass";
import CustomLink from "../../UI/customLink/CustomLink.tsx";
import React, {FC} from "react";
import "../modules/FormLayout.sass";

interface LoginFormLayoutProps {
    children: React.ReactNode;
}

const LoginFormLayout: FC<LoginFormLayoutProps> = ({children}) => {
    return (
        <div className={classes.formBox}>
            <form className={classes.form}>
                <div className={classes.header}>
                    <h1>С возвращением!</h1>
                    <h5>Пожалуйста введите свои данные</h5>
                </div>
                {children}
                <div className={classes.additionalAdvice}>
                    <span>Нету аккаунта?</span>
                    <CustomLink href={"/register"} label={"Зарегистрироваться"} fontSize={16}/>
                </div>
            </form>
        </div>
    );
};

export default LoginFormLayout;