import "./App.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {lazy} from "react";
import BaseLayout from "./components/baseLayout/BaseLayout.tsx";
const Dashboard = lazy(() => import("./components/dashboardPage/dashboard/Dashboard.tsx"));

function App() {

    return (
        <BrowserRouter>
            <BaseLayout/>
            <Routes>
                <Route path={"dashboard"} element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
