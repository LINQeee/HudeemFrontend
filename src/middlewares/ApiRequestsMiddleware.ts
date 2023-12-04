import {Middleware} from "redux";
import {notificationSlice} from "../store/reducers/NotificationSlice.ts";
import {NotificationType} from "../utils/enums/NotificationTypeEnum.ts";

export const apiRequestsMiddleware: Middleware = (store) => (next) => (action) => {
    if (action.type.endsWith('/fulfilled')) {
        store.dispatch(notificationSlice.actions.openNotification({
            advice: action.type,
            description: "Success! Explore the world!",
            type: NotificationType.SUCCESS,
            id: new Date().toISOString()
        }));
    } else if (action.type.endsWith('/rejected')) {
        console.log(action);
        store.dispatch(notificationSlice.actions.openNotification({
            advice: "Some error occurred",
            description: "Try again later!",
            type: NotificationType.ERROR,
            id: new Date().toISOString()
        }));
    }

    return next(action);
}