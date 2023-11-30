import classes from "./Notification.module.scss";
import {NotificationType} from "../../../utils/enums/NotificationTypeEnum.ts";
import {FC, useEffect} from "react";
import {notificationSlice} from "../../../store/reducers/NotificationSlice.ts";
import "../notificationBox/NotificationTransitions.scss";
import {useAppDispatch} from "../../../hooks/Redux.ts";
import {INotification} from "../../../models/INotification.ts";

interface NotificationProps {
    notification: INotification;
}

const Notification: FC<NotificationProps> = ({notification}) => {

    const {description, advice, type, id} = notification;
    const dispatch = useAppDispatch();

    const notificationClassName = [
        classes.notification,
        type === NotificationType.SUCCESS ? classes.success : undefined,
        type === NotificationType.ERROR ? classes.error : undefined,
        type === NotificationType.WARNING ? classes.warning : undefined
    ].join(" ");

    useEffect(() => {
        setTimeout(() => dispatch(notificationSlice.actions.closeNotification(id)), 3000);
    }, [dispatch, id]);

    return (
        <div className={notificationClassName}>
            {
                type === NotificationType.SUCCESS ? <i className="fa-thin fa-circle-check"></i> :
                    type === NotificationType.ERROR ? <i className="fa-thin fa-triangle-exclamation"></i> :
                        type === NotificationType.WARNING ? <i className="fa-thin fa-circle-exclamation"></i> : null
            }
            <div className={classes.informationBox}>
                <span>{description}</span>
                <h6>{advice}</h6>
            </div>
        </div>
    );
};

export default Notification;