import {useNavigate} from "react-router-dom";
import LoginFormBox from "./LoginFormBox.tsx";
import {saveCredentials} from "../../services/CookieCredentialsService.ts";

const LoginPage = () => {

    const navigate = useNavigate();

    const onLoginComplete = (authTokenHash: string, email: string) => {
        saveCredentials(authTokenHash, email);
        navigate("/dashboard");
    }

    return <LoginFormBox onSuccessVerification={onLoginComplete}/>;
};

export default LoginPage;