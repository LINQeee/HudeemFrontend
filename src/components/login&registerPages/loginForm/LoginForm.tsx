import classes from "./LoginForm.module.sass";
import FormInput from "../../UI/formInput/FormInput.tsx";
import {FC, useCallback, useState} from "react";
import {FormInputEnum} from "../../../utils/enums/FormInputEnum.ts";
import {useForm} from "../../../hooks/UseForm.ts";
import {IInputError} from "../../../utils/types/InputErrorType.ts";
import {StyleType} from "../../../utils/enums/StyleTypeEnum.ts";
import ActionButton from "../../UI/actionButton/ActionButton.tsx";
import Checkbox from "../../UI/checkbox/Checkbox.tsx";
import CustomLink from "../../UI/customLink/CustomLink.tsx";

interface LoginFormProps {
    onSubmitForm: (email: string, password: string, rememberMe: boolean) => Promise<IInputError> | any;
}

const LoginForm: FC<LoginFormProps> = ({onSubmitForm}) => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [errors, removeError, submit] = useForm(() => onSubmitForm(email, password, rememberMe));

    const submitForm = useCallback(() => submit([
        {value: email, type: FormInputEnum.EMAIL},
        {value: password, type: FormInputEnum.PASSWORD}
    ]), [submit, email, password]);

    return (
        <form className={classes.form}>
            <div className={classes.header}>
                <h1>С возвращением!</h1>
                <h5>Пожалуйста введите свои данные</h5>
            </div>
            <FormInput type={FormInputEnum.EMAIL} label={"Электронная почта"} value={email} setValue={setEmail}
                       error={errors.find(error => error.inputType === FormInputEnum.EMAIL)}
                       removeError={removeError}
                       autocomplete={"email"}
            />
            <FormInput type={FormInputEnum.PASSWORD} label={"Пароль"} value={password} setValue={setPassword}
                       error={errors.find(error => error.inputType === FormInputEnum.PASSWORD)}
                       removeError={removeError}
                       autocomplete={"current-password"}
            />
            <div className={classes.additionalBox}>
                <div>
                    <Checkbox onChange={() => setRememberMe(!rememberMe)}/>
                    <span>Запомнить меня на 30 дней</span>
                </div>
                <CustomLink href={"https://youtube.com"} label={"Забыли пароль?"} fontSize={18}/>
            </div>
            <ActionButton label={"Войти"} iconClasses={""} styleType={StyleType.PRIMARY} onClick={submitForm} height={37}/>
            <div className={classes.additionalAdvice}>
                <span>Нету аккаунта?</span>
                <CustomLink href={"https://youtube.com"} label={"Зарегистрироваться"} fontSize={16}/>
            </div>
        </form>
    );
};

export default LoginForm;