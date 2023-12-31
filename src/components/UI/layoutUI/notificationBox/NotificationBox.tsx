import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useAppSelector} from "../../../../hooks/Redux.ts";
import Notification from "../notification/Notification.tsx";
import classes from "./NotificationBox.module.sass";

const NotificationBox = () => {

    const {notifications} = useAppSelector(state => state.notificationReducer);

    return (
        <TransitionGroup className={classes.notificationBox}>
            {
                notifications.map(notification =>
                    <CSSTransition
                        timeout={600}
                        classNames="notification"
                        key={notification.id}
                    >
                        <Notification notification={notification}/>
                    </CSSTransition>
                )
            }
        </TransitionGroup>
    );
};

export default NotificationBox;