import "./App.sass";
import {HashRouter, Route, Routes} from "react-router-dom";
import {lazy} from "react";
import {CurrentUserIdContext} from "./context/CurrentUserIdContext.ts";
import NotificationBox from "./components/UI/layoutUI/notificationBox/NotificationBox.tsx";
import MainPageLayout from "./components/layouts/mainPageLayout/MainPageLayout.tsx";
import LoginPageLayout from "./components/layouts/loginPageLayout/LoginPageLayout.tsx";

import manDancing from "./assets/indian-male-dancing.svg";
import Dashboard from "./components/dashboardPage/dashboard/Dashboard.tsx";

const LoginPage = lazy(() => import("./components/loginPage/LoginPage.tsx"));
const RegisterPage = lazy(() => import("./components/registerPage/RegisterPage.tsx"));

function App() {

    const currentId = 111;

    return (
        <HashRouter>
            <CurrentUserIdContext.Provider value={currentId}>
                <NotificationBox/>
                <Routes>
                    <Route path={"dashboard"} element={<MainPageLayout page={<Dashboard/>}/>}/>
                    <Route path={"login"} element={<LoginPageLayout page={<LoginPage/>} imgUrl={manDancing}/>}/>
                    <Route path={"register"} element={<LoginPageLayout page={<RegisterPage/>} imgUrl={manDancing}/>}/>
                </Routes>
            </CurrentUserIdContext.Provider>
        </HashRouter>
    )
}

export default App
