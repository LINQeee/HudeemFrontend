import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {mainApi} from "../api/mainApi.ts";
import {apiRequestsMiddleware} from "../middlewares/ApiRequestsMiddleware.ts";
import notificationReducer from "./reducers/NotificationSlice.ts";
import {utilsApi} from "../api/utilsApi.ts";

const rootReducer = combineReducers({
    [mainApi.reducerPath]: mainApi.reducer,
    notificationReducer,
    [utilsApi.reducerPath]: utilsApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mainApi.middleware).concat(apiRequestsMiddleware).concat(utilsApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];