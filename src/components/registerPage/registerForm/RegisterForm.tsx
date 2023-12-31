import FormInput from "../../UI/formUI/formInput/FormInput.tsx";
import {FC, useCallback, useState} from "react";
import {FormInputEnum} from "../../../utils/enums/FormInputEnum.ts";
import {useForm} from "../../../hooks/UseForm.ts";
import {IInputError} from "../../../utils/types/InputErrorType.ts";
import {StyleType} from "../../../utils/enums/StyleTypeEnum.ts";
import ActionButton from "../../UI/actionButton/ActionButton.tsx";
import {ICredentials} from "../../../models/ICredentials.ts";
import RememberCheckbox from "../../UI/formUI/rememberCheckbox/RememberCheckbox.tsx";

interface LoginFormProps {
    onSubmitForm: (credentials: Omit<ICredentials, "code" | "authToken">) => Promise<IInputError> | any;
}

interface RegisterCredentials extends Omit<ICredentials, "code" | "authToken"> {
    confirmPassword: string;
}

const RegisterForm: FC<LoginFormProps> = ({onSubmitForm}) => {

    const [credentials, setCredentials] = useState<RegisterCredentials>({
        rememberMe: false,
        email: "",
        password: "",
        confirmPassword: ""
    })
    const formHook = useForm(() => onSubmitForm(credentials));

    const submitForm = useCallback(() => {
        if (credentials.password !== credentials.confirmPassword) {
            formHook.addError({errorMessage: "Пароли не совпадают!", inputType: FormInputEnum.CONFIRM_PASSWORD});
            return;
        }
        formHook.submit([
            {value: credentials.email, type: FormInputEnum.EMAIL},
            {value: credentials.password, type: FormInputEnum.PASSWORD}
        ]);
    }, [credentials.email, credentials.password, credentials.confirmPassword, formHook]);

    return (
        <>
            <FormInput type={FormInputEnum.EMAIL} label={"Электронная почта"} value={credentials.email}
                       setValue={(email: any) => setCredentials({...credentials, email})}
                       formHook={formHook}
                       autocomplete={"username"}
            />
            <FormInput type={FormInputEnum.PASSWORD} label={"Пароль"} value={credentials.password}
                       setValue={(password: any) => setCredentials({...credentials, password})}
                       formHook={formHook}
                       autocomplete={"new-password"}
            />
            <FormInput type={FormInputEnum.CONFIRM_PASSWORD} label={"Подтвердите пароль"} value={credentials.confirmPassword}
                       setValue={(confirmPassword: any) => setCredentials({...credentials, confirmPassword})}
                       formHook={formHook}
                       autocomplete={"new-password"}
            />
            <div className={"additionalBox"}>
                <RememberCheckbox
                    onChange={() => setCredentials({...credentials, rememberMe: !credentials.rememberMe})}/>
            </div>
            <ActionButton label={"Зарегистрироваться"} styleType={StyleType.PRIMARY} onClick={submitForm} height={37}/>
        </>
    );
};

export default RegisterForm;