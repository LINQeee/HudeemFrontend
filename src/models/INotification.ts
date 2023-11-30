import {NotificationType} from "../utils/enums/NotificationTypeEnum.ts";

export interface INotification {
    description: string;
    advice: string;
    type: NotificationType;
    id: string;
}