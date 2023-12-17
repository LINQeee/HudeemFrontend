import classes from "./LoginFormBox.module.sass";
import CodePopup from "./codePopup/CodePopup.tsx";
import LoginForm from "./loginForm/LoginForm.tsx";
import {ICredentials} from "../../../models/ICredentials.ts";
import {userLoginWithPsw} from "../../../services/UserApiService.ts";
import {useLoginUserWithPswMutation} from "../../../api/userApi.ts";
import {useSendCodeMutation} from "../../../api/codeApi.ts";
import {useLazyGetIpQuery} from "../../../api/utilsApi.ts";
import {FC, useState} from "react";

interface LoginFormBoxProps {
    onSuccessVerification: (codeHash: string, email: string) => void;
}

const LoginFormBox: FC<LoginFormBoxProps> = ({onSuccessVerification}) => {

    const [emailPopupOpened, setEmailPopupOpened] = useState<boolean>(false);
    const [currentCredentials, setCurrentCredentials] = useState<Omit<ICredentials, "code">>();
    const [loginUserTrigger] = useLoginUserWithPswMutation();
    const [sendCodeTrigger] = useSendCodeMutation();
    const [getIpTrigger] = useLazyGetIpQuery();

    const submitForm = async (email: string, password: string, rememberMe: boolean) => {
        const payload: Omit<ICredentials, "code" | "ip" | "rememberMe"> = {email, password};

        try {
            await userLoginWithPsw(payload, loginUserTrigger);
            await sendCodeTrigger(email);
            const {data} = await getIpTrigger();
            setCurrentCredentials({rememberMe, email, password, ip: data!});
            setEmailPopupOpened(true);
        } catch (err) {
            console.log(`Failed to login: ${err}`);
        }
    }

    const handleSuccessVerification = (codeHash: string, email: string) => {
        setEmailPopupOpened(false);
        onSuccessVerification(codeHash, email);
    }

    return (
        <div className={classes.formBox}>
            <CodePopup popupVisible={emailPopupOpened} userCredentials={currentCredentials}
                       onSuccessSubmit={handleSuccessVerification}/>
            <LoginForm onSubmitForm={submitForm}/>
        </div>
    );
};

export default LoginFormBox;