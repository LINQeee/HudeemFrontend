import {createBrowserRouter} from "react-router-dom";
import BaseLayout from "../components/BaseLayout/BaseLayout.tsx";
import Dashboard from "../components/dashboardPage/dashboard/Dashboard.tsx";

export const browserRouter = createBrowserRouter([{
    path: "/",
    element: BaseLayout()
}]);