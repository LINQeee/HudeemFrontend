import {Middleware} from "redux";
import {notificationSlice} from "../store/reducers/NotificationSlice.ts";
import {NotificationType} from "../utils/enums/NotificationTypeEnum.ts";
import {IAuthorizationError, isAuthorizationError} from "../models/errors/IAuthorizationError.ts";
import {isUnexpectedError} from "../models/errors/IUnexpectedError.ts";

export const apiRequestsMiddleware: Middleware = (store) => (next) => (action) => {
    if (action.type.endsWith('/fulfilled')) {
        console.log(`success request: ${action.meta.arg.endpointName}`);
    } else if (action.type.endsWith('/rejected')) {
        if (isAuthorizationError(action.payload.data)) {
            store.dispatch(notificationSlice.actions.openNotification({
                advice: (action.payload.data as IAuthorizationError).msg,
                description: "Не получилось войти!",
                type: NotificationType.ERROR,
                id: new Date().toISOString()
            }));
        }
        else if (isUnexpectedError(action.payload.data)){
            store.dispatch(notificationSlice.actions.openNotification({
                advice: "Попробуйте снова позже!",
                description: "Произошла непредвиденная ошибка!",
                type: NotificationType.ERROR,
                id: new Date().toISOString()
            }));
        }
    }

    return next(action);
}