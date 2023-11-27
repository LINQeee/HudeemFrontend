import "./App.scss";
import {useFetchUserQuery} from "./api/userApi.ts";
import AsideBar from "./components/asideBar/AsideBar.tsx";
import Header from "./components/headerBar/header/Header.tsx";
import Dashboard from "./components/dashboardPage/dashboard/Dashboard.tsx";

function App() {

    const {isLoading, error, data} = useFetchUserQuery(1);

    if (isLoading || error || data === undefined) return <h1>Loading or error</h1>;

    return (
        <>
            <AsideBar/>
            <Header/>
            <Dashboard/>
        </>
    )
}

export default App
