import classes from "./Dashboard.module.scss";
import CardsBox from "../cardsBox/CardsBox.tsx";
import ProgressMetricsSection from "../progressMetricsSection/ProgressMetricsSection.tsx";
import TableSection from "../tableSection/TableSection.tsx";

const Dashboard = () => {

    return (
        <div className={classes.dashboard}>
            <div className={classes.leftSideDashboard}>
                <ProgressMetricsSection/>
                <CardsBox/>
            </div>
            <TableSection/>
        </div>
    );
};

export default Dashboard;