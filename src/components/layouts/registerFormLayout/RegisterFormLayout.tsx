import classes from "../modules/FormLayout.module.sass";
import CustomLink from "../../UI/customLink/CustomLink.tsx";
import "../modules/FormLayout.sass";
import React, {FC} from "react";

interface RegisterFormLayoutProps {
    children: React.ReactNode;
}

const RegisterFormLayout: FC<RegisterFormLayoutProps> = ({children}) => {
    return (
        <div className={classes.formBox}>
            <form className={classes.form}>
                <div className={classes.header}>
                    <h1>Добро пожаловать!</h1>
                    <h5>Пожалуйста введите свои данные</h5>
                </div>
                {children}
                <div className={classes.additionalAdvice}>
                    <span>Уже есть аккаунт?</span>
                    <CustomLink href={"/login"} label={"Войти"} fontSize={16}/>
                </div>
            </form>
        </div>
    );
};

export default RegisterFormLayout;