import "./App.sass";
import {HashRouter, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import {CurrentUserIdContext} from "./context/CurrentUserIdContext.ts";
import BasePageLayout from "./components/basePageLayout/BasePageLayout.tsx";
import LoadingScreen from "./components/UI/loadingScreen/screen/LoadingScreen.tsx";
import NotificationBox from "./components/UI/notificationBox/NotificationBox.tsx";

const Dashboard = lazy(() => import("./components/dashboardPage/dashboard/Dashboard.tsx"));
const LoginPage = lazy(() => import("./components/login&registerPages/loginPage/LoginPage.tsx"));

function App() {

    const currentId = 1;

    return (
        <HashRouter>
            <CurrentUserIdContext.Provider value={currentId}>
                <NotificationBox/>
                <Routes>
                    <Route path={"dashboard"} element={<BasePageLayout page={<Dashboard/>}/>}/>
                    <Route path={"login"} element={<Suspense fallback={<LoadingScreen/>}><LoginPage/></Suspense>}/>
                </Routes>
            </CurrentUserIdContext.Provider>
        </HashRouter>
    )
}

export default App
