import CodePopup from "../UI/formUI/codePopup/CodePopup.tsx";
import {ICredentials} from "../../models/ICredentials.ts";
import {userLoginWithPsw} from "../../services/UserApiService.ts";
import {useLazyLoginUserWithPswQuery} from "../../api/userApi.ts";
import {useSendCodeMutation} from "../../api/codeApi.ts";
import {FC, useState} from "react";
import LoginForm from "./LoginForm.tsx";
import LoginFormLayout from "../layouts/loginFormLayout/LoginFormLayout.tsx";

interface LoginFormBoxProps {
    onSuccessVerification: (codeHash: string, email: string) => void;
}

const LoginFormBox: FC<LoginFormBoxProps> = ({onSuccessVerification}) => {

    const [emailPopupOpened, setEmailPopupOpened] = useState<boolean>(false);
    const [currentCredentials, setCurrentCredentials] = useState<Omit<ICredentials, "code" | "authToken">>();
    const [loginUserTrigger] = useLazyLoginUserWithPswQuery();
    const [sendCodeTrigger] = useSendCodeMutation();

    const submitForm = async (credentials: Omit<ICredentials, "code" | "authToken">) => {
        try {
            await userLoginWithPsw(credentials, loginUserTrigger);
            await sendCodeTrigger(credentials.email);
            setCurrentCredentials(credentials)
            setEmailPopupOpened(true);
        } catch (err) {
            console.log(`Failed to login: ${JSON.stringify(err)}`);
        }
    }

    const handleSuccessVerification = (authTokenHash: string, email: string) => {
        setEmailPopupOpened(false);
        onSuccessVerification(authTokenHash, email);
    }

    return (
        <LoginFormLayout>
            <CodePopup popupVisible={emailPopupOpened} userCredentials={currentCredentials}
                       onSuccessSubmit={handleSuccessVerification}/>
            <LoginForm onSubmitForm={submitForm}/>
        </LoginFormLayout>
    );
};

export default LoginFormBox;