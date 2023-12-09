import "./App.sass";
import {HashRouter, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import {CurrentUserIdContext} from "./context/CurrentUserIdContext.ts";
import LoadingScreen from "./components/UI/loadingScreen/screen/LoadingScreen.tsx";

const Dashboard = lazy(() => import("./components/dashboardPage/dashboard/Dashboard.tsx"));
const BaseLayout = lazy(() => import("./components/basePageLayout/BaseLayout.tsx"));

function App() {

    const currentId = 1;

    return (
        <HashRouter>
            <CurrentUserIdContext.Provider value={currentId}>
                <Suspense fallback={<LoadingScreen/>}><BaseLayout/></Suspense>
            <Routes>
                <Route path={"dashboard"} element={<Suspense fallback={<LoadingScreen/>}><Dashboard/></Suspense>} />
            </Routes>
            </CurrentUserIdContext.Provider>
        </HashRouter>
    )
}

export default App
