import classes from "./Dashboard.module.sass";
import CardsBox from "../cardsBox/CardsBox.tsx";
import ProgressMetricsSection from "../progressMetricsSection/ProgressMetricsSection.tsx";
import TableSection from "../tableSection/TableSection.tsx";
import {useFetchCurrentUserQuery} from "../../../hooks/UseFetchCurrentUserQuery.ts";
import LoadingScreen from "../../UI/loadingScreen/screen/LoadingScreen.tsx";
import ErrorScreen from "../../UI/errorScreen/ErrorScreen.tsx";

const Dashboard = () => {

    const {data, isLoading, error} = useFetchCurrentUserQuery();

    if (isLoading) return <LoadingScreen/>
    if (error) return <ErrorScreen message={JSON.stringify(error)}/>
    if (!data) return <ErrorScreen message={"Мы не смогли получить данные вашего аккаунта"}/>

    const {userDTO, recordDTOList} = data;

    return (

        <div className={classes.dashboard}>
            <div className={classes.leftSideDashboard}>
                <ProgressMetricsSection user={userDTO} recordList={recordDTOList}/>
                <CardsBox user={userDTO}/>
            </div>
            <TableSection user={userDTO} recordList={recordDTOList}/>
        </div>
    );
};

export default Dashboard;