import classes from "./DashboardBox.module.scss";
import {useFetchUserQuery} from "../../api/userApi.ts";
import CardsBox from "../cardsBox/CardsBox.tsx";

const DashboardBox = () => {

    const {data} = useFetchUserQuery(1);

    if (data === undefined) return null;

    return (
        <div className={classes.dashboardBox}>
            <CardsBox user={data.userDTO}/>
        </div>
    );
};

export default DashboardBox;