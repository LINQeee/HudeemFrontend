import FormInput from "../UI/formUI/formInput/FormInput.tsx";
import {FC, useCallback, useState} from "react";
import {FormInputEnum} from "../../utils/enums/FormInputEnum.ts";
import {useForm} from "../../hooks/UseForm.ts";
import {IInputError} from "../../utils/types/InputErrorType.ts";
import {StyleType} from "../../utils/enums/StyleTypeEnum.ts";
import ActionButton from "../UI/actionButton/ActionButton.tsx";
import CustomLink from "../UI/customLink/CustomLink.tsx";
import {ICredentials} from "../../models/ICredentials.ts";
import RememberCheckbox from "../UI/formUI/rememberCheckbox/RememberCheckbox.tsx";

interface LoginFormProps {
    onSubmitForm: (credentials: Omit<ICredentials, "code" | "authToken">) => Promise<IInputError> | any;
}

const LoginForm: FC<LoginFormProps> = ({onSubmitForm}) => {

    const [credentials, setCredentials] = useState<Omit<ICredentials, "authToken" | "code">>({
        rememberMe: false,
        email: "",
        password: ""
    })
    const formHook = useForm(() => onSubmitForm(credentials));

    const submitForm = useCallback(() => formHook.submit([
        {value: credentials.email, type: FormInputEnum.EMAIL},
        {value: credentials.password, type: FormInputEnum.PASSWORD}
    ]), [formHook.submit, credentials.email, credentials.password]);

    return (
        <>
            <FormInput type={FormInputEnum.EMAIL} label={"Электронная почта"} value={credentials.email}
                       setValue={(email: any) => setCredentials({...credentials, email})}
                       formHook={formHook}
                       autocomplete={"email"}
            />
            <FormInput type={FormInputEnum.PASSWORD} label={"Пароль"} value={credentials.password}
                       setValue={(password: any) => setCredentials({...credentials, password})}
                       formHook={formHook}
                       autocomplete={"current-password"}
            />
            <div className={"additionalBox"}>
                <RememberCheckbox onChange={() => setCredentials({...credentials, rememberMe: !credentials.rememberMe})}/>
                <CustomLink href={"https://youtube.com"} label={"Забыли пароль?"} fontSize={18}/>
            </div>
            <ActionButton label={"Войти"} styleType={StyleType.PRIMARY} onClick={submitForm} height={37}/>
        </>
    );
};

export default LoginForm;