import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {mainApi} from "../api/mainApi.ts";

const rootReducer = combineReducers({
    [mainApi.reducerPath]: mainApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mainApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];