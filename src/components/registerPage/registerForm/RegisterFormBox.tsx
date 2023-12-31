import CodePopup from "../../UI/formUI/codePopup/CodePopup.tsx";
import {ICredentials} from "../../../models/ICredentials.ts";
import {useCreateUserMutation} from "../../../api/userApi.ts";
import {useSendCodeMutation} from "../../../api/codeApi.ts";
import {FC, useState} from "react";
import RegisterForm from "./RegisterForm.tsx";
import RegisterFormLayout from "../../layouts/registerFormLayout/RegisterFormLayout.tsx";
import {createUser} from "../../../services/UserApiService.ts";

interface LoginFormBoxProps {
    onSuccessVerification: (codeHash: string, email: string) => void;
}

const RegisterFormBox: FC<LoginFormBoxProps> = ({onSuccessVerification}) => {

    const [emailPopupOpened, setEmailPopupOpened] = useState<boolean>(false);
    const [currentCredentials, setCurrentCredentials] = useState<Omit<ICredentials, "code" | "authToken">>();
    const [createUserTrigger] = useCreateUserMutation();
    const [sendCodeTrigger] = useSendCodeMutation();

    const submitForm = async (credentials: Omit<ICredentials, "code" | "authToken">) => {
        try {
            await createUser(credentials, createUserTrigger);
            await sendCodeTrigger(credentials.email);
            setCurrentCredentials(credentials);
            setEmailPopupOpened(true);
        } catch (err) {
            return err;
        }
    }

    const handleSuccessVerification = (codeHash: string, email: string) => {
        setEmailPopupOpened(false);
        onSuccessVerification(codeHash, email);
    }

    return (
        <RegisterFormLayout>
            <CodePopup popupVisible={emailPopupOpened} userCredentials={currentCredentials}
                       onSuccessSubmit={handleSuccessVerification}/>
            <RegisterForm onSubmitForm={submitForm}/>
        </RegisterFormLayout>
    );
};

export default RegisterFormBox;