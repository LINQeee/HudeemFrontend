import classes from "./CodePopup.module.sass";
import Popup from "../../UI/popup/Popup.tsx";
import {FC, useState} from "react";
import CodeInput from "../codeInput/CodeInput.tsx";
import {useCheckCodeMutation, useSendCodeMutation} from "../../../api/codeApi.ts";
import {ICredentials} from "../../../models/ICredentials.ts";
import {useAppDispatch} from "../../../hooks/Redux.ts";
import {notificationSlice} from "../../../store/reducers/NotificationSlice.ts";
import {NotificationType} from "../../../utils/enums/NotificationTypeEnum.ts";

interface CodePopupProps {
    popupVisible: boolean;
    userCredentials?: Omit<ICredentials, "code">;
    onSuccessSubmit: (codeHash: string, email: string) => void;
}

const CodePopup: FC<CodePopupProps> = ({popupVisible, userCredentials, onSuccessSubmit}) => {

    const [codeWrong, setCodeWrong] = useState<boolean>(false);
    const [checkCodeTrigger] = useCheckCodeMutation();
    const [sendCodeTrigger] = useSendCodeMutation();
    const appDispatch = useAppDispatch();

    if (!userCredentials) return null;

    const codeSubmit = async (value: string) => {
        try {
        const response = await checkCodeTrigger({code: value, email: userCredentials.email, rememberMe: userCredentials.rememberMe, ip: userCredentials.ip}).unwrap();
        onSuccessSubmit(response.code, response.email);
        }
        catch (err) {
            setCodeWrong(true);
        }
    }

    const resendCode = async () => {
        await sendCodeTrigger(userCredentials.email);
        appDispatch(notificationSlice.actions.openNotification({
            advice: "Проверьте почту и введите код",
            description: "Код отправлен",
            type: NotificationType.SUCCESS,
            id: new Date().toISOString()
        }));
    }

    return (
        <Popup popupVisible={popupVisible}>
            <div className={classes.codePopup}>
                <div className={classes.header}>
                    <h2>Проверьте вашу почту</h2>
                    <h5>Мы отправили код на {userCredentials.email}</h5>
                </div>
                <CodeInput onInputSubmit={codeSubmit} isError={codeWrong} removeError={() => setCodeWrong(false)} resendCode={resendCode}/>
            </div>
        </Popup>
    );
};

export default CodePopup;