import classes from "../modules/FormLayout.module.sass";
import React, {FC} from "react";

interface PersonalInfoFormProps {
    children: React.ReactNode;
}

const PersonalInfoFormLayout: FC<PersonalInfoFormProps> = ({children}) => {
    return (
        <div className={classes.formBox}>
            <form className={classes.form}>
                <div className={classes.header}>
                    <h1>Расскажите о себе!</h1>
                    <h5>Пожалуйста введите свои данные</h5>
                </div>
                {children}
            </form>
        </div>
    );
};

export default PersonalInfoFormLayout;