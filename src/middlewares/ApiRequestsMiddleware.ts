import {Middleware} from "redux";
import {notificationSlice} from "../store/reducers/NotificationSlice.ts";
import {NotificationType} from "../utils/enums/NotificationTypeEnum.ts";
import {isValidationError} from "../models/IValidationError.ts";

export const apiRequestsMiddleware: Middleware = (store) => (next) => (action) => {
    if (action.type.endsWith('/fulfilled')) {
        console.log(`success request: ${action.meta.arg.endpointName}`);
    } else if (action.type.endsWith('/rejected')) {
        if (typeof action.payload.data !== "object" || !isValidationError(action.payload.data)) {
            store.dispatch(notificationSlice.actions.openNotification({
                advice: "Some error occurred",
                description: "Try again later!",
                type: NotificationType.ERROR,
                id: new Date().toISOString()
            }));
        }
    }

    return next(action);
}