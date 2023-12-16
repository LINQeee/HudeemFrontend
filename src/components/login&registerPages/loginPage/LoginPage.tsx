import classes from "./LoginPage.module.sass";
import Logo from "../../UI/logo/Logo.tsx";
import manDancing from "../../../assets/indian-male-dancing.svg";
import LoginForm from "../loginForm/LoginForm.tsx";
import CodePopup from "../codePopup/CodePopup.tsx";
import "./LoginPage.sass";
import {useState} from "react";
import Cookies from "universal-cookie";
import {plusDays} from "../../../services/DateService.ts";
import {userLoginWithPsw} from "../../../services/UserApiService.ts";
import {useLoginUserWithPswMutation} from "../../../api/userApi.ts";
import {useSendCodeMutation} from "../../../api/codeApi.ts";
import {ICredentials} from "../../../models/ICredentials.ts";
import {useNavigate} from "react-router-dom";
import {useLazyGetIpQuery} from "../../../api/utilsApi.ts";

const LoginPage = () => {

    const [emailPopupOpened, setEmailPopupOpened] = useState<boolean>(false);
    const [loginUserTrigger] = useLoginUserWithPswMutation();
    const [sendCodeTrigger] = useSendCodeMutation();
    const [getIpTrigger] = useLazyGetIpQuery();
    const [currentCredentials, setCurrentCredentials] = useState<Omit<ICredentials, "code">>();
    const navigate = useNavigate();

    const cookies = new Cookies(null, {path: "/", expires: plusDays(new Date(), 30)})

    const saveCredentials = (codeHash: string, email: string) => {
        cookies.set("code", codeHash);
        cookies.set("email", email);
        navigate("/dashboard");
    }


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

    return (
        <div className={classes.loginPage}>
            <Logo className={classes.logo}/>
            <img className={classes.backgroundImage} src={manDancing} alt={"background"}/>
            <div className={classes.formBox}>
                <CodePopup popupVisible={emailPopupOpened} userCredentials={currentCredentials}
                           onSuccessSubmit={saveCredentials}/>
                <LoginForm onSubmitForm={submitForm}/>
            </div>
        </div>
    );
};

export default LoginPage;