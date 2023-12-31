import classes from "./Dashboard.module.sass";
import CardsBox from "../cardsBox/CardsBox.tsx";
import ProgressMetricsSection from "../progressMetricsSection/ProgressMetricsSection.tsx";
import TableSection from "../tableSection/TableSection.tsx";
import LoadingScreen from "../../UI/loadingScreen/screen/LoadingScreen.tsx";
import ErrorScreen from "../../UI/layoutUI/errorScreen/ErrorScreen.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useFetchCurrentUserQuery} from "../../../hooks/UseFetchCurrentUserQuery.ts";
import {isAuthorizationError} from "../../../models/errors/IAuthorizationError.ts";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";


const Dashboard = () => {

    const navigate = useNavigate();
    const {data, isLoading, error} = useFetchCurrentUserQuery();

    useEffect(() => {
        if (error && isAuthorizationError((error as FetchBaseQueryError).data)) navigate("/login");
    }, [error, navigate]);

    if (isLoading) return <LoadingScreen/>
    if (error && !isAuthorizationError((error as FetchBaseQueryError).data)) return <ErrorScreen
        message={JSON.stringify(error)}/>
    if (!data) return <ErrorScreen message={"Мы не смогли получить данные вашего аккаунта"}/>

    const {goalDTOList} = data;

    return (
        <div className={classes.dashboard}>
            <div className={classes.leftSideDashboard}>
                <ProgressMetricsSection goal={goalDTOList[0]} recordList={goalDTOList[0].recordDTOList}/>
                <CardsBox goal={goalDTOList[0]}/>
            </div>
            <TableSection goal={goalDTOList[0]} recordList={goalDTOList[0].recordDTOList}/>
        </div>
    );
};

export default Dashboard;