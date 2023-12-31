import RegisterFormBox from "./registerForm/RegisterFormBox.tsx";
import {saveCredentials} from "../../services/CookieCredentialsService.ts";
import Popup from "../UI/popup/Popup.tsx";
import {useState} from "react";
import PersonalInfoFormBox from "./personalInfoForm/PersonalInfoFormBox.tsx";

const RegisterPage = () => {

    const [registrationComplete, setRegistrationComplete] = useState<boolean>(false);

    const onRegistrationComplete = (authToken: string, email: string) => {
        saveCredentials(authToken, email);
        setRegistrationComplete(true);
    }

    return (
        <>
            <Popup popupVisible={!registrationComplete}><RegisterFormBox
                onSuccessVerification={onRegistrationComplete}/></Popup>
            <Popup popupVisible={registrationComplete}><PersonalInfoFormBox/></Popup>
        </>
    )
};

export default RegisterPage;