import "./App.scss";
import {HashRouter, Route, Routes} from "react-router-dom";
import {lazy} from "react";
import BaseLayout from "./components/baseLayout/BaseLayout.tsx";
import LoadingScreen from "./components/UI/loadingScreen/screen/LoadingScreen.tsx";

const Dashboard = lazy(() => import("./components/dashboardPage/dashboard/Dashboard.tsx"));

function App() {

    return (
        <HashRouter>
            <BaseLayout/>
            <Routes>
                <Route path={"dashboard"} element={<Dashboard/>} />
                <Route path={"loading"} element={<LoadingScreen/>}/>
            </Routes>
        </HashRouter>
    )
}

export default App
