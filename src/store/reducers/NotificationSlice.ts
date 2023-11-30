import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {INotification} from "../../models/INotification.ts";

interface NotificationState {
    notifications: INotification[]
}

const initialState: NotificationState = {
    notifications: []
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        openNotification(state, action: PayloadAction<INotification>) {
            state.notifications.push(action.payload);
        },
        closeNotification(state, action: PayloadAction<string>) {
            state.notifications = state.notifications.filter(note => note.id !== action.payload);
        }
    }
});

export default notificationSlice.reducer;