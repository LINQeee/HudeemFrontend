import classes from "./ErrorScreen.module.scss";
import {FC} from "react";

interface ErrorScreenProps {
    message: string;
}

const ErrorScreen: FC<ErrorScreenProps> = ({message}) => {
    return (
        <div className={classes.errorScreen}>
            <h3>Произошла ошибка!</h3>
            <span>{message}</span>
        </div>
    );
};

export default ErrorScreen;